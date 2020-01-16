import { query } from '#root/db';
import { handleError, sendResponse } from './utils';

const buildParams = (id) => ({
    TableName: 'sensei',
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
        ":pk": id,
    }
 });

const format = ({Items: items = []}) => {
    if (items.length === 0)
        return null;
    const [user] = items;
    return {
        id: user.PK,
        email: user.email,
        passwordHash: user.passwordHash
    };
}

const getUser = (req, res, next) => (
    query(buildParams(req.params.id))
        .then(format)
        .then(sendResponse(res))
        .catch(handleError)
);

export default getUser;