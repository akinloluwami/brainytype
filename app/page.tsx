"use client";
import thread from "@/thread";
import React, { useState } from "react";

const Page = () => {
  const [threads, setThreads] = useState(thread);
  return (
    <div className="w-[60%] pt-5 mx-auto min-h-screen relative">
      <div className="">
        {threads.map((message) => (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full my-4 flex justify-center">
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
