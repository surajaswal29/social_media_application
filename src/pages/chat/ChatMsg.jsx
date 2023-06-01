/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ChatMsg = ({ message }) => {
  return (
    <>
      <div className="mb-2 flex justify-end">
        <div className="w-[78%] rounded-lg bg-blue-500 p-3 text-white shadow lg:w-[45%]">
          Hey, have you heard about the MERN stack?
        </div>
      </div>
      <div className="mb-2 flex justify-start">
        <div className="w-[78%] rounded-lg bg-gray-200 p-3 shadow lg:w-[45%]">
          Yeah, I have! It's an awesome tech stack for web development. I've
          been using it for a while now. What do you think of it?
        </div>
      </div>
    </>
  );
};

export default ChatMsg;
