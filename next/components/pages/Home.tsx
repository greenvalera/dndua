import React, {FC, Fragment} from "react";
import MuiMarkdown from 'mui-markdown';
import {HOME_QUERY} from "./graphql/home.gql";
import {useQuery} from "@apollo/client";

const Home: FC = () => {
   const { loading, error, data } = useQuery(HOME_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const contens: string = data.races[0].page.content;

   return (
     <Fragment>
      <MuiMarkdown>{contens}</MuiMarkdown>
     </Fragment>
    )
};

export default Home;