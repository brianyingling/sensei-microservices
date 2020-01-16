import AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});

const query = params => {
    return new Promise((resolve, reject) => {
        docClient.query(params, (err, data) => {
            if (err) reject(err)
            else resolve(data);
        });
    });
};

export {
    query
}