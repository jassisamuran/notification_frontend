"use client";
import { useState } from "react";
import { TbSend } from "react-icons/tb";

const ComponentName = () => {
  const [recipients, setRecipients] = useState<string | null>(null);
  const [notificationType, setNotificationType] = useState<string | null>(null);
  const [recipientsList, setRecipientsList] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [notificationTitle, setNotificationTitle] = useState<string>("");
  return (
    <div className="m-6 bg-white text-black rounded-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Send Notification</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="title">
              Notification Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border rounded-md"
              placeholder="Enter notification title"
              value={notificationTitle}
              onChange={(e) => setNotificationTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="type">
              Notification Type
            </label>
            <select
              id="type"
              className="w-full p-2 border rounded-md"
              value={notificationType || ""}
              onChange={(e) => setNotificationType(e.target.value)}
            >
              <option value="info">Email</option>
              <option value="warning">Sms</option>
              <option value="error">Push Notification</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="recipients">
              Recipients
            </label>
            <select
              id="recipients"
              className="w-full p-2 border rounded-md"
              value={recipients || ""}
              onChange={(e) => setRecipients(e.target.value)}
            >
              <option value="All Users">All Users</option>
              <option value="Active Users">Active Users</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          {recipients === "Custom" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="recipientsList"
              >
                Recipients List (comma-separated)
              </label>
              <input
                type="text"
                id="recipientsList"
                className="w-full p-2 border rounded-md"
                placeholder="Enter email addresses or phone numbers"
                value={recipientsList}
                onChange={(e) => setRecipientsList(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="schedule">
              Schedule
            </label>
            <input
              type="datetime-local"
              id="schedule"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Enter notification message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  flex items-center gap-2"
          >
            <TbSend /> Send Notification {recipientsList}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComponentName;
