// redux
import { useSelector } from "react-redux";

// components
import Student from "../Student";

//---------------------------------------------
const StudentsList = () => {
  const students = useSelector((state) => state.studentsList);

  return (
    <>
      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </>
  );
};
export default StudentsList;
