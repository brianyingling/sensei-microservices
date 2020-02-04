import {
  Request,
  Response,
  NextFunction
} from 'express';
import { put } from '#root/db';
import getUserByEmail from './getUserByEmail';
import { handleError, passwordCompareSync } from './utils';
import { Session } from '#root/formatters/Session';
import SessionFormatter from '#root/formatters/Session';

const sendFormattedResponse = (res: Response) => (formatted: Session) => res.send(formatted);

const createSession = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.email || !req.body.password) {
    return next(new Error('Invalid email or password'));
  }

  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (!passwordCompareSync(password, user.passwordHash)) {
    return next(new Error('Invalid password'));
  }

  const session = SessionFormatter.toDb(user);

  const params = {
    Item: session,
    TableName: 'sensei',
  };

  return put(params)
    .then(() => SessionFormatter.fromDb(session))
    .then(sendFormattedResponse(res))
    .catch(handleError(next));
};

export default createSession;
