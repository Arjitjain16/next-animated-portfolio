"use client"
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const page = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-full flex flex-col gap-5 items-center justify-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      >
        <div
          className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center"
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-zinc-900 text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail} className="h-full flex flex-col gap-8 justify-center bg-red-50 rounded-xl px-24 p-24 lg:px-52">
          <span className="text-gray-700 text-xl lg:3xl font-semibold">
            Dear Arjit Jain,
          </span>
          <textarea
            rows={6}
            name="user_message"
            className="w-full h-24 bg-transparent border-b-black border-b-2 outline-none  text-black"
          ></textarea>
          <span className="text-gray-700 text-xl lg:3xl font-semibold">
            My mail address is:
          </span>
          <input
            type="text"
            name="user_email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-transparent border-b-2 border-black outline-none mb-4"
          />
          <span className="text-gray-700 font-semibold text-xl lg:3xl">
            Regards
          </span>
          <button className="bg-purple-200 w-full text-black px-4 py-3 rounded mt-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-bold">Successfully sent</span>
          )}
          {error && (
            <span className="text-red-500 font-bold">Some error occurred</span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default page;