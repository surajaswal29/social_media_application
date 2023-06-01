/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import ChatMsg from "./ChatMsg";
import ReactScrollToBottom from "react-scroll-to-bottom";

let socket;

/* eslint-disable react/no-unescaped-entities */
const Chat = () => {
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");

  const msgData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ];

  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleMessageChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const sendMessageHandler = () => {
    socket.emit("message", { message, id });
  };

  const logoutUserHandler = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  }, [navigate, userName]);

  useEffect(() => {
    socket = io("http://localhost:8000", {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      alert(`Connected to server ${socket.id}`);
      setId(socket.id);
    });

    socket.emit("joined", { userName });

    socket.on("welcome", (data) => {
      console.log(`${data.user}: ${data.message}`);
      alert(`${data.user}: ${data.message}`);
      // console.log(data.main);
    });

    socket.on("userJoined", (data) => {
      console.log(`${data.user}: ${data.message}`);
    });

    socket.on("user-left", (data) => {
      console.log(`${data.user}: ${data.message}`);
    });

    return () => {
      socket.emit("user-disconnected");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      console.log(`${data.user}: ${data.message} ID is: ${data.id}`);
    });
  }, []);

  return (
    <>
      <div className="flex h-screen w-full justify-center bg-white">
        <div className="hidden w-3/12 sm:block sm:w-[45%] md:w-4/12">
          <Sidebar />
        </div>
        <div className="flex w-full flex-col sm:w-8/12 lg:w-9/12">
          <div className="flex justify-end gap-3 bg-blue-500 p-3">
            <h1 className="text-xl font-semibold capitalize text-white">
              {userName}
            </h1>
            <span
              className="cursor-pointer rounded bg-red-600 p-1 px-2 font-semibold text-white hover:bg-red-500"
              onClick={logoutUserHandler}
            >
              Logout
            </span>
          </div>
          <div className="w-full flex-grow overflow-y-auto bg-gray-100 p-4">
            <ReactScrollToBottom
              className="h-full w-full"
              followButtonClassName="bg-blue-500 p-2 rounded-md text-white"
              initialScrollBehavior="smooth"
            >
              {msgData.map((msg, index) => (
                <ChatMsg key={`msg-${index}`} message={msg} />
              ))}
            </ReactScrollToBottom>
          </div>
          <div className="flex bg-gray-200 p-4">
            <input
              type="text"
              className="mr-2 flex-grow rounded-md bg-white p-2 focus:outline-none"
              placeholder="Type a message..."
              onChange={handleMessageChange}
            />
            <button
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
              onClick={sendMessageHandler}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
