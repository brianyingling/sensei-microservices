import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import typeDefs from '#root/typeDefs';
import resolvers from '#root/resolvers';
import formatGraphQLErrors from './formatGraphQLErrors';
import injectSession from './injectSession';

const PORT = 9000;

const apolloServer = new ApolloServer({
    context: a => a,
    formatError: formatGraphQLErrors,
    resolvers,
    typeDefs 
});

const app = express();

app.use(cookieParser());

app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);

app.use(injectSession);

apolloServer.applyMiddleware({
    app,
    cors: false,
    path: '/graphql'
});

app.listen(PORT, '0.0.0.0',() => {
    console.log(`API Gateway listening on port ${PORT}`);
});