import { ReadingsService, UsersService } from '#root/adapters'

const getLatestReadings = async (parent, args, context, info) => {
    return await ReadingsService.getLatestReadingOfEachLocation();
}

const getUser = async (parent, { id }, context, info) => {
    return await UsersService.getUser(id) || null;
}

const getSession = async (obj, args, context, info) => {
    if (args.me !== true)
        throw new Error('Invalid argument');
    return context.res.locals.session;
}

export {
    getLatestReadings,
    getSession,
    getUser,
}