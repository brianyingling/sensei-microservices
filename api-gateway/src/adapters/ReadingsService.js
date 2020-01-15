
import got from 'got';

const URI = 'http://readings-service:9001'

export default class ReadingsService {
    
    static async getLatestReadingOfEachLocation() {
        console.log('I GOT HERE');
        return await got.get(`${URI}/locations/readings/latest`).json();
    }
}