import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Error } from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
