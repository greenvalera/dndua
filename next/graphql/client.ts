import {ApolloClient, InMemoryCache} from "@apollo/client";

const isBrowser = typeof window === "object";

const client = new ApolloClient({
  ssrMode: !isBrowser,
  uri: `http://${process.env.REACT_APP_API_HOST || 'localhost:5000'}/graphql`,
  cache: new InMemoryCache()
});

export default client;