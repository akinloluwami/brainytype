"use client";
import thread from "@/thread";
import axios from "axios";
import React, { useState, useRef } from "react";

const Page = () => {
  const [threads, setThreads] = useState<any>([
    {
      content: "You are ChatGPT, a large language model trained by OpenAI.",
      role: "system",
    },
  ]);
  const [message, setMessage] = useState("");
  const chatRef = useRef(null);

  const handleNewMessage = async (e: any) => {
    e.preventDefault();
    const payload = {
      role: "user",
      content: message,
    };
    setThreads((prevThreads: any) => {
      const newThreads = [...prevThreads, payload];
      setMessage("");
      return newThreads;
    });

    try {
      const newThreads = [...threads, payload];
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newThreads,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      );
      setThreads((prevThreads: any) => {
        const newThreads = [...prevThreads, res.data.choices[0].message];
        return newThreads;
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[60%] pt-5 mx-auto min-h-screen h-screen" ref={chatRef}>
      <div className="">
        {threads.map((message: any, i: number) => (
          <div
            key={i}
            className={`chat ${
              message.role == "assistant" ? "chat-start" : "chat-end"
            } ${message.role === "system" && "hidden"}`}
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
      <div
        className="sticky w-full bottom-0 px-2 my-4 flex justify-center py-3"
        style={{
          backdropFilter: "blur(5px)",
        }}
      >
        <form
          className="flex items-center justify-start w-full gap-2"
          onSubmit={handleNewMessage}
        >
          <textarea
            className="resize-y min-h-0 h-auto border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline max-h-96"
            placeholder="Enter your text here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="bg-purple-600 px-4 py-2  rounded-md text-white font-semibold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
