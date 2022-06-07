import React, {FC, Fragment} from "react";
import MuiMarkdown from 'mui-markdown';
import {CLASS_QUERY} from "./graphql/class.gql";
import {useQuery} from "@apollo/client";
import {ClassData, ClassVars} from "./graphql/interfaces";
import PageSkeleton from "../layout/PageSkeleton";
import ErrorPage from "../layout/ErrorPage";

type RouteParams = {
  id: string,
}

const Class: FC<RouteParams> = ({id}) => {
  const { loading, error, data } = useQuery<ClassData, ClassVars>(CLASS_QUERY, {variables: {id}});

  if (loading) return <PageSkeleton />;
  if (error) return <ErrorPage />;

  const content: string = data?.class?.page?.content || '';

  return (
    <Fragment>
      <MuiMarkdown>{content}</MuiMarkdown>
    </Fragment>
  )
};

export default Class;