import React from "react";
import Header from "@/app/components/Header.tsx";
import Footer from "@/app/components/Footer.tsx";

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <div className="min-h-screen container mx-auto flex flex-col">
      <Header />
      <div className="flex-1" />
      {children}
      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Layout;
