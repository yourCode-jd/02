"use client";
import React from "react";
import { login } from "@/components/icons/Icons";
import Link from "next/link";
import { useState } from "react";

function LoginForm() {
  const [loginFormOpen, setLoginForm] = useState(false);

  return (
    <div className="container">
      <div className="p-4">
        <Link
          className="inline-block"
          href=""
          onClick={() => setLoginForm(!loginFormOpen)}
        >
          {login}
        </Link>
      </div>
      {loginFormOpen && (
        <div className="z-10 absolute w-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow max-w-lg ">
          <form action="" className="relative flex flex-wrap gap-5 p-8">
            <h2 className="text-3xl font-semibold uppercase w-full text-center ">
              Login
            </h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              required
              className="p-3 border w-full"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              required
              className="p-3 border w-full "
            />
            <button
              onClick={() => setLoginForm()}
              type="submit"
              className="bg-orange-600 p-2 min-h-[50px] uppercase text-white min-w-40 ml-auto hover:bg-orange-500 ease-linear duration-150"
            >
              Submit
            </button>
            <div
              className="absolute cursor-pointer bg-orange-500 text-white rounded-full w-8 h-8 flex justify-center items-center -top-3 -right-3  text-lg"
              onClick={() => setLoginForm(false)}
            >
              ✖
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
