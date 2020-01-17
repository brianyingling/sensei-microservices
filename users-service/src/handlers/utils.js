import bcrypt from 'bcryptjs';

const formatSession = ({ 
    PK: id, 
    createdAt, 
    expiresAt, 
    userId
}) => ({
    id,
    createdAt,
    expiresAt,
    userId
});

const handleError = next => e => next(e);

const hashPassword = password => (
    bcrypt.hashSync(password, bcrypt.genSaltSync(12))
);

const passwordCompareSync = (passwordToTest, passwordHash) => (
    bcrypt.compareSync(passwordToTest, passwordHash)
);

const sendResponse = res => data => res.send(data);

export {
    formatSession,
    handleError,
    hashPassword,
    passwordCompareSync,
    sendResponse
}