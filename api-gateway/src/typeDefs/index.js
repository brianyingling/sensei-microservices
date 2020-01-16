import { gql } from 'apollo-server';

const typeDefs = gql`
    enum Scale {
        Celsius
        Fahrenheit
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

    type User {
        id: ID!,
        email: String!
    }

    type Query {
        latestReadings: [Reading!]!
        user(id: ID!): User
    }

    type Mutation {
        createUser(email: String!, password: String!): User
    }
`;

export default typeDefs;
