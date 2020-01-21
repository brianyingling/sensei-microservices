import { UsersService } from '#root/adapters';

const createUser = async (parent, { email, password }) => UsersService.createUser(email, password);

const createSession = async (parent, { email, password }, context) => {
  const session = await UsersService.createSession(email, password);
  context.res.cookie('sessionId', session.id, { httpOnly: true });
  return session;
};

export {
  createSession,
  createUser,
};
