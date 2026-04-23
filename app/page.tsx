"use client";
import { useState } from "react";

const data = [
  {
    id: "ST-001",
    name: "Aurora Gown",
    collection: "Spring 2025",
    category: "Couture",
    isNew: true,
    priceWholesale: "£450",
    images: ["https://images.unsplash.com/photo-1520975916090-3105956dac38"]
  }
];

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState(null);

  const handleLogin = () => {
    if (password === "team123") {
      setUserRole("team");
      setLoggedIn(true);
    } else if (password === "buyer123") {
      setUserRole("buyer");
      setLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  };

  if (!loggedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl mb-6 tracking-wide">Eclat d’Or</h1>
          <p className="mb-4 opacity-70">Private Showroom Access</p>
          <input
            type="password"
            placeholder="Enter password"
            className="p-3 text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4">
            <button onClick={handleLogin} className="px-6 py-2 border">
              Enter
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen p-8">
      <h1 className="text-3xl mb-10 tracking-wide">Eclat d’Or Collections</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item) => (
          <div key={item.id} className="group">
            <img
              src={item.images[0]}
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="mt-4">
              <h2 className="text-lg">{item.name}</h2>
              <p className="text-sm opacity-60">{item.collection}</p>
              <p className="text-sm opacity-60">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}