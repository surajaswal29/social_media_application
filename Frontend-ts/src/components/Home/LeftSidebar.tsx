import React from "react"
import { Link } from "react-router-dom"

const dummyData = {
  people: [
    { id: 1, name: "John Doe", username: "john_doe123" },
    { id: 2, name: "Jane Smith", username: "jane_smith456" },
    { id: 3, name: "Michael Johnson", username: "michael_johnson789" },
    { id: 4, name: "Emily Brown", username: "emily_brown012" },
    // { id: 5, name: 'David Wilson', username: 'david_wilson345' },
  ],
  communities: [
    { id: 1, name: "Community 1", tag: "community_1_tag" },
    { id: 2, name: "Community 2", tag: "community_2_tag" },
    { id: 3, name: "Community 3", tag: "community_3_tag" },
    { id: 4, name: "Community 4", tag: "community_4_tag" },
    // { id: 5, name: 'Community 5', tag: 'community_5_tag' },
  ],
}

const LeftSidebar: React.FC = () => {
  return (
    <div className='hidden md:block w-[30%] px-6'>
      <div className='w-full bg-white p-3 rounded-md'>
        <h1 className='font-medium border-b pb-2'>Suggestions</h1>
        {/* People */}
        <div className='w-full py-2'>
          <h2 className='font-medium'>People</h2>
          <div className='w-full mt-3'>
            {dummyData.people.map((person) => (
              <div
                className='w-full flex items-center justify-between my-4'
                key={person.id}
              >
                <Link
                  to={`/${person.username}`}
                  className='w-fit flex items-center gap-2'
                >
                  <img
                    src={`https://i.pravatar.cc/400?img=${person.id}`}
                    alt='User Profile Picture'
                    className='w-[35px] h-[35px] rounded-full'
                  />
                  <div>
                    <h2 className='font-medium text-sm'>{person.name}</h2>
                    <p className='text-xs text-gray-500'>@{person.username}</p>
                  </div>
                </Link>
                <button className='text-violet-600 font-medium hover:text-violet-500 h-fit p-2 text-sm rounded-md'>
                  Follow
                </button>
              </div>
            ))}
            <div className='w-full'>
              <button className='text-blue-500'>See All</button>
            </div>
          </div>
        </div>
        {/* Popular communities */}
        <div className='w-full py-2 border-t'>
          <h2 className='font-medium'>Popular Communities</h2>
          <div className='w-full mt-3'>
            {dummyData.communities.map((community) => (
              <div
                className='w-full flex items-center justify-between my-4'
                key={community.id}
              >
                <Link
                  to={`/${community.name}`}
                  className='w-fit flex items-center gap-2'
                >
                  <img
                    src={`https://i.pravatar.cc/400?img=${community.id}`}
                    alt='Community Picture'
                    className='w-[40px] h-[40px] rounded-full'
                  />
                  <div>
                    <h2 className='font-medium'>{community.name}</h2>
                    <p className='text-sm text-gray-500'>#{community.tag}</p>
                  </div>
                </Link>
                <button className='text-violet-600 font-medium hover:text-violet-500 h-fit p-2 text-sm rounded-md'>
                  Join
                </button>
              </div>
            ))}
            <div className='w-full'>
              <button className='text-blue-500'>See All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
