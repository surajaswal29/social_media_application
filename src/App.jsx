/* eslint-disable no-unused-vars */
import { io } from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./pages/main/Join";
import Chat from "./pages/chat/Chat";

const socket = io("http://localhost:8000", {
  transports: ["websocket"],
});

const App = () => {
  // socket.on("connect", () => {
  //   console.log("Connected to server");
  // });
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Join />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route path="*" element={<div>Error: Page Does Not Exist</div>} />
      </Routes>
    </Router>
  );
};

export default App;
