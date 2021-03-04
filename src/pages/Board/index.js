// material ui
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// components
import ScoreList from "../../components/ScoreList";
//---------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      minWidth: 300,
      maxWidth: 599,
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 1000,
      minWidth: 600,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },
}));

//---------------------------------------
const Board = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <ScoreList />
      </Box>
      <Box></Box>
    </Box>
  );
};
export default Board;
