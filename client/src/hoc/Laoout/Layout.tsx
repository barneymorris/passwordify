import React from "react";
import { Header } from "../../components/Header/Header";

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};
