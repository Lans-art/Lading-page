import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Commponents/Navbar";
import Footer from "../Commponents/Footer";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiGlobalFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import gambar from "../img/wallpaper.jpg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ContentSlider from "../Commponents/ContentSlider";
import Produk from "../img/Produk.mp4";

function LandingPage() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_3cbh3la", // Server ID
        "template_ojn4dok", // Template ID
        e.target,
        "kivPz7_x9sHFFeICG", // Public ID
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
          setLoading(false);
        },
        (error) => {
          console.error("Error:", error);
          alert("Failed to send the message. Please try again.");
          setLoading(false);
        },
      );

    e.target.reset(); // Reset Form
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-slate-100">
        {/* Home Section */}
        <section
          id="Home"
          className="w-full h-screen relative flex justify-center items-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{ backgroundImage: `url(${gambar})` }}
          ></div>
          <div className="relative z-10 w-full sm:w-11/12 md:w-4/5 h-full flex items-center md:pt-20 px-4 sm:px-6 md:px-10 pb-5">
            <ContentSlider />
          </div>
        </section>

        {/* Product Section */}
        <section
          id="Product"
          className="w-full h-screen flex justify-center items-center"
        >
          <div className="w-full sm:w-11/12 md:w-4/5 h-full bg-white border-x-2 border-b-red-500 shadow-xl content-center place-items-center shadow-red-500/50 md:pt-20 px-4 sm:px-6 md:px-10 pb-5">
            <div className="flex flex-col md:flex-row items-center w-11/12 md:w-3/4 mx-auto p-5 rounded-lg ">
              <iframe
                class="w-full aspect-video rounded-xl border-2 border-b-red-500 shadow-xl shadow-red-500/50"
                src={Produk}
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="Contact"
          className="w-full h-screen flex flex-col items-center"
        >
          <div className="w-full sm:w-11/12 md:w-4/5 h-full bg-white border-x-2 border-b-red-500 shadow-xl shadow-red-500/50 place-items-center">
            <div className="w-3/4 h-full md:p-5 md:pt-28">
              <h1 className="text-center text-2xl md:text-3xl font-medium mb-1 md:mb-10">
                Contact Info
              </h1>
              <div className="flex flex-col md:flex-row">
                {/* Contact Details */}
                <div className="w-full md:w-1/2 p-5 space-y-3 md:space-y-5">
                  <div className="flex items-center gap-4 md:gap-6">
                    <FaMapLocationDot className="text-lg md:text-2xl" />
                    <h3 className="text-sm md:text-lg">
                      CV. Konci, Jl. Safir Ujung, Ciomas - Indonesia
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6">
                    <BsFillTelephoneFill className="text-lg md:text-2xl" />
                    <h3 className="text-sm md:text-lg">
                      <a
                        href="https://wa.me/6289611111146"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline1 link-underline-red"
                      >
                        +62 896-1111-1146
                      </a>
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6">
                    <MdEmail className="text-lg md:text-2xl" />
                    <h3 className="text-sm md:text-lg">
                      <a
                        href="mailto:cvkonci@gmail.com"
                        className="link-underline1 link-underline-red"
                      >
                        cvkonci@gmail.com
                      </a>
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6">
                    <RiGlobalFill className="text-lg md:text-2xl" />
                    <h3 className="text-sm md:text-lg">Konci.id</h3>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-1/2 p-5">
                  <form onSubmit={sendEmail} className="flex flex-col gap-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="p-2 w-full h-10 rounded-xl border-2 md:border-4"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="p-2 w-full h-10 rounded-xl border-2 md:border-4"
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                      className="p-2 w-full rounded-xl border-2 md:border-4 mb-3 resize-none"
                      rows="4"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-20 h-10 bg-red-500 hover:bg-red-400 rounded-md text-center p-2 text-white"
                      disabled={loading}
                    >
                      {loading ? (
                        <AiOutlineLoading3Quarters className="animate-spin" />
                      ) : (
                        "Send"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto bg-slate-700">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
