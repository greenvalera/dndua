import {gql} from "@apollo/client";

export const RACE_QUERY = gql`
  query RaceQuery($id: String!) {
    race(id: $id) {
      page {
        content
      }
    }
  }
`;