import React, { useState } from "react";
import Icon from "../UI/Icon/Icon";
import "./Header.css";

const NavItem = (props) => {
  return <li></li>;
};

const Header = (props) => {
  return (
    <div className="navbar navbar-dark navbar-expand-md bg-dark px-3 py-2 text-white">
      <div className="container">
        <a href="/" className="navbar-brand">
          <span className="fs-3 fw-bold">
            <span className="text-danger">Ya</span>Tube
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">
                <Icon icon="bi-house" className="d-block" />
                Feed
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Icon icon="bi-file-person" className="d-block" />
                Subscriptions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Icon icon="bi-person-circle" className="d-block" />
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

// const Header = (props) => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   const menuToggleHandler = () => setToggleMenu(!toggleMenu);
//   const closeMenu = () => setToggleMenu(false);

//   return (
// <nav className={styles.header}>
//   <div className={styles["nav-right"]}>
//     <div className={styles.logo}>
//       <h1>Posts App</h1>
//     </div>

//     <ul
//       className={`${styles.nav} ${toggleMenu ? styles.active : ""}`}
//       onClick={closeMenu}
//     >
//       <li>Feed</li>
//       <li>Subscriptions</li>
//       <li>Profile</li>
//     </ul>
//   </div>

//   <div className={styles["nav-left"]}>
//     <div className={styles["mobile-menu"]} onClick={menuToggleHandler}>
//       <span>MENU</span>
//     </div>
//   </div>
// </nav>
//   );
// };
