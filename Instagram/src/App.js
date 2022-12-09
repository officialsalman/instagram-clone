import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "./Components/Messages/Messages";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
