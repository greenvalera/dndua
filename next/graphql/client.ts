import {ApolloClient, InMemoryCache} from "@apollo/client";

const isBrowser = typeof window === "object";

const client = new ApolloClient({
  ssrMode: !isBrowser,
  uri: `http://${process.env.NEXT_PUBLIC_API_HOST}/graphql`,
  cache: new InMemoryCache()
});

export default client;