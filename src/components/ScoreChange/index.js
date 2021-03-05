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

// react hook form / yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// thunks
import { useDispatch } from "react-redux";
import {
  houseAddThunk,
  houseSubThunk,
} from "../../store/modules/houses/thunks";
//-----------------------------------------------------

const schema = yup.object().shape({
  points: yup
    .string()
    .min(1, "Digite ao menos 1 número positivo")
    .matches(/^[1-9]\d*$/, "Somente números positivos")
    .required("Obrigatório preencher"),
});

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
    backgroundColor: "#E5EDF2",
    border: "2px solid #5777A8",
    boxShadow: theme.shadows[5],
    padding: "15px",
    [theme.breakpoints.down("xs")]: {
      width: 200,
    },
    [theme.breakpoints.up("sm")]: {
      width: 400,
    },
  },
  formControl: {
    minWidth: 250,
  },
  image: {
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      height: 200,
      width: 200,
    },
    [theme.breakpoints.up("sm")]: {
      height: 250,
      width: 200,
    },
  },
  button: {
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
  text: {
    color: "#5777A8",
  },
  textGain: {
    color: "#35f1ab",
  },
  textLose: {
    color: "#f8a388",
  },
}));
//----------------------------------------------------
const ScoreChange = ({ close, student }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [typePoints, setTypePoints] = useState("");
  const [points, setPoints] = useState(0);
  const dispatch = useDispatch();

  const addPoints = () => {
    setTypePoints("add");
  };

  const subPoints = () => {
    setTypePoints("sub");
  };

  const onChange = (e) => {
    setPoints(e.target.value);
  };

  const onSubmit = (data) => {
    switch (typePoints) {
      case "add":
        dispatch(houseAddThunk(student.house, data.points));
        break;
      case "sub":
        dispatch(houseSubThunk(student.house, data.points));
        break;
      default:
    }
    setTimeout(() => close(), 2000);
  };

  return (
    <Box style={modalStyle} className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={6}>
          <Box>
            <Avatar
              className={classes.image}
              variant="square"
              src={student.image}
              alt={student.name}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.formBox}>
            <Box my={1}>
              <Typography className={classes.text} variant="h6">
                {student.house}
              </Typography>
            </Box>
            <Box my={1}>
              <Typography className={classes.text} variant="h5">
                {student.name}
              </Typography>
            </Box>
            <Box my={1}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  autoFocus
                  variant="outlined"
                  size="small"
                  name="points"
                  label="Input points"
                  onChange={onChange}
                  inputRef={register}
                  error={!!errors.points}
                  helperText={errors.points?.message}
                />
                <Button
                  className={clsx(classes.button, classes.buttonGain)}
                  type="submit"
                  variant="contained"
                  size="small"
                  onClick={addPoints}
                >
                  Gain
                </Button>
                <Button
                  className={clsx(classes.button, classes.buttonLose)}
                  type="submit"
                  variant="contained"
                  size="small"
                  onClick={subPoints}
                >
                  Lose
                </Button>
              </form>
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                alignItems="center"
              >
                {typePoints === "add" && (
                  <Box>
                    <Typography className={classes.textGain} variant="h6">
                      +{points}
                    </Typography>
                  </Box>
                )}
                {typePoints === "sub" && (
                  <Box>
                    <Typography className={classes.textLose} variant="h6">
                      -{points}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScoreChange;
