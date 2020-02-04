import { put, query } from '#root/db';
import { handleError, sendResponse } from './utils';
import UserFormatter from '#root/formatters/User';

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

  const Item = UserFormatter.toDb({ email, password });

  const params = {
    Item: UserFormatter.toDb({ email, password }),
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
