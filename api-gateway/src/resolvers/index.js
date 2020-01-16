import { ReadingsService } from '#root/adapters';
import { 
    getLatestReadings as latestReadings,
    getUser as user,
} from './Query'

export default {
    Query: {
        latestReadings,
        user
    }
};
