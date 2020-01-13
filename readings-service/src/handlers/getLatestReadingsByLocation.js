import { makeQuery } from '#root/db';
import { FIFTEEN_MINUTES } from '#root/utils';
import { flatten, handleError, sendResponse } from './utils';

const locationsQueryParams = {
    TableName: 'sensei',
    IndexName: 'SK-data-index',
    KeyConditionExpression: 'SK = :sk',
    ExpressionAttributeValues: {
        ":sk": "LOCATION",
    }
};

const buildLatestReadingsQueryParams = (deviceId) => {
    const FIFTEEN_MINUTES_AGO = new Date(Date.now() - FIFTEEN_MINUTES).toISOString();
    return {
        TableName: 'sensei',
        IndexName: 'SK-data-index',
        KeyConditionExpression: 'SK = :sk and begins_with(#d, :data)',
        ExpressionAttributeNames: {
            '#d': 'data'
        },
        FilterExpression: 'createdAt > :date',
        ExpressionAttributeValues: {
            ':sk': 'READING',
            ':data': deviceId,
            ':date': FIFTEEN_MINUTES_AGO
        }
    };
};

const getLocations = () => makeQuery(locationsQueryParams);

const getLatestReadings = (deviceId) => (
    makeQuery(buildLatestReadingsQueryParams(deviceId))
);

const promisifyAndMapLocationsWithLatestReadings = ({ Items: locations = [] }) => (
    locations.map(location => ({
        ...location,
        readings: getLatestReadings(location.data)
    }))
);

const resolveLocationsWithLatestReadings = locationsWithReadings => {
    const latestReadings = locationsWithReadings.map(({readings}) => readings);
    return Promise.all(latestReadings)
        .then(results => {
            return results.map(result => {
                return locationsWithReadings.reduce((memo, location) => {
                    if (location.data === result.Items[0].data) {
                        return [...memo, {...location, reading: result.Items[0]}];
                    }
                    return memo;
                }, []);
            });
        });
}

const getLatestReadingsByLocation = (req, res, next) => (
    getLocations()
        .then(promisifyAndMapLocationsWithLatestReadings)
        .then(resolveLocationsWithLatestReadings)
        .then(flatten)
        .then(sendResponse(res))
        .catch(handleError(next))
)

export default getLatestReadingsByLocation;
