import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from '../../styles/Home.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
