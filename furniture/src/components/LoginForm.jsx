import React from "react";
import { login } from "@/components/icons/Icons";
import Link from "next/link";
import { useState } from "react";

function LoginForm() {
  const [useState, setLoginForm] = useState(false);

  return (
    <div className="container">
      <div className="p-4">
        <Link href="" onClick={() => id === login && !setLoginForm}>
          {login}
        </Link>
      </div>
      <div className="absolute top-0 left-0">
        <form action="">
          <input type="text" name="" id="" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
