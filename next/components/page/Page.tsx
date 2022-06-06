import React, {FC} from "react";
import Markdown from 'markdown-to-jsx';

type PageProps = {
  content: string
}

const Page: FC<PageProps> = ({content}) => {
  return (
    <Markdown>
      {content}
    </Markdown>
  )
};

export default Page;