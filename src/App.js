import "./App.css";
// hooks
// react
import { useEffect } from "react";

// react redux
import { useDispatch } from "react-redux";

// routes
import Routes from "./routes";
// components
import MenuBar from "./components/Menu";

// thunks
import { getStudentsThunk } from "./store/modules/students/thunks";

//-------------------------------------
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentsThunk());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
