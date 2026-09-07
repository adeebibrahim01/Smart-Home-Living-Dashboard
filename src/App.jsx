import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Production from "./pages/Production";
import Distribution from "./pages/Distribution";
import Storage from "./pages/Storage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/production" element={<Production />} />
        <Route path="/distribution" element={<Distribution />} />
      <Route path="/storage" element={<Storage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;