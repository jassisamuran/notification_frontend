"use client";
import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  const [notificationCount, setNotificationCount] = useState(10);
  const [currentSearch, setCurrentSearch] = useState("All");
  const [liveQueueSize, setLiveQueueSize] = useState(100);
  const [successCount, setSuccessCount] = useState(50);
  const [failureCount, setFailureCount] = useState(5);

  const searchbaroption = { All: "All", Unread: "Unread", Read: "Read" };

  return (
    <div className="text-left  bg-white rounded-md border-gray-200 p-4  rounded-lg h-4/6 text-black m-6">
      <div className="flex p-2 items-center justify-between">
        <div>
          <div className=" flex items-center gap-2 font-bold  text-3xl ">
            <IoIosNotificationsOutline className="text-blue-500 " />
            Notifications
          </div>
          <span className="text-gray-500 text-sm ml-10">
            {notificationCount} unread notifications
          </span>
        </div>

        <div className="flex items-center text-3xl">
          <div className="font-bold items-center rounded-lg border-amber-100 bg-green-200 p-2">
            <span className="green-dot mr-2"></span>
            Live
          </div>
          <CiSettings />
        </div>
      </div>
      <div className="flex justify-between  items-center p-4  gap-8">
        <input
          type="text"
          placeholder="Search notifications..."
          className="w-full p-2 border rounded-md"
        />
        {(
          Object.keys(searchbaroption) as Array<keyof typeof searchbaroption>
        ).map((option) => (
          <span
            key={option}
            className={`mx-1 px-3 py-1 rounded cursor-pointer ${
              option === currentSearch
                ? "bg-blue-500 text-white font-semibold"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCurrentSearch(option)}
          >
            {option}
          </span>
        ))}
      </div>
      <div className="flex justify-between  items-center p-4  gap-8">
        <span>
          <span className="text-gray-500 mr-2">Live Queue Size:</span>
          {liveQueueSize}
        </span>
        <span className="text-gray-500">
          <span className="text-gray-500 mr-2">Total Notifications:</span>
          {successCount + failureCount}
        </span>
        <span>
          <span className="text-gray-500 mr-2">Total Success 24H:</span>
          {successCount}
        </span>
        <span>
          <span className="text-gray-500 mr-2">Total Failure 24H:</span>
          {failureCount}
        </span>
      </div>
    </div>
  );
};

export default Header;
