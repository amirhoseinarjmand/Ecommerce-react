import "./App.css";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ height: "200rem" }}></div>
      <Routes>
        {/* <Route path="/">
          <About />
          <login />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
