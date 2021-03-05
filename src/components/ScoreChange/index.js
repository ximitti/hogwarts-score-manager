// react
import { useState } from "react";
// material ui
import {
  Grid,
  Box,
  Avatar,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// react hook form
import { useForm, register } from "react-hook-form";
//-----------------------------------------------------

const getModalStyle = () => {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
};
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: "#E5EDF2",
    border: "2px solid #3f51b6",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    minWidth: 250,
  },
  image: {
    width: "200px",
    height: "250px",
  },
  button: {
    // weight: "150px",
    // height: "45px",
    margin: "10px",
  },
  buttonGain: {
    backgroundColor: "#65E1CB",
  },
  buttonLose: {
    backgroundColor: "#F8A388",
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));
//----------------------------------------------------
const ScoreChange = ({ close, student }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  console.log(student);
  return (
    <Box style={modalStyle} className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box>
            <Avatar
              className={classes.image}
              variant="square"
              src={student.image}
              alt={student.name}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.formBox}>
            <Box my={1}>
              <Typography variant="h6">{student.house}</Typography>
            </Box>
            <Box my={1}>
              <Typography variant="h5">{student.name}</Typography>
            </Box>
            <Box my={1}>
              <form>
                <TextField variant="outlined" size="small" />
                <Button
                  className={clsx(classes.button, classes.buttonGain)}
                  variant="contained"
                  size="small"
                >
                  Gain
                </Button>
                <Button
                  className={clsx(classes.button, classes.buttonLose)}
                  variant="contained"
                  size="small"
                >
                  Lose
                </Button>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScoreChange;
