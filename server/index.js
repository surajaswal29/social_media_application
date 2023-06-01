/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const users = [{}];

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
  console.log(`User Connected : ${socket.id}`);

  socket.on("joined", (data) => {
    users[socket.id] = data.userName;
    socket.broadcast.emit("userJoined", {
      user: "Chatify",
      message: `${users[socket.id]} has joined the chat`,
    });

    socket.on("message", ({ message, id }) => {
      io.emit("sendMessage", { user: users[id], message, id });
    });

    socket.emit("welcome", {
      user: "Chatify",
      message: `Hello ${users[socket.id]}, Welcome to Chatify`,
    });
  });

  socket.on("user-disconnected", () => {
    socket.broadcast.emit("user-left", {
      user: "Chatify",
      message: `${users[socket.id]} has left the chat`,
    });

    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}...Follow:  http://localhost:${PORT}/`
  );
});
