import bcrypt from 'bcryptjs';
import { NextFunction, Response } from 'express'

const handleError = (next: NextFunction) => (e: Error) => next(e);

const hashPassword = (password: string) => (
  bcrypt.hashSync(password, bcrypt.genSaltSync(12))
);

const passwordCompareSync = (passwordToTest: string, passwordHash: string) => (
  bcrypt.compareSync(passwordToTest, passwordHash)
);

const sendResponse = (res: Response) => (data) => res.send(data);

export {
  handleError,
  hashPassword,
  passwordCompareSync,
  sendResponse,
};
