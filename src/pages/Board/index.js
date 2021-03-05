// material ui
import { Box, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// components
import ScoreList from "../../components/ScoreList";
import StudentsList from "../../components/StudentsList";
//---------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      minWidth: 300,
      maxWidth: 599,
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 1000,
      minWidth: 600,
      width: "100%",
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  board: {
    backgroundColor: "#E5EDF2",
    borderRadius: "10px",
  },
}));

//---------------------------------------
const Board = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          width="100%"
        >
          <ScoreList />
        </Box>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.board}>
          <StudentsList />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Board;
