import { UsersService } from '#root/adapters';

const createUser = async (parent, { email, password }, context, info) => {
    return await UsersService.createUser(email, password);
}

const createSession = async (parent, { email, password }, context, info) => {
    return await UsersService.createSession(email, password);
}

export {
    createSession,
    createUser
}