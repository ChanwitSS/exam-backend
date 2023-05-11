import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'

dotenv.config()
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
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
  }
);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
