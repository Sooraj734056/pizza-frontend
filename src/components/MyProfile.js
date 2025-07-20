// src/pages/MyProfile.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyProfile.css";

const MyProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (error) {
        console.error("❌ Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <div className="profile-loading">🔄 Loading your profile...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>👤 My Profile</h2>
        <div className="profile-details">
          <p><span>Name:</span> {user.name}</p>
          <p><span>Email:</span> {user.email}</p>
          <p><span>Joined:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
