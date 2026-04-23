"use client";

import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState<"none" | "team" | "buyer">("none");

  const handleLogin = () => {
    if (password === "team123") {
      setAccess("team");
    } else if (password === "buyer123") {
      setAccess("buyer");
    } else {
      alert("Incorrect password");
    }
  };

  if (access === "none") {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-light tracking-widest">
            ÉCLAT D’OR
          </h1>
          <p className="text-sm opacity-70">Private Bridal Showroom</p>

          <input
            type="password"
            placeholder="Enter password"
            className="px-4 py-2 text-black w-64"
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button
            onClick={handleLogin}
            className="bg-white text-black px-6 py-2 hover:opacity-80"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-black p-10">
      <h1 className="text-3xl font-light mb-6">Collections</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 bg-white shadow">
          <h2 className="text-xl font-semibold">Aurora Gown</h2>
          <p className="text-sm text-gray-500">Spring 2025</p>
          <p className="mt-2 text-sm">Couture Bridal</p>

          {access === "team" && (
            <p className="mt-4 font-medium">Wholesale: £450</p>
          )}
        </div>
      </div>
    </div>
  );
}