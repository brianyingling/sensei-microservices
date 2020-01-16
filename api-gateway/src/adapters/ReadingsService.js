
import got from 'got';

const URI = 'http://readings-service:9001'

export default class ReadingsService {
    
    static async getLatestReadingOfEachLocation() {
        return await got.get(`${URI}/locations/readings/latest`).json();
    }
}