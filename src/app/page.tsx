"use client";
import SideNavbar from "@/components/SideNavbar";
import { useState } from "react";
// import socket from "../lib/socket";
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
      <SideNavbar />
    </div>
  );
}

export default Home;
