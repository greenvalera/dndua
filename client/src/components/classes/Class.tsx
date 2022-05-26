import React, {FC, Fragment} from "react";
import MuiMarkdown from 'mui-markdown';
import {CLASS_QUERY} from "./graphql/class.gql";
import {useQuery} from "@apollo/client";
import {ClassData, ClassVars} from "./graphql/interfaces";
import {RouteComponentProps} from "react-router-dom";

type RouteParams = {
  id: string,
}

const Class: FC<RouteComponentProps<RouteParams>> = ({match}) => {
  const raceValue = match.params.id;
  const { loading, error, data } = useQuery<ClassData, ClassVars>(CLASS_QUERY, {variables: {id: raceValue}});

  //todo use loading stiled
  if (loading) return <p>Loading...</p>;
  //todo use error page
  if (error) return <p>Error :(</p>;

  const content: string = data?.class?.page?.content || '';

  return (
    <Fragment>
      <MuiMarkdown>{content}</MuiMarkdown>
    </Fragment>
  )
};

export default Class;