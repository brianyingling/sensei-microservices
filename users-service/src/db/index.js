"use strict";
exports.__esModule = true;
var aws_sdk_1 = require("aws-sdk");
var docClient = new aws_sdk_1["default"].DynamoDB.DocumentClient({
    region: 'us-east-1'
});
var put = function (params) { return new Promise(function (resolve, reject) {
    docClient.put(params, function (err, data) {
        if (err)
            reject(err);
        else
            resolve(data);
    });
}); };
exports.put = put;
var query = function (params) { return new Promise(function (resolve, reject) {
    docClient.query(params, function (err, data) {
        if (err)
            reject(err);
        else
            resolve(data);
    });
}); };
exports.query = query;
