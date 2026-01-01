import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const SERVICE_ID = "service_j4hm5ow";
    const TEMPLATE_ID = "template_uge8byq";
    const PUBLIC_KEY = "xgj0UWufxyBv64edO";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
        setErrorMessage(
          "Something went wrong while sending the message. Please try again."
        );
      });
  };

  return (
    <section className="relative min-h-screen px-4 sm:px-6 py-24 overflow-hidden
      bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px]
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-blue-600/20 blur-[140px]" />

      <div className="relative max-w-xl mx-auto w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center"
        >
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-center mb-10 text-sm sm:text-base"
        >
         
        </motion.p>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-3xl p-6 sm:p-8 space-y-5
            bg-white/5 backdrop-blur
            border border-white/10 shadow-xl"
        >
          <input
            name="from_name"
            required
            placeholder="Your Name"
            className="w-full p-3 sm:p-4 rounded-xl
              bg-black/40 border border-white/10
              text-white placeholder-gray-400
              focus:outline-none focus:border-blue-500"
          />

          <input
            name="reply_to"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-3 sm:p-4 rounded-xl
              bg-black/40 border border-white/10
              text-white placeholder-gray-400
              focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 sm:p-4 rounded-xl
              bg-black/40 border border-white/10
              text-white placeholder-gray-400
              focus:outline-none focus:border-blue-500
              resize-none"
          />

          {/* Button + Status */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex justify-center items-center gap-2
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-600 to-cyan-500
                hover:scale-105 transition font-medium
                disabled:opacity-50"
            >
              <Send size={18} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <span className="text-green-400 text-sm">Message sent ✅</span>
            )}
            {status === "error" && (
              <span className="text-red-400 text-sm">Failed ❌</span>
            )}
          </div>

          {errorMessage && (
            <div className="text-red-400 text-sm">{errorMessage}</div>
          )}
        </motion.form>

        {/* Email info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center text-gray-400 text-xs sm:text-sm"
        >
          <Mail className="inline mr-2" size={16} />
          Messages will be sent to{" "}
          <span className="text-white font-medium break-all">
            Yousefsalehtwfiq202121623@gmail.com
          </span>
        </motion.div>
      </div>
    </section>
  );
}
