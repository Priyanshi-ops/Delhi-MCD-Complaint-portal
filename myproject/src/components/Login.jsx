import React,{useState} from "react";
import axios from "axios";
const Login = ({closeLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
const handleLogin = async (e) => {
  e.preventDefault(); // Prevent page reload
  setLoading(true);
  setError("");

  try {
    const response = await axios.post("http://localhost:8081/api/auth/login", {
      email,
      password
    });

    console.log("Login Success:", response.data);
    alert("Login successful!");
    closeLogin();

    // Optional: Save user data
    localStorage.setItem("user", JSON.stringify(response.data));

    // Optional: Close modal if parent passes setActiveForm prop
    // setActiveForm(null);

  } catch (err) {
    console.error(err);
    setError(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

<form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
                 onChange={(e) => setEmail(e.target.value)}

            placeholder="Enter your email"

            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          {error && <p className="text-red-500">{error}</p>}

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sky-700 text-white p-2 rounded hover:bg-sky-800 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>
    </div>
  );
};

export default Login;
