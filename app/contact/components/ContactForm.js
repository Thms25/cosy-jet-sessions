"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="w-full md:w-2/3 mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
      <Form className="p-8 w-full xl:max-w-1/2 text-cjsWhite transition-colors duration-[750ms] bg-cjsBrown" />
      <Image
        className="object-contain w-1/2 hidden lg:block"
        priority
        src="/images/lights.png"
        alt="cjs-lights"
        width={366}
        height={603}
      />
    </div>
  );
}

const Form = ({ className }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={className}>
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Hi 👋! My name is...</p>
        <input
          type="text"
          placeholder="Your name..."
          className={` bg-cjsPink transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Your message...</p>
        <textarea
          placeholder="Feel free to ask any questions"
          className={`bg-cjsPink transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-cjsWhite p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`bg-cjsPink hover:bg-cjsWhite hover:text-cjsBrown transition-colors duration-300 text-lg text-center rounded-lg w-full py-3 font-semibold`}
      >
        Submit
      </motion.button>
    </form>
  );
};
