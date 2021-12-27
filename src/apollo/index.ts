import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";


export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:8080/',
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
    watchQuery: {
      fetchPolicy: "network-only",
    },
  },
});