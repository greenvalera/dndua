import {FC} from "react";
import {Alert, AlertTitle} from "@mui/material";

const ErrorPage: FC = () => (
  <Alert severity="error">
    <AlertTitle>Помилка</AlertTitle>
    Нажаль щось там заламалося. Мабуть адмін викинув — <strong>критичну невдачу</strong> :(
  </Alert>
);

export default ErrorPage;