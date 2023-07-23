import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const GRAPHQL_API_URL = "http://localhost:4000/graphql";

const httpLink = createHttpLink({
  uri: GRAPHQL_API_URL,
});

const authLink = setContext((_, { headers }) => {
  // Add any authorization token or custom headers here if required
  return {
    headers: {
      ...headers,
    },
  };
});

// Initialize Apollo Client
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Log statements to confirm client initialization
console.log("Apollo Client initialized with the following settings:");
console.log("GraphQL API URL:", GRAPHQL_API_URL);

export default client;
