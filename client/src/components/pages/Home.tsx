import React, {FC, Fragment} from "react";
import Typography from "@mui/material/Typography";

const Home: FC = () => {
    return (
        <Fragment>
            <Typography variant="h2">Вітаємо</Typography>
            <Typography variant="h4">Український сайт присвячений грі "Підземелля та дракони"</Typography>
        </Fragment>
    )
};

export default Home;