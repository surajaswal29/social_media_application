import { AiOutlineSearch } from "react-icons/ai";
import UserData from "../data/userdata.json";
const Sidebar = () => {
  //   console.log(UserData);
  return (
    <>
      <div className="flex h-screen w-full flex-col bg-white ">
        <div className="flex items-center justify-center py-2">
          <img
            src="/public/Main_Logo.png"
            alt="Main Logo"
            className="my-2 h-12"
          />
        </div>
        <div className="border-b border-blue-100 p-4">
          {/* <!-- Search Bar --> */}
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-md border border-blue-400 px-3  py-2 pr-10 focus:outline-none"
              placeholder="Search..."
            />
            <span>
              <AiOutlineSearch
                className="absolute right-2 top-2 cursor-pointer text-blue-400 hover:text-blue-600"
                size={24}
              />
            </span>
          </div>
        </div>
        <div className="flex flex-grow flex-col overflow-y-auto">
          <div className="flex flex-col">
            {UserData.users.map((user, index) => (
              <div
                className="flex cursor-pointer gap-3 border-b border-blue-100 bg-white px-4 py-3 hover:bg-blue-50"
                key={`user-${index}`}
              >
                <img
                  src={user.profilePhoto}
                  alt="User 1"
                  className="h-14 w-14 rounded-full border-2 border-gray-300"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                  <p className="text-gray-600">{user.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
