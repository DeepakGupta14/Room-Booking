import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Calender from "./components/Calender";

function App() {
  return (
    <>
      <Router>
        < Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calender" element={<Calender />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
