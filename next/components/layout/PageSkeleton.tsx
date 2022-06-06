import React, {FC} from "react";
import Typography from "@mui/material/Typography";
import {Skeleton} from "@mui/material";

const PageSkeleton: FC = () => (
<>
  <Typography variant="h1"><Skeleton /></Typography>
  <Typography variant="h3"><Skeleton /></Typography>
  <Typography variant="body1"><Skeleton /></Typography>
  <Typography variant="body1"><Skeleton /></Typography>
  <Typography variant="body1"><Skeleton /></Typography>
  <Typography variant="body1"><Skeleton /></Typography>
</>
);

export default PageSkeleton;