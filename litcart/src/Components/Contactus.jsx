import React from "react";

const Contactus = () => {
  return (
    <div className="bg-[linear-gradient(90deg,#efd5ff_0%,#515ada_100%)] font-sans text-[#222222]">
      <main className="max-w-7xl mx-auto p-10 min-h-[80vh] flex flex-col justify-start">
        {/* Header */}
        <header className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="text-[#000080] mt-3 text-sm md:text-base">
            Any question or remarks? Just write us a message!
          </p>
        </header>

        <section className="max-w-5xl mx-auto rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 bg-[#5a7d8a] min-h-[420px] overflow-hidden">
          {/* Left Contact Info Panel */}
          <div className="bg-gradient-to-r from-cyan-100 via-blue-300 to-indigo-400 p-10 flex flex-col justify-between relative rounded-t-lg md:rounded-l-lg md:rounded-tr-none text-[#12186e] select-none">
            <div>
              <h2 className="font-semibold text-lg mb-3">Contact Information</h2>
              <h2 className="text-sm mb-8">Say something to start a live chat!</h2>
              <ul className="space-y-5 text-xs">
                {/* Phone */}
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#12186e"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M3 5a2 2 0 012-2h3.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H6.5a1.5 1.5 0 000 3h4a1.5 1.5 0 000-3h-.5a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5H9a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    />
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M21 14v5a2 2 0 01-2 2h-4"
                    />
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M15 14l5-5"
                    />
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M16.5 10.5L17 11"
                    />
                  </svg>
                  +91 0000 0000 00
                </li>

                {/* Email */}
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#12186e"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <path d="M3 8l7.89 6.26a2 2 0 002.22 0L21 8m0 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8" />
                  </svg>
                  litcart@gmail.com
                </li>

                {/* Location */}
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#12186e"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M17.657 16.657L13.414 12.414M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M21 21l-6-6"
                    />
                  </svg>
                  PATNA BIHAR
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 items-center mt-6">
              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#12186e] hover:text-black transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.723-.949.564-2 .974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-2.719 0-4.924 2.206-4.924 4.925 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.732-.666 1.58-.666 2.475 0 1.708.87 3.215 2.188 4.099-.807-.025-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.848.171-1.296.171-.317 0-.624-.03-.927-.086.625 1.953 2.444 3.377 4.6 3.416-1.68 1.315-3.809 2.102-6.102 2.102-.396 0-.788-.023-1.17-.067C2.29 19.28 5.031 20 7.999 20c9.599 0 14.865-7.954 14.865-14.865 0-.226-.004-.452-.015-.676A10.683 10.683 0 0024 4.59z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#12186e] hover:text-black transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5z" />
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.6 6.4a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#12186e] hover:text-black transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22 12a10 10 0 10-11.74 9.84v-6.96h-2.3v-2.88h2.3v-2.2c0-2.28 1.36-3.54 3.44-3.54.98 0 2 .18 2 .18v2.2h-1.13c-1.12 0-1.48.7-1.48 1.42v1.94h2.53l-.4 2.88h-2.13v6.96A9.97 9.97 0 0022 12z" />
                </svg>
              </a>
            </div>

            {/* Decorative Circles */}
            <div className="absolute bottom-4 right-0 rounded-full bg-black w-20 h-20 opacity-90"></div>
            <div className="absolute bottom-10 right-14 rounded-full bg-gray-600 w-14 h-14 opacity-50"></div>
          </div>

          {/* Right Contact Form */}
          <form
            className="bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600 p-10 relative flex flex-col gap-8 text-white"
            aria-label="Contact form for Lit Cart"
          >
            {/* Name fields */}
            <div className="flex gap-8 flex-col sm:flex-row">
              <input
                required
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                className="border-b border-gray-300 bg-transparent outline-none text-white text-sm px-1 py-1 placeholder-gray-300 placeholder-italic focus:border-[#c7a6a1]"
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                className="border-b border-gray-300 bg-transparent outline-none text-white text-sm px-1 py-1 placeholder-gray-300 placeholder-italic focus:border-[#c7a6a1]"
              />
            </div>

            {/* Email & Phone */}
            <div className="flex gap-8 flex-col sm:flex-row">
              <input
                required
                type="email"
                placeholder="Email"
                aria-label="Email address"
                className="border-b border-gray-300 bg-transparent outline-none text-white text-sm px-1 py-1 placeholder-gray-300 placeholder-italic focus:border-[#c7a6a1]"
              />
              <input
                required
                type="tel"
                placeholder="+91 012 3456 789"
                aria-label="Phone Number"
                className="border-b border-gray-300 bg-transparent outline-none text-white text-sm px-1 py-1 placeholder-gray-300 placeholder-italic focus:border-[#c7a6a1]"
                pattern="[+]?[0-9\s]{10,15}"
              />
            </div>

            {/* Radio Options */}
            <fieldset className="flex flex-wrap gap-6" aria-label="Select subject">
              <legend className="sr-only">Select Subject?</legend>
              {["General Inquiry", "Brand Story", "Vision And Mission", "Achievements"].map(
                (label, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-1 text-gray-200 text-sm cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={`option${idx}`}
                      className="accent-[#40E0D0] cursor-pointer"
                      required={idx === 0}
                    />
                    {label}
                  </label>
                )
              )}
            </fieldset>

            {/* Message */}
            <textarea
              placeholder="Write your message.."
              aria-label="Write your message"
              required
              className="border-b border-gray-300 bg-transparent outline-none text-white text-sm px-1 py-1 min-h-[4.5rem] placeholder-gray-300 placeholder-italic focus:border-[#c7a6a1]"
            ></textarea>

            {/* Send button */}
            <button
              type="submit"
              className="bg-[#E0FFFF] text-[#222222] px-6 py-2 rounded font-semibold tracking-wide shadow-md hover:bg-[#40E0D0] transition"
            >
              Send Message
            </button>

            {/* Decorative emoji */}
            <div aria-hidden="true" className="absolute bottom-3 right-4 text-4xl opacity-80">
              ☎️
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contactus;
