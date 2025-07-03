import React from "react";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";
export const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-center mb-10 max-w-3xl mx-auto">
          Have questions or ready to request our services? Reach out to our team
          and we'll be happy to assist you with your transportation needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/80 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <PhoneIcon className="w-6 h-6 mr-3 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>(555) 123-4567</p>
                  <p>(555) 987-6543 (Dispatch)</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="w-6 h-6 mr-3 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@bigctrucking.com</p>
                  <p>dispatch@bigctrucking.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 mr-3 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p>1234 Logistics Way</p>
                  <p>Truckville, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-6 h-6 mr-3 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>24/7 Emergency Dispatch Available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/80 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7FFCD]"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7FFCD]"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7FFCD]"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7FFCD]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#E7FFCD] hover:bg-opacity-80 py-3 rounded-md font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
