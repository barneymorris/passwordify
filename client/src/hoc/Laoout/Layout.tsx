import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="full-height">
      <div className="container">
        <div>
          <Header />

          {children}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
