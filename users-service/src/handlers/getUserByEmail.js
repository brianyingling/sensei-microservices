import { query } from '#root/db';

const format = ({Items: items = []}) => {
    if (!items.length) return null;
    const [user] = items;
    return {
        id: user.PK,
        email: user.email,
        passwordHash: user.passwordHash
    };
}

const getUserByEmail = email => {
    const params = {
        TableName: 'sensei',
        IndexName: 'SK-data-index',
        KeyConditionExpression: ':SK = SK and #d = :data',
        ExpressionAttributeNames: {
            '#d': 'data'
        },
        ExpressionAttributeValues: {
            ':SK': 'USER',
            ':data': email
        } 
    }
    return query(params)
        .then(format);
}

export default getUserByEmail;