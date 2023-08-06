import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home.page";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.params = {};
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
