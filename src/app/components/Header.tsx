import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex gap-2 p-8 items-center">
      <img src="/public/icon.svg" alt="Logo" />
      <h1 className="font-bold text-xl">Brello</h1>
    </div>
  );
};

export default Header;
