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
      {housesList.map((house, index) => (
        <ScoreCard key={index} house={house} position={index + 1} />
      ))}
    </>
  );
};
export default ScoreList;
