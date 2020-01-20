import { query } from '#root/db';
import { handleError, sendResponse } from './utils';

const buildParams = (id) => ({
    TableName: 'sensei',
    KeyConditionExpression: 'PK = :pk and SK = :sk',
    ExpressionAttributeValues: {
        ":pk": id,
        ":sk": "SESSION"
    }
});

const format = ({ Items: items = []}) => {
    if (items.length === 0)
        return null;
    const [session] = items;
    return {
        id: session.PK,
        createdAt: session.createdAt,
        expiresAt: session.expiresAt,
        userId: session.userId
    }
}

const getSession = (req, res, next) => {
    if (!req.params.id) 
        throw new Error('Invalid Session ID');
    
    const { id } = req.params;

    return query(buildParams(id))
        .then(format)
        .then(sendResponse(res))
        .catch(handleError(next));
};

export default getSession;