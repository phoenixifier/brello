import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-8">
      <p className="text-gray-600">© Brello 2024</p>
      <div className="flex gap-2 items-center">
        <img src="/public/mail.svg" alt="mail" />
        <p className="text-gray-600">help@brello.io</p>
      </div>
    </div>
  );
};

export default Footer;
