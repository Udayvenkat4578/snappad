"use client";

import { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  User,
  Film,
  Languages
} from "lucide-react";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import Landing from "../Landing/page";
import { FaCamera } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";

export default function SubmitAd() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: "",
    theatre: "",
    language: "",
    adType: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // 1. Save to Firebase
      await axios.post(
        "https://snappad-b8639-default-rtdb.firebaseio.com/submit.json",
        formData
      );

      // 2. Send Email via EmailJS
      await emailjs.send(
        "service_d3u684y", // replace with your EmailJS service ID
        "template_734k41x", // replace with your EmailJS template ID
        {
          name: formData.fullName,
          phone: formData.phoneNumber,
          email: formData.email || "Not provided",
          location: formData.location,
          theatre: formData.theatre || "Not specified",
          language: formData.language,
          type: formData.adType,
          description: formData.description,
        },
        "G-7ufwppd65iotPUT" // replace with your EmailJS public key
      );

      setSuccess(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        location: "",
        theatre: "",
        language: "",
        adType: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {<Landing /> ? null : <Navbar />}
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-orange-500">Submit Your Advertisement</h1>
        <p className="text-gray-500 text-center mb-10">
          Just fill in a few details and we'll take care of the rest.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Film className="text-orange-500" size={28} />
            <h2 className="text-2xl font-semibold">Ad Details</h2>
          </div>

          {/* --- Your form fields remain exactly as before --- */}
          {/* Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">
                <User className="inline mr-2 text-gray-500" size={18} />
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">
                <Phone className="inline mr-2 text-gray-500" size={18} />
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="9876543210"
                required
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">
                <Mail className="inline mr-2 text-gray-500" size={18} />
                Email (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1 font-medium">
                <MapPin className="inline mr-2 text-gray-500" size={18} />
                Location/Area <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City or locality"
                required
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Theatre */}
            <div>
              <label className="block mb-1 font-medium">
                <Film className="inline mr-2 text-gray-500" size={18} />
                Specific Theatre (Optional)
              </label>
              <input
                type="text"
                name="theatre"
                value={formData.theatre}
                onChange={handleChange}
                placeholder="Enter theatre name if you have a preference"
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>

          {/* Language */}
          <div className="mt-6">
            <label className="block mb-2 font-medium">
              <Languages className="inline mr-2 text-gray-500" size={18} />
              Advertisement Language <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              {["English", "తెలుగు", "हिंदी"].map((lang) => (
                <label key={lang} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="language"
                    value={lang}
                    checked={formData.language === lang}
                    onChange={handleChange}
                    required
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>

          {/* Ad Type */}
          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Advertisement Type <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="adType"
                  value="Image"
                  checked={formData.adType === "Image"}
                  onChange={handleChange}
                  required
                />
                <FaCamera className="text-orange-500" />Image
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="adType"
                  value="Video"
                  checked={formData.adType === "Video"}
                  onChange={handleChange}
                  required
                />
                <IoVideocam className="text-orange-500" /> Video
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Message/Ad Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your advertisement in Telugu, Hindi, or English..."
              required
              rows="4"
              className="w-full border rounded-lg p-3"
            ></textarea>
            <p className="text-gray-500 text-sm mt-1">
              Include your business details in Telugu, Hindi, or English
            </p>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-lg shadow-md transition 
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:opacity-90"}`}
            >
              {loading
                ? "Submitting..."
                : success
                ? "✅ Check your email"
                : "Submit Advertisement"}
            </button>
          </div>
        </form>
      </div>
      {<Landing /> ? null : <Footer />}
    </div>
  );
}
