// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
