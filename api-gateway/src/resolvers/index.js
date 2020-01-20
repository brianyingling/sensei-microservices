import { ReadingsService } from '#root/adapters';
import { createSession, createUser } from './Mutation';
import { 
    getLatestReadings as latestReadings,
    getSession as session,
    getUser as user,
} from './Query'

export default {
    Mutation: {
        createSession,
        createUser,
    },
    Query: {
        latestReadings,
        session,
        user
    }
};
