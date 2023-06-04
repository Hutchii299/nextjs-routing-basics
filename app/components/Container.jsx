import React from "react";

const Container = ({ children, title, bgColor }) => {
  return (
    <div
      className={`w-full rounded-lg p-8 text-center text-2xl flex flex-col items-center justify-center gap-8 ${bgColor}`}
    >
      <h1 className="text-3xl font-semibold">{title}</h1>
      {children}
    </div>
  );
};

export default Container;
