const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    name: String!
    price: Float
  }

  type Query {
    allProducts: [Product!]
  }
`;

const resolvers = {
  Query: {
    allProducts: () => {
      return [{ name: "Banana", price: 20 }];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
