import {
  Request,
  Response,
  NextFunction
} from 'express';
import { query } from '#root/db';
import { handleError, sendResponse } from './utils';

const params = {
  TableName: 'sensei',
  IndexName: 'SK-data-index',
  KeyConditionExpression: 'SK = :sk',
  ExpressionAttributeValues: {
    ':sk': 'USER',
  },
};

const format = ({ Items: items = [] }) => items;

const getUsers = async (req: Request, res: Response, next: NextFunction) => (
  query(params)
    .then(format)
    .then(sendResponse(res))
    .catch(handleError(next))
);

export default getUsers;
