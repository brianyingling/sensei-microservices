import AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1',
});

const put = (params) => new Promise((resolve, reject) => {
  docClient.put(params, (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

const query = (params) => new Promise((resolve, reject) => {
  docClient.query(params, (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

export {
  put,
  query,
};
