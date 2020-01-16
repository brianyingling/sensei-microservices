import { gql } from 'apollo-server';

const typeDefs = gql`
    enum Scale {
        Celsius
        Fahrenheit
    }

    type HelloWorld {
        id: ID!,
        message: String!
    }

    type Location {
        id: ID!,
        name: String!
    }

    type Reading {
        id: ID!,
        createdAt: String!,
        value: Float!,
        scale: Scale!
        deviceId: ID!
        location: Location!
        locationName: String!
        locationId: ID!
    }

    type Query {
        helloWorld: HelloWorld!
        latestReadings: [Reading!]!
    }

`;

export default typeDefs;
