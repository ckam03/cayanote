import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit() {}

  return (
    <div className="flex items-center justify-center">
      <form className="w-80 space-y-3">
        <div className="flex flex-col space-y-1">
          <label>Email:</label>
          <input
            type="text"
            className="border rounded h-10 px-2 border-gray-400"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label>Password:</label>
          <input
            type="text"
            className="border rounded h-10 px-2 border-gray-400"
          ></input>
        </div>
        <button className="border rounded bg-sky-500 text-sky-100 w-full p-2">
          <Link href="/Dashboard">Log In</Link>
        </button>
      </form>
    </div>
  );
};
export default Login;
