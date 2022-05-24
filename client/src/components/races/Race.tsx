import React, {FC, Fragment} from "react";
import MuiMarkdown from 'mui-markdown';
import {RACE_QUERY} from "./graphql/race.gql";
import {useQuery} from "@apollo/client";
import {RaceData, RaceVars} from "./graphql/interfaces";

const Race: FC = (props: any) => {
  const raceValue = props.match.params.race;
  const { loading, error, data } = useQuery<RaceData, RaceVars>(RACE_QUERY, {variables: {id: raceValue}});

  //todo use loading stiled
  if (loading) return <p>Loading...</p>;
  //todo use error page
  if (error) return <p>Error :(</p>;

  const content: string = data?.race.page?.content || '';

  return (
    <Fragment>
      <MuiMarkdown>{content}</MuiMarkdown>
    </Fragment>
  )
};

export default Race;