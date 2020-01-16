import { ReadingsService } from '#root/adapters';
import { createUser } from './Mutation';
import { 
    getLatestReadings as latestReadings,
    getUser as user,
} from './Query'

export default {
    Mutation: {
        createUser,
    },
    Query: {
        latestReadings,
        user
    }
};
