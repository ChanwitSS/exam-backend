import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';
import mongoose from 'mongoose';

// const initMongoDB = () => {
//   mongoose.set('strictQuery', true);
//   mongoose.connect('mongodb://localhost:27017/node-api-101', {
//     useNewUrlParser: true,
//   });
// };

const server = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers,
  // plugins: [
  //   // ApolloServerPluginDrainHttpServer({ httpServer }),
  //   {
  //     async serverWillStart() {
  //       return {
  //         async drainServer() {
  //           await serverCleanup.dispose();
  //         },
  //       };
  //     },
  //   },
  // ],
});

mongoose.set('strictQuery', true);
mongoose.connect(
  'mongodb://mongo:mongo@127.0.0.1:27017/sale_here_mongo?authSource=admin',
  {
    useNewUrlParser: true,
  }
);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
