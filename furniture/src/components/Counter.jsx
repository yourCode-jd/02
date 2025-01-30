"use client";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-5 text-center">
      <h2 className="text-xl font-semibold">Counter: {count}</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}
export default Counter;
