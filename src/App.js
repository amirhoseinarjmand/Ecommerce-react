import "./App.css";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/">
          <About />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
