import React from "react";
import Header from "@/pages/auth/sign-in/components/header.tsx";
import Footer from "@/pages/auth/sign-in/components/footer.tsx";

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      <Header />
      <div className="flex-1" />
      {children}
      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Layout;
