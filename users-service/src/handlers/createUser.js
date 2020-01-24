import uuidv4 from 'uuid/v4';
import { put, query } from '#root/db';
import {
  handleError,
  hashPassword,
  sendResponse,
} from './utils';

const format = ({ email, PK: id }) => () => ({ email, id });

const buildGetUserByEmailParams = (email) => ({
  TableName: 'sensei',
  IndexName: 'SK-data-index',
  KeyConditionExpression: 'SK = :sk and #d = :data',
  ExpressionAttributeNames: {
    '#d': 'data',
  },
  ExpressionAttributeValues: {
    ':sk': 'USER',
    ':data': email,
  },
});

const checkIfUserAlreadyExists = () => (res) => {
  if (res.Items && res.Items.length > 0) { throw new Error('User already exists'); }
};

const getUserByEmail = (email) => query(buildGetUserByEmailParams(email));

const createUser = (req, res, next) => {
  if (!req.body.email || !req.body.password) { throw new Error('Invalid body!'); }

  const { email, password } = req.body;
  const date = new Date().toISOString();

  const Item = {
    createdAt: date,
    data: email,
    email,
    passwordHash: hashPassword(password),
    PK: `User-${uuidv4()}`,
    SK: 'USER',
    updatedAt: date,
  };

  const params = {
    Item,
    TableName: 'sensei',
  };

  return getUserByEmail(email)
    .then(checkIfUserAlreadyExists(next))
    .then(() => put(params))
    .then(format(Item))
    .then(sendResponse(res))
    .catch(handleError(next));
};

export default createUser;
