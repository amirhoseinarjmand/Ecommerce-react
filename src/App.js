import "./App.css";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>

      {/* <Footer /> */}
      <div style={{ height: "200rem" }}></div>
    </div>
  );
}

export default App;
