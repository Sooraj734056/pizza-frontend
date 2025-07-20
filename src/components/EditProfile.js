// src/components/EditProfile.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EditProfile.css";

const EditProfile = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser({ name: data.name, email: data.email });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/users/profile", user, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Update failed. Please try again.");
    }
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
