import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      height: "100vh",
    },
    buttonContainer: {
      marginTop: theme.spacing(1),
    },
    button: {
      fontWeight: "bold",
    },
  })
);

export default useStyles;
