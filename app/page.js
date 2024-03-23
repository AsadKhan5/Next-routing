import React from "react";
import Link from "next/link";

const TaskPage = () => {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/clients" className="btn btn-active btn-accent">
        Lets gets start
      </Link>
    </div>
  );
};

export default TaskPage;
