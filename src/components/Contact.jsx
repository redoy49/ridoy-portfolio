// Contact.jsx
import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          toast.error("Something went wrong. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 md:p-10 text-center space-y-5">
          <p className="text-lg text-gray-700">
            Feel free to reach out directly. I’m always open to new
            opportunities.
          </p>

          <div className="flex items-center gap-4 text-gray-700 justify-center">
            <MdEmail size={20} className="text-[#7081C8]" />
            <a
              href="mailto:mdredoyhasan49@gmail.com"
              className="hover:underline"
            >
              mdredoyhasan49@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-700 justify-center">
            <FaPhoneAlt size={20} className="text-[#7081C8]" />
            <a href="tel:+8801795580257" className="hover:underline">
              +880 1795 580257
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-700 justify-center">
            <FaWhatsapp size={22} className="text-[#7081C8]" />
            <a
              href="https://wa.me/8801795580257"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 md:p-10 space-y-6"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Send Me a Message
          </h3>

          <div>
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7081C8]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7081C8]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7081C8]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-3 bg-[#7081C8] hover:bg-[#5a6bb5] text-white px-6 py-3 rounded-full transition"
          >
            <MdEmail size={20} /> {loading ? "Message Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;