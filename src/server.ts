import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
    bye: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "hello",
    bye: () => "bye",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`Server ready at ${url}`);
});
