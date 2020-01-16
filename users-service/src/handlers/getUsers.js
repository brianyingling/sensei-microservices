
import { query } from '#root/db';
import { handleError, sendResponse } from './utils';

const params = {
    TableName: 'sensei',
    IndexName: 'SK-data-index',
    KeyConditionExpression: 'SK = :sk',
    ExpressionAttributeValues: {
        ":sk": "USER",
    }
};

const format = ({Items: items = []}) => {
    console.log('response:', items);
    return items;
}

const getUsers = async (req, res, next) => (
    query(params)
        .then(format)
        .then(sendResponse(res))
        .then(handleError(next))
);

export default getUsers;