import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { registerUser } from "../redux/auth/AuthThunk";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector(
    (state: RootState) => state.user
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    userRole: "User",
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // FormData banana file bhejne ke liye
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (profileImage) {
      data.append("profileImage", profileImage);
    }

    try {
      await dispatch(registerUser(data)).unwrap();
      // ✅ Registration successful → redirect to login
      navigate("/login", { replace: true, state: { from: "register" } });
    } catch (err) {
      // Error already handled in thunk; no-op here
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Registration successful!</p>}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full border p-2"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full border p-2"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          className="w-full border p-2"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full border p-2"
          value={formData.address}
          onChange={handleChange}
        />

        <select
          name="userRole"
          className="w-full border p-2"
          value={formData.userRole}
          onChange={handleChange}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        {/* File input for image */}
        <input
          type="file"
          accept="image/*"
          className="w-full border p-2"
          onChange={handleFileChange}
        />

        {/* Image preview */}
        {profileImage && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(profileImage)}
              alt="Preview"
              className="h-20 w-20 object-cover rounded-full"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 w-full"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <p className="text-sm text-center text-gray-600">
  Already have an account?{" "}
  <Link to="/login" className="text-blue-600 hover:underline">
    Log-in
  </Link>
</p>
      </form>
    </div>
  );
};

export default Register;
