import React, { Component } from "react";
import logo from "../../images/logo.svg";
import openMenu from "../../images/icon-hamburger.svg";
import closeMenu from "../../images/icon-close-menu.svg";
import "./Header.css";

class Header extends Component {
  state = {
    showMenu: true,
    showMenuData: false,
  };

  handleMenuClick = (showMenu) => {
    if (showMenu === true) {
      this.setState({ showMenuData: true, showMenu: false });
    } else {
      this.setState({ showMenuData: false, showMenu: true });
    }
  };

  render() {
    const { showMenu, showMenuData } = this.state;
    return (
      <div className="header-img">
        <nav className="nav-main">
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        </nav>
        <nav className="nav-main-mob">
          <img className="logo" src={logo} alt="logo" />
          <img
            style={{ cursor: "pointer" }}
            src={showMenu ? openMenu : closeMenu}
            onClick={() => this.handleMenuClick(showMenu)}
            alt="menu-switcher"
          />
          {showMenuData ? (
            <ul>
              <li>About</li>
              <li>Discover</li>
              <li>Get Started</li>
            </ul>
          ) : null}
        </nav>
      </div>
    );
  }
}

export default Header;
