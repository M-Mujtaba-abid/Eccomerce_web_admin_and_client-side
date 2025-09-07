import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { loginUser } from "../redux/auth/AuthThunk";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state: RootState) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userRole, setUserRole] = useState("User");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  // ✅ Jab user login ho jaye, role ke hisaab se redirect karo
  useEffect(() => {
    if (user) {
      console.log('User logged in:', user);
      console.log('User role:', user.userRole);
      
      if (user.userRole === "Admin") {
        console.log('Redirecting to /admin');
        navigate("/admin"); // admin ke liye
      } else {
        console.log('Redirecting to /web');
        navigate("/web"); // user ke liye
      }
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium">Role</label>
          <select
            className="w-full border rounded p-2"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div> */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
