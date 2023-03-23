import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import { HashLink as HashLink } from "react-router-hash-link";
function Header() {
  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);

  // useEffect(() => {
  //   connectWallet();
  //   console.log(currentAccount);
  // }, []);

  const [sidebarActive, setSidebarActive] = useState([false]);
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <div>
      <div className="header">
        <header>
          <nav className="navigation">
            <div className="container">
              <div className="row">
                <div className="main-head">
                  <ul className="menu-ul">
                    <li className="nav-list">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-list">
                      <HashLink to="/home#about">
                        <a href="#about">ABOUT US</a>
                      </HashLink>
                    </li>
                    <li className="nav-list">
                      <HashLink to="/home#roadmap">
                        <a href="#roadmap">ROADMAP</a>
                      </HashLink>
                    </li>
                  </ul>
                  <div className="logo">
                    <Link to="/home" className="logo-link">
                      <img
                        src="assets/img/logo/logo.png"
                        className="logo-img"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <ul className="menu-ul">
                    <li className="nav-list">
                      <HashLink to="/home#team">
                        <a href="#team">TEAM</a>
                      </HashLink>
                    </li>
                    <li className="nav-list">
                      <Link to="/allowlist">ALLOWLIST</Link>
                    </li>
                    {/* {currentAccount ? (
                      <li className="nav-list">
                        <Link to="/create-nft">
                          <a>CREATE ITEM</a>
                        </Link>
                      </li>
                    ) : (
                      <li className="nav-list" onClick={connectWallet()}>
                        <a href="#">LOGIN</a>
                      </li>
                    )} */}
                    <li className="nav-list nav-socail">
                      <a
                        href="https://twitter.com/winninghandsnft/status/1614337351483883520?s=12&t=kULy9M1hC68w4SMjRT5cVQ"
                        target="_blank"
                      >
                        <img src="assets/img/Vector2.png" alt="" />
                      </a>

                      <a
                        href="https://www.instagram.com/winninghandsnft/"
                        target="_blank"
                      >
                        <img src="assets/img/Intersect.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <div className="mobile-nav">
            <div className="container">
              <div className="row">
                <div className="main-head-mobile">
                  <div className="mobile-logo">
                    <Link to="/" className="logo-link">
                      <img
                        src="assets/img/logo/logo.png"
                        className="logo-img-mobile"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div className="menu-icon" onClick={toggleSidebar}>
                    <img src="assets/img/icon/navigation-menu.svg" alt="" />
                  </div>

                  <div
                    className={`${sidebarActive ? "" : "active"} mobile-menu`}
                  >
                    <div className="close-menu" onClick={toggleSidebar}>
                      <img src="assets/img/icon/close.svg" alt="" />
                    </div>
                    <ul className="menu-ul">
                      <li className="nav-list">
                        <Link to="/home" onClick={toggleSidebar}>
                          Home
                        </Link>
                      </li>
                      <li className="nav-list">
                        <HashLink to="/home#about">
                          <a href="#about" onClick={toggleSidebar}>
                            ABOUT US
                          </a>
                        </HashLink>
                      </li>
                      <li className="nav-list">
                        <HashLink to="/home#roadmap">
                          <a href="#roadmap" onClick={toggleSidebar}>
                            ROADMAP
                          </a>
                        </HashLink>
                      </li>
                      <li className="nav-list">
                        <HashLink to="/home#team">
                          <a href="#team" onClick={toggleSidebar}>
                            TEAM
                          </a>
                        </HashLink>
                      </li>
                      {/* {currentAccount ? (
                        <li className="nav-list">
                          <a href="#">Login</a>
                        </li>
                      ) : (
                        <li className="nav-list" onClick={connectWallet()}>
                          <a>Create Item</a>
                        </li>
                      )} */}
                      {/* <li className="nav-list">

                        <a>Create Item</a>
                      </li> */}

                      <li className="nav-list">
                        <Link to="/allowlist" onClick={toggleSidebar}>
                          ALLOWLIST
                        </Link>
                      </li>
                    </ul>

                    <div className="nav-footer">
                      <div className="row">
                        <div className="col-12">
                          <div className="footer__content">
                            <ul className="footer-ul">
                              <li>
                                <a href="#" className="footer-link">
                                  <img
                                    src="assets/img/icon/opensea.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://twitter.com/winninghandsnft/status/1614337351483883520?s=12&t=kULy9M1hC68w4SMjRT5cVQ"
                                  className="footer-link"
                                >
                                  <img
                                    src="assets/img/icon/twitter.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                            <div className="footer-logo">
                              <img src="assets/img/logo/logo.png" alt="" />
                            </div>
                            <ul className="footer-ul">
                              <li>
                                <a href="#" className="footer-link">
                                  <img
                                    src="assets/img/icon/discord-icon.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/winninghandsnft/"
                                  className="footer-link"
                                >
                                  <img src="assets/img/icon/insta.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
