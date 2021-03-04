// material ui
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// --------------------------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 225,
    marginRight: 10,
  },
  media: {
    height: 250,
  },
}));

// --------------------------------------------------------------------------------------
const ScoreCard = ({house}) => {
  const classes = useStyles();

  console.log(house)
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar>{"1"}</Avatar>}
        title={house.name}
      />
      <CardMedia
        className={classes.media}
        image={house.image}
        alt={house.name}
      />
      <CardContent>
        <Typography variant="h4">{"500"}</Typography>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
