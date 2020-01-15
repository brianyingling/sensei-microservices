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

    type Reading {
        id: ID!,
        createdAt: String!,
        value: Float!,
        scale: Scale!
        deviceId: ID!
    }

    type Query {
        helloWorld: HelloWorld!
        latestReadings: [Reading!]!
    }

`;

export default typeDefs;
