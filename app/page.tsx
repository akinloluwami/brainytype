"use client";
import thread from "@/thread";
import React, { useState } from "react";

const Page = () => {
  const [threads, setThreads] = useState(thread);
  return (
    <div className="w-[60%] pt-5 mx-auto h-screen">
      <div className="">
        {threads.map((message, i) => (
          <div
            key={i}
            className={`chat ${
              message.role === "user" ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-header">Obi-Wan Kenobi</div>
            <div className="chat-bubble">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0  w-full my-4 flex justify-center">
        <form className="flex items-center justify-start w-full gap-2">
          <textarea
            className="resize-y min-h-0 h-auto border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline max-h-96"
            placeholder="Enter your text here..."
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
