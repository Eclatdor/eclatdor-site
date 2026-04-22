"use client";
import React, { useState } from "react";

const mockData = [
  {
    id: "ST-001",
    name: "Aurora Gown",
    collection: "Spring 2025",
    category: "Couture",
    isNew: true,
    priceWholesale: "£450",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/301",
      "https://via.placeholder.com/302"
    ]
  }
];

export default function App() {
  const [userRole, setUserRole] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [password, setPassword] = useState("");
  const [priceCode, setPriceCode] = useState("");
  const [search, setSearch] = useState("");

  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    collection: "",
    category: "",
    priceWholesale: "",
    images: ""
  });

  const [data, setData] = useState(mockData);

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

  const handlePriceAccess = () => {
    if (priceCode === "price123") setShowPrice(true);
    else alert("Wrong code");
  };

  const filtered = data.filter(item =>
    item.id.toLowerCase().includes(search.toLowerCase()) ||
    item.collection.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddItem = () => {
    const imagesArray = newItem.images.split(",");

    setData([
      ...data,
      {
        ...newItem,
        images: imagesArray,
        isNew: true
      }
    ]);

    setNewItem({
      id: "",
      name: "",
      collection: "",
      category: "",
      priceWholesale: "",
      images: ""
    });
  };

  if (!loggedIn) {
    return (
      <div className="p-10">
        <h1 className="text-xl mb-4">Eclat dOr Access</h1>
        <p className="mb-2">Team or Buyer login</p>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2"
        />
        <button onClick={handleLogin} className="ml-2 bg-black text-white p-2">
          Enter
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Eclat dOr Collections</h1>

      <input
        type="text"
        placeholder="Search by style, collection, category"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      {userRole === "buyer" && !showPrice && (
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter wholesale code"
            value={priceCode}
            onChange={e => setPriceCode(e.target.value)}
            className="border p-2"
          />
          <button onClick={handlePriceAccess} className="ml-2 bg-gray-800 text-white p-2">
            Unlock Prices
          </button>
        </div>
      )}

      {userRole === "team" && (
        <div className="mb-6 border p-4 rounded-xl">
          <h2 className="text-lg font-bold mb-2">Add New Style</h2>

          <input placeholder="Style ID" value={newItem.id} onChange={e => setNewItem({ ...newItem, id: e.target.value })} className="border p-2 mr-2 mb-2" />
          <input placeholder="Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} className="border p-2 mr-2 mb-2" />
          <input placeholder="Collection" value={newItem.collection} onChange={e => setNewItem({ ...newItem, collection: e.target.value })} className="border p-2 mr-2 mb-2" />
          <input placeholder="Category" value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value })} className="border p-2 mr-2 mb-2" />
          <input placeholder="Wholesale Price" value={newItem.priceWholesale} onChange={e => setNewItem({ ...newItem, priceWholesale: e.target.value })} className="border p-2 mr-2 mb-2" />
          <input placeholder="Image URLs (comma separated)" value={newItem.images} onChange={e => setNewItem({ ...newItem, images: e.target.value })} className="border p-2 w-full mb-2" />

          <button onClick={handleAddItem} className="bg-black text-white p-2">Add Style</button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(item => (
          <div key={item.id} className="border p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p>Style: {item.id}</p>
            <p>Collection: {item.collection}</p>
            <p>Category: {item.category}</p>
            {item.isNew && <p className="text-green-600">New</p>}

            <div className="flex gap-2 mt-2 overflow-x-auto">
              {item.images.map((img, i) => (
                <img key={i} src={img} alt="" className="w-24 h-24 object-cover rounded" />
              ))}
            </div>

            {(userRole === "team" || showPrice) && (
              <p className="mt-2 font-semibold">Wholesale: {item.priceWholesale}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}