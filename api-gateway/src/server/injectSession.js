import { UsersService } from '#root/adapters';

const injectSession = async (req, res, next) => {
  if (req.cookies.sessionId) {
    const session = await UsersService.getSession(req.cookies.sessionId);
    res.locals.session = session;
  }
  return next();
};

export default injectSession;
