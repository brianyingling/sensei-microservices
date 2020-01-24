import { put } from '#root/db';
import getUserByEmail from './getUserByEmail';
import { handleError, passwordCompareSync } from './utils';
import SessionFormatter from '#root/formatters/Session';

const sendFormattedResponse = (res) => (formatted) => res.send(formatted);

const createSession = async (req, res, next) => {
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
