import React, { useState } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import logoIMG from "../assets/logo.svg";

export const Login = () => {
  const { googleSignIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/account");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="flex flex-col justify-center place-items-center">
        <div className="hidden sm:block">
          <img className="h-48 w-48 whitespace-normal" src={logoIMG} alt="" />
          <div className="font-bold text-center text-3xl">
            <h2 className="">Support</h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-white p-4"
        >
          <h2 className="text-4xl font-bold text-center py-2">Sign In</h2>

          <div className="flex flex-col py-2">
            <label className="font-bold py-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-bold py-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2"
              type="password"
            />
          </div>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember me for 30 days
            </p>
            <p>
              <Link to="/signup" className="underline text-[#05006D]">
                Forgot Password?
              </Link>
            </p>
          </div>
          <button className="border w-full my-5 py-2 bg-[#05006D] hover:bg-indigo-800 text-white">
            Sign In
          </button>
          <div className="w-full flex place-content-center py-2">
            <GoogleButton type="light" onClick={handleGoogleSignIn} />
          </div>

          <div className="text-center">
            <p className="py-2">
              Don't have an account yet?{" "}
              <Link to="/signup" className="underline text-[#34A853]">
                Sign up.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
