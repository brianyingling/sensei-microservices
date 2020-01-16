import { ReadingsService, UsersService } from '#root/adapters'

const getLatestReadings = async (parent, args, context, info) => {
    return await ReadingsService.getLatestReadingOfEachLocation();
}

const getUser = async (parent, { id }, context, info) => {
    return await UsersService.getUser(id) || null;
}

export {
    getLatestReadings,
    getUser,
}