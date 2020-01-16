import { ReadingsService } from '#root/adapters';
import { 
    getLatestReadings as latestReadings,
    getUser as user,
    helloWorld
} from './Query'

export default {
    Query: {
        helloWorld,
        latestReadings,
        user
    }
};
