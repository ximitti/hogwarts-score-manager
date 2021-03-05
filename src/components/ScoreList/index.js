// hooks
// react redux
import { useSelector } from "react-redux";

// components
import ScoreCard from "../ScoreCard";
//----------------------------------------------------

//----------------------------------------------------
const ScoreList = () => {
  const housesList = useSelector((state) => state.housesList);

  return (
    <>
      {housesList.map((house) => (
        <ScoreCard house={house} />
      ))}
    </>
  );
};
export default ScoreList;
