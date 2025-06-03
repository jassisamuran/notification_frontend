"use client";
import { useState } from "react";
// import socket from "../lib/socket";
import Dashboard from "../components/Dashboard";
function Home() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setChat((prev) => [...prev, data]);
  //   });

  //   return () => {
  //     socket.off("receive_message");
  //   };
  // }, []);

  // const sendMessage = () => {
  //   socket.emit("send_message", message);
  //   setMessage("");
  // };

  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default Home;
