"use client";
import React, { useState } from "react";
import Link from "next/link";

const ClientPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-7xl mb-8">Client Page </h1>
      <div>
        <Link href="/">Home Page</Link>
      </div>
      <h2
        className="btn btn-active btn-primary my-4"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </h2>
      <h2 className="text-7xl"> count : {count} </h2>
    </div>
  );
};

export default ClientPage;
