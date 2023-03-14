"use client";
import thread from "@/thread";
import React, { useState } from "react";

const Page = () => {
  const [threads, setThreads] = useState(thread);
  const [message, setMessage] = useState("");

  const handleNewMessage = (e: any) => {
    e.preventDefault();
    const payload = {
      role: "user",
      content: message,
    };
    setThreads([...threads, payload]);
  };

  return (
    <div className="w-[60%] pt-5 mx-auto h-screen">
      <div className="">
        {threads.map((message, i) => (
          <div
            key={i}
            className={`chat ${
              message.role == "assistant" ? "chat-start" : "chat-end"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    message.role === "user"
                      ? "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Zoey"
                      : "https://api.dicebear.com/5.x/bottts/svg?seed=Shadow"
                  }
                />
              </div>
            </div>
            <div className="chat-header">
              {message.role === "user" ? "You" : "BrainyType"}
            </div>
            <div className="chat-bubble">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0  w-full my-4 flex justify-center">
        <form className="flex items-center justify-start w-full gap-2">
          <textarea
            className="resize-y min-h-0 h-auto border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline max-h-96"
            placeholder="Enter your text here..."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="bg-purple-600 px-4  rounded-md text-white font-semibold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
