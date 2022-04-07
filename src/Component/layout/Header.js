import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TokenService } from "../../services/storage.service";
function Header({ toggle }) {
  const history = useHistory();
  const Logout = () => {
    localStorage.clear();
    TokenService.logout();
    history.push("/");
  };
  return (
    <div>
      <div className="header">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <a href="/" className="header-logo-link">
              <img
                src="./assets/images/143x48logo.png"
                alt="Hapitate"
                className="img-header-logo"
                style={{ paddingLeft: 40, paddingTop: 10 }}
              />
            </a>
            <div className="menu-toggle-button">
              <a
                className="nav-link"
                onClick={toggle}
                id="sidebarCollapse"
                href="/"
              >
                <div className="my-toggl-icon">
                  <span className="bar1" />
                  <span className="bar2" />
                  <span className="bar3" />
                </div>
              </a>
            </div>
            <div className="right-eliment">
              <ul className="list">
                <input
                  type="hidden"
                  id="all_notf_count"
                  defaultValue="/admin/all/notf/count"
                />
                <li className="bell-area">
                  <a
                    id="notf_conv"
                    className="dropdown-toggle-1"
                    target="_blank"
                    href="/"
                  >
                    <i className="fas fa-globe-americas" />
                  </a>
                </li>
                <li className="bell-area">
                  <a id="notf_conv" className="dropdown-toggle-1" href="/">
                    <i className="far fa-envelope" />
                    <span id="conv-notf-count">0</span>
                  </a>
                  <div className="dropdown-menu" style={{ display: "none" }}>
                    <div
                      className="dropdownmenu-wrapper"
                      data-href="/admin/conv/notf/show"
                      id="conv-notf-show"
                    ></div>
                  </div>
                </li>
                <li className="bell-area">
                  <a id="notf_product" className="dropdown-toggle-1" href="/">
                    <i className="icofont-cart" />
                    <span id="product-notf-count">0</span>
                  </a>
                  <div className="dropdown-menu" style={{ display: "none" }}>
                    <div
                      className="dropdownmenu-wrapper"
                      data-href="/admin/product/notf/show"
                      id="product-notf-show"
                    ></div>
                  </div>
                </li>
                <li className="bell-area">
                  <a id="notf_user" className="dropdown-toggle-1" href="/">
                    <i className="far fa-user" />
                    <span id="user-notf-count">0</span>
                  </a>
                  <div className="dropdown-menu" style={{ display: "none" }}>
                    <div
                      className="dropdownmenu-wrapper"
                      data-href="/admin/user/notf/show"
                      id="user-notf-show"
                    ></div>
                  </div>
                </li>
                <li className="bell-area">
                  <a id="notf_order" className="dropdown-toggle-1" href="/">
                    <i className="far fa-newspaper" />
                    <span id="order-notf-count">0</span>
                  </a>
                  <div className="dropdown-menu" style={{ display: "none" }}>
                    <div
                      className="dropdownmenu-wrapper"
                      data-href="/admin/order/notf/show"
                      id="order-notf-show"
                    ></div>
                  </div>
                </li>
                <li className="login-profile-area">
                  <a className="dropdown-toggle-1" href="javascript">
                    <div className="user-img">
                      <img
                        src="https://geniuscart.royalscripts.com/assets/images/admins/1556780563user.png"
                        alt=""
                      />
                    </div>
                  </a>
                  <div className="dropdown-menu" style={{ display: "none" }}>
                    <div className="dropdownmenu-wrapper">
                      <ul>
                        <h5>Welcome!</h5>
                        <li>
                          <a href="/admin/profile">
                            <i className="fas fa-user" /> Edit Profile
                          </a>
                        </li>
                        <li>
                          <a href="/admin/password">
                            <i className="fas fa-cog" /> Change Password
                          </a>
                        </li>
                        <li>
                          <Link to="#" onClick={Logout}>
                            <i className="fas fa-power-off" /> Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <SideNav/>
          </Offcanvas.Body>
        </Offcanvas> */}
    </div>
  );
}

export default Header;
