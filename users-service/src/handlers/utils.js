import bcrypt from 'bcryptjs';

const handleError = (next) => (e) => next(e);

const hashPassword = (password) => (
  bcrypt.hashSync(password, bcrypt.genSaltSync(12))
);

const passwordCompareSync = (passwordToTest, passwordHash) => (
  bcrypt.compareSync(passwordToTest, passwordHash)
);

const sendResponse = (res) => (data) => res.send(data);

export {
  handleError,
  hashPassword,
  passwordCompareSync,
  sendResponse,
};
