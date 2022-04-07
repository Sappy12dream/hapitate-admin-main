import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import "./layout.css"

function Layout({ children }) {
  const [isActive, setActive] = useState("false");
  const Toggle = () => {
    setActive(!isActive);
  };
  const user = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!user.login) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div>
      <div className="page">
        <div className="page-main">
          <Header toggle={Toggle} />

          <div className="wrapper">
            <SideNav setvalue={isActive} />

            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
