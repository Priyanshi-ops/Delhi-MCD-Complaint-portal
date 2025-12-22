import React, { useState } from "react";
import axios from "axios";

const Signup = ({ closeSignup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8081/api/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      alert("Signup successful ✅");
      console.log("Signup response:", response.data);

      // form reset
      setFormData({
        name: "",
        email: "",
        password: ""
      });

      closeSignup(); // modal close
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.response?.data || "Signup failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition disabled:opacity-60"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
