import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <Routes>
      
      <Route path="/projects" index element={<Home />} />
    </Routes>
  );
}

export default App;
