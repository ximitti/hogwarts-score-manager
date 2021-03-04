// hooks
// react redux
import { useSelector, useDispatch } from "react-redux";

// material ui
import { Box } from "@material-ui/core";

// components
import ScoreCard from "../ScoreCard";
//----------------------------------------------------

//----------------------------------------------------
const ScoreList = () => {
  const housesList = useSelector((state) => state.housesList);
  const dispatch = useDispatch();

  console.log("lista das casas: ", housesList);
  return (
    <Box display="flex" justifyContent="space-around" mx={2}>
      {housesList.map((house) => (
        <ScoreCard house={house} />
      ))}
    </Box>
  );
};
export default ScoreList;
