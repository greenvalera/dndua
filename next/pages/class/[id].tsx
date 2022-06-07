import React, {FC} from "react";
import {CLASS_QUERY} from "../../components/classes/graphql/class.gql";
import client from "../../graphql/client";
import Page from "../../components/page";
import {ClassData, ClassVars} from "../../components/classes/graphql/interfaces";
import useLoading from "../../utils/useLoading";
import PageSkeleton from "../../components/layout/PageSkeleton";

interface ClassPageProps {
  content: string;
}

const ClassPage: FC<ClassPageProps> = ({content}) => {
  const loading = useLoading();

  if (loading) {
    return (<PageSkeleton />);
  }
  return (
    <Page content={content}/>
  )
}

export async function getServerSideProps(context) {
  const {id} = context.query;
  const {data} = await client.query<ClassData, ClassVars>({
    query: CLASS_QUERY,
    variables: {id}
  })

  return {
    props: {
      content: data.class.page.content,
    }, // will be passed to the page component as props
  }
}

export default ClassPage;