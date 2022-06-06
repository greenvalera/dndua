import {gql} from "@apollo/client";

export const CLASS_QUERY = gql`
  query ClassQuery($id: String!) {
    class(id: $id) {
      page {
        content
      }
    }
  }
`;