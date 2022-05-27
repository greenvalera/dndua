import React, {FC, Fragment} from "react";
import MuiMarkdown from 'mui-markdown';
import {RACE_QUERY} from "./graphql/race.gql";
import {useQuery} from "@apollo/client";
import {RaceData, RaceVars} from "./graphql/interfaces";
import {RouteComponentProps} from "react-router-dom";
import PageSkeleton from "../layout/PageSkeleton";
import ErrorPage from "../layout/ErrorPage";

type RouteParams = {
  id: string,
}

const Race: FC<RouteComponentProps<RouteParams>> = ({match}) => {
  const raceValue = match.params.id;
  const { loading, error, data } = useQuery<RaceData, RaceVars>(RACE_QUERY, {variables: {id: raceValue}});

  if (loading) return <PageSkeleton />;
  if (error) return <ErrorPage />;

  const content: string = data?.race?.page?.content || '';

  return (
    <Fragment>
      <MuiMarkdown>{content}</MuiMarkdown>
    </Fragment>
  )
};

export default Race;