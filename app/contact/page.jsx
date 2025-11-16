 



"use client"

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "react-toastify";
export default function ContactPage() {
  const [loading,setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name:e.target.name.value,
      email:e.target.email.value,
      title:e.target.title.value,
      message:e.target.message.value,
    }
    const res = await fetch ("/api/contact", {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(formData),
    });
    setLoading(false);
    if (res.ok){ 
      toast.success("Message sent successfully")
      e.target.reset();
    }
    else toast.error("Couldn't send message");
  };
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-12 ">
      {/* Header Section */}
      <div className="text-center my-14 ">
        <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
        <p className="text-white max-w-md mx-auto">
          Have questions? We’d love to hear from you. Send us a message and
          we’ll respond as soon as possible.
        </p>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-10">
        {/* Contact Form */}
        <div className="bg-[#111] p-8 rounded-2xl shadow-lg flex-1">
          <h3 className="text-lg font-semibold mb-4">Send Us a Message</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="title"
              required
              placeholder="Message Title"
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Message"
              name="message"
              required
              rows="4"
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-black font-semibold rounded-lg py-2 mt-2 transition   "
            >
              {/* {loading? ? "Sending...":"Send Message"} */}
              {loading ? "Sending...":"Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="text-white mb-4">
              Reach out to us through any of these channels, and our team will
              get back to you promptly.
            </p>
          </div>

          {/* Info Boxes */}
          <div className="bg-[#111] p-6 rounded-xl shadow-md space-y-5">
            <div className="flex items-start gap-3">
              <Mail className="text-green-500" />
              <div>
                <h4 className="font-semibold text-green-500">Email</h4>
                <p className="text-white">tourtech@gmail.com</p>
                <p className="text-white">feedback@tourtech.name.ng</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-green-500" />
              <div>
                <h4 className="font-semibold text-green-500">Phone</h4>
                <p className="text-white">09040107857</p>
                <p className="text-white">Mon–Fri 9am–6pm </p>
              </div>
            </div>

            {/* <div className="flex items-start gap-3">
              <MapPin className="text-green-500" />
              <div>
                <h4 className="font-semibold text-green-500">Office</h4>
                <p className="text-white">
                  123 Business Street <br /> Tech City, TC 12345
                </p>
              </div>
            </div> */}
          </div>

          {/* <div className="bg-[#111] p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-3">
              <Clock className="text-green-500" />
              <div>
                <h4 className="font-semibold text-green-500">Business Hours</h4>
                <p className="text-white">Mon–Fri: 9:00 AM–6:00 PM</p>
                <p className="text-white">Saturday: 10:00 AM–4:00 PM</p>
                <p className="text-white">Sunday: Closed</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
        <p className="text-white mb-4 max-w-md mx-auto">
          Join hundreds of individuals already using TourTech to find indudtrial and educational visits
        </p>
        <button className="bg-green-500 text-black font-semibold px-6 py-2 rounded-lg hover:bg-green-400    transition">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-20 w-full border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto px-4">
          <div>
            <h4 className="text-green-500 font-bold text-lg">TourTech</h4>
            <p className="text-white mt-2 max-w-xs">
              Simplifying industrial visit management for modern industries.
            </p>
          </div>

          <div className="flex gap-12 text-sm mt-6 md:mt-0">
            <div>
              <h5 className="font-semibold mb-2">Product</h5>
              <ul className="space-y-1 text-white">
                <li>Features</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Company</h5>
              <ul className="space-y-1 text-white">
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Legal</h5>
              <ul className="space-y-1 text-white">
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
