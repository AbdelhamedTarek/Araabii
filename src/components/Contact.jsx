// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import {
  FaFacebookMessenger,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { HiEnvelope, HiPhone } from "react-icons/hi2";

const Contact = () => {
  return (
    <section id="services" className="px-20 py-4 bg-[#cfaf70]">
      <h1 className="text-center mb-5 p-1 text-xl md:text-3xl text-[#2b2512] font-bold font-heading">
        Contact | Arabi
      </h1>
      <h2 className="text-center capitalize mb-5 p-1 text-base md:text-2xl text-[#2b2512] font-bold font-heading">
        Arabi will help you to improve your riding skills just believe in the
        process
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex flex-col gap-4 w-full md:w-1/2 border-2 border-[#2b2512] rounded-xl p-4 m-5">
          <form>
            <input
              placeholder="Your Name"
              type="text"
              className="input-field"
            />
            <input
              placeholder="Your Email"
              type="email"
              className="input-field"
            />
            <input
              placeholder="Your Phone"
              type="tel"
              className="input-field"
            />
            <textarea
              placeholder="Your Message"
              className="input-field resize-none overflow-hidden"
            ></textarea>
            <button className="mt-4 px-6 py-4 w-full bg-[#2b2512] text-white rounded-md capitalize cursor-pointer hover:bg-slate-200 hover:text-[#2b2512] transition duration-300 ease-in-out font-button">
              Send Your Message
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2 border-2 border-[#2b2512] rounded-xl p-4 m-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[#2b2512] font-bold text-xl">
                Contact Information
              </h3>
              <p className="text-[#2b2512] font-body text-lg ">
                <span>
                  <HiEnvelope className="inline-block text-2xl mr-2" />
                </span>{" "}
                Email: test@gmail.com
              </p>
              <p className="text-[#2b2512] font-body text-lg ">
                <span>
                  <HiPhone className="inline-block text-2xl mr-2" />
                </span>{" "}
                Phone: +20123456789
              </p>
              <p className="text-[#2b2512] font-body text-lg ">
                <span>
                  <FaWhatsapp className="inline-block text-2xl mr-2" />
                </span>{" "}
                Phone: +20123456789
              </p>
              <p className="text-[#2b2512] font-body text-lg ">
                <span>
                  <FaFacebookMessenger className="inline-block text-2xl mr-2" />
                </span>{" "}
                Phone: +20123456789
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[#2b2512] font-bold text-xl">
                Follow Arabi on Social Media
              </h3>
              <div className="flex gap-6">
                <FaTiktok className="text-4xl text-[#2b2512]" />
                <FaInstagram className="text-4xl text-[#2b2512]" />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[#2b2512] font-bold text-xl mt-1">
                Subscribe to Arabi Newsletter for Updates
              </h3>
              <div className="flex gap-4 mb-2">
                <input
                  placeholder="Your Email"
                  type="email"
                  className="input-field"
                />
                <button className="mt-4 px-6 py-4 bg-[#2b2512] text-white rounded-md capitalize cursor-pointer hover:bg-slate-200 hover:text-[#2b2512] transition duration-300 ease-in-out font-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
