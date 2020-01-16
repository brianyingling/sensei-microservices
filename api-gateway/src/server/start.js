import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '#root/typeDefs';
import resolvers from '#root/resolvers';

const PORT = 9000;

const app = express();

const apolloServer = new ApolloServer({
    context: a => a,
    // formatErrors: formatGraphqlErrors
    resolvers,
    typeDefs 
});

apolloServer.applyMiddleware({
    app,
    cors: false,
    path: '/graphql'
});

app.listen(PORT, '0.0.0.0',() => {
    console.log(`API Gateway listening on port ${PORT}`);
});