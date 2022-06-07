import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";

const isBrowser = typeof window === "object";

const client = new ApolloClient({
  ssrMode: !isBrowser,
  link: createHttpLink({
    uri: `http://${process.env.NEXT_PUBLIC_API_HOST}`,
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache()
});

export default client;