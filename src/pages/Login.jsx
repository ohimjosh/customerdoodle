import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const { googleSignIn, user } = UserAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
        <p className="py-2">
          Don't have an account yet?{" "}
          <Link to="/signup" className="underline">
            Sign up.
          </Link>
        </p>
      </div>
      <form>
        <div className="flex flex-col py-2">
          <label className="py-2 font font-medium">Email Address</label>
          <input className="border p-3" type="email" />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font font-medium">Password</label>
          <input className="border p-3" type="password" />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Sign Up
        </button>
      </form>
      <div className="max-w[240px] m-auto py-4">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
    
  );
};
