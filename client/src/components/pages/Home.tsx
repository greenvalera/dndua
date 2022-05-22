import React, {FC, Fragment} from "react";
import MuiMarkdown from 'mui-markdown';
import md from '../../md/test.md';

const Home: FC = () => {
    return (
        <Fragment>
          <MuiMarkdown>{md}</MuiMarkdown>
        </Fragment>
    )
};

export default Home;