import AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});

const makeQuery = params => {
    return new Promise((resolve, reject) => {
        console.log('inside new promise');
        docClient.query(params, (err, data) => {
            console.log('data:', data);
            console.log('err:', err);
            if (err) reject(err)
            else resolve(data);
        });
    });
};

const put = params => {
    return new Promise((resolve, reject) => {
        docClient.put(params, (err, data) => {
            if (err) reject(err)
            else resolve(data);
        });
    });
}

export {
    makeQuery,
    put
};