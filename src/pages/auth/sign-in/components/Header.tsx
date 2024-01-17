import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-8">
      <img src="/public/icon.svg" alt="Logo" />
      <h1 className="text-xl font-bold">Brello</h1>
    </div>
  );
};

export default Header;
