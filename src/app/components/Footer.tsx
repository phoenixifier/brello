import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-8">
      <p className="text-gray-600">© Brello 2024</p>
      <div className="flex items-center gap-2">
        <img src="/public/mail.svg" alt="mail" />
        <p className="text-gray-600">help@brello.io</p>
      </div>
    </div>
  );
};

export default Footer;
