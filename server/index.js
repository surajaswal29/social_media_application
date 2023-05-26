/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const PORT = 8000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Chat App is Working!");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173/",
  },
});

io.on("connection", (socket) => {
  console.log("User Connected: ", socket.id);
});

server.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}...Follow:  http://localhost:${PORT}/`
  );
});
