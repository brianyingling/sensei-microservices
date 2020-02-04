import { query } from '#root/db';
import { handleError, sendResponse } from './utils';
import UserFormatter from '#root/formatters/User';

const buildParams = (id) => ({
  TableName: 'sensei',
  KeyConditionExpression: 'PK = :pk',
  ExpressionAttributeValues: {
    ':pk': id,
  },
});

const format = ({ Items: items = [] }) => {
  if (items.length === 0) return null;
  const [user] = items;
  return UserFormatter.fromDb(user);
};

export const queryForUser = (id: string) => (
  query(buildParams(id))
    .then(format)
);

const getUser = (req, res) => (
  queryForUser(req.params.id)
    .then(sendResponse(res))
    .catch(handleError)
);

export default getUser;
