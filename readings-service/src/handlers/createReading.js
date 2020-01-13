import { put } from '#root/db';

const params = {};

const sendResponse = res => data => res.send(data);

const handleError = next => e => next(e);

const createReading = (req, res, next) => {
    return put(params)
        .then(sendResponse)
        .catch(handleError(next));
}