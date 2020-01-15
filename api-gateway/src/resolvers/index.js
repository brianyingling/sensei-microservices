import { ReadingsService } from '#root/adapters';

const helloWorld = (parent, args, context, info) => {
    return {
        id: "This is the ID",
        message: "Hello World!"
    }
}

const getLatestReadings = async (parent, args, context, info) => {
    return await ReadingsService.getLatestReadingOfEachLocation();
}

export default {
    Query: {
        helloWorld,
        latestReadings: getLatestReadings
    }
};
