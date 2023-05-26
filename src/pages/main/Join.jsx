import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleJoinChatify = (e) => {
    e.preventDefault();
    // Perform login logic here with the entered name
    localStorage.setItem("userName", name);
    console.log("Logged in as:", name);
    navigate("/chat");
    // navigate("/chat", { replace: true }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-500">
      <div className="w-96 rounded bg-white p-6 shadow">
        <div className="mb-14 flex w-full justify-center">
          <div className="h-24 w-24 overflow-hidden rounded-full border border-blue-400">
            <img src="/logo.png" className="w-full" alt="Logo" />
          </div>
        </div>
        <h1 className="mb-5 text-xl font-semibold">Join Chatify</h1>
        <form onSubmit={handleJoinChatify}>
          <input
            type="text"
            placeholder="Enter your name"
            className="mb-4 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            value={name}
            onChange={handleNameChange}
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
