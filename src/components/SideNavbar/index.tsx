"use client";

import socket from "@/lib/socket";
import { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoBarChartOutline, IoSendOutline } from "react-icons/io5";
import Header from "../Header";
import SendNotification from "../SendNotification";
const SideNavbar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to socket", socket.id);
      setIsOnline(true);
    });

    socket.on("connect_error", (err) => {
      console.log("❌ Connection error:", err.message);
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected from socket");
      setIsOnline(false);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("disconnect");
    };
  }, []);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: IoBarChartOutline },
    { id: "trigger", label: "Send Notification", icon: IoSendOutline },
    { id: "templates", label: "Templates", icon: CiSettings },
    { id: "health", label: "System Health", icon: GoGraph },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FaRegBell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NotifyPro</h1>
                <p className="text-sm text-gray-500">
                  Advanced Notification Management System
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div
                  className={`w-2 h-2 ${
                    isOnline ? "bg-green-500" : "bg-red-500"
                  } rounded-full`}
                ></div>
                {isOnline ? "System Online" : "System Offline"}
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium text-sm">AD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeTab === item.id
                          ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <main className="flex-1 p-8">
          {activeTab === "dashboard" && <Header />}
          {activeTab === "trigger" && <SendNotification />}
        </main>
      </div>
    </div>
  );
};

export default SideNavbar;
