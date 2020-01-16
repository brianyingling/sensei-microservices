const handleError = next => e => next(e);

const sendResponse = res => data => res.send(data);

export {
    handleError,
    sendResponse
}