import { gql } from 'apollo-server';

const typeDefs = gql`
    scalar Date

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

    type Session {
        createdAt: Date!,
        expiresAt: Date!,
        id: ID!,
        userId: ID!
    }

    type Query {
        latestReadings: [Reading!]!
        user(id: ID!): User
    }

    type Mutation {
        createSession(email: String!, password: String!): Session
        createUser(email: String!, password: String!): User
    }
`;

export default typeDefs;
