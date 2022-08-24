import React from "react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

export const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate('/')
      console.log('You are logged out')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">ACCOUNT</h1>
      <div>
        <p>Welcome, {user.displayName ? user?.displayName : user.email}</p>
      </div>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
    </div>
  );
};
