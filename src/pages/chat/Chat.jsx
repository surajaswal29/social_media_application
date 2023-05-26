import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Chat = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  }, [navigate, userName]);
  return (
    <>
      <div className="flex h-screen w-full justify-center bg-white">
        <div className="w-3/12">
          <Sidebar />
        </div>
        <div className="flex  w-9/12 flex-col">
          <div className="flex flex-grow justify-end bg-blue-500 p-4">
            <h1 className="text-xl font-semibold text-white">{userName}</h1>
          </div>
          <div className="flex-grow overflow-y-auto bg-gray-100 p-4">
            <div className="mb-2 flex justify-end">
              <div className="w-5/12 rounded-lg bg-blue-500 p-3 text-white shadow">
                Hey, have you heard about the MERN stack?
              </div>
            </div>
            <div className="mb-2 flex justify-start">
              <div className="w-5/12 rounded-lg bg-gray-200 p-3 shadow">
                Yeah, I have! It's an awesome tech stack for web development.
                I've been using it for a while now. What do you think of it?
              </div>
            </div>
            <div className="mb-2 flex justify-end">
              <div className="w-5/12 rounded-lg bg-blue-500 p-3 text-white shadow">
                I think it's great! The combination of MongoDB, Express.js,
                React, and Node.js is powerful. It allows for seamless
                full-stack JavaScript development. How about you? Have you
                worked on any projects using MERN stack?
              </div>
            </div>
            <div className="mb-2 flex justify-start">
              <div className="w-5/12 rounded-lg bg-gray-200 p-3 shadow">
                Yes, I've built a few projects with MERN stack. It's impressive
                how everything works together. The frontend with React is super
                smooth, and the backend with Node.js and Express.js is really
                flexible. Plus, MongoDB is great for handling data. Overall, I'm
                a big fan of MERN stack!
              </div>
            </div>
            <div className="mb-2 flex justify-end">
              <div className="w-5/12 rounded-lg bg-blue-500 p-3 text-white shadow">
                Absolutely! It's a developer's dream to have such a cohesive
                tech stack. Plus, the vibrant community around MERN stack
                provides great support and resources. What kind of projects do
                you think are best suited for MERN stack?
              </div>
            </div>
            <div className="mb-2 flex justify-start">
              <div className="w-5/12 rounded-lg bg-gray-200 p-3 shadow">
                MERN stack is perfect for building dynamic web applications and
                SPAs. Its real-time capabilities and ease of development make it
                ideal for social media platforms, e-commerce sites, and
                data-driven applications. The versatility of JavaScript makes it
                even more convenient. Have you explored any other stacks apart
                from MERN?
              </div>
            </div>
          </div>
          <div className="flex bg-gray-200 p-4">
            <input
              type="text"
              className="mr-2 flex-grow rounded-md bg-white p-2 focus:outline-none"
              placeholder="Type a message..."
            />
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
