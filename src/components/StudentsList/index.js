// redux
import { useSelector } from "react-redux";

// components
import Student from "../Student";

//---------------------------------------------
const StudentsList = () => {
  const students = useSelector((state) => state.studentsList);

  return (
    <>
      {students.map((student) => (
        <Student student={student} />
      ))}
    </>
  );
};
export default StudentsList;
