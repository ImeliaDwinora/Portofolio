import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-[32px] text-[#2E4057] text-center mb-6">Contact Me</h2>

        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type your message..."
              className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[coral] text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-700">Or connect with me via:</p>
          <div className="flex justify-center gap-6 text-xl text-gray-700">
            <a href="mailto:imeliadwinora@gmail.com" aria-label="Email" className="hover:text-amber-500">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/imelia-dwinora-cahyati-785424312/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
