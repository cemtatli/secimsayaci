import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className="container bg-white rounded-md min-h-full">{children}</div>;
};

export default MainLayout;
