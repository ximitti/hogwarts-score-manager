import "./App.css";
// routes
import Routes from "./routes";
// components
import MenuBar from "./components/Menu";
//-------------------------------------
function App() {
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
