import { query } from '#root/db';

const buildParams = (id) => ({
    TableName: 'sensei',
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
        ":pk": id,
    }
 });

const sendResponse = res => data => res.send(data);

const handleError = next => e => next(e);

const format = ({Items: items = []}) => {
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