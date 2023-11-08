import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./navBar.module.css";
const NavBar: React.FC = () => {
  const [checkboxStatus, setCheckboxStatus] = useState<boolean>(false);
  const handleStatusChange = () => {
    setCheckboxStatus((prevstate) => !prevstate);
  };
  const closeNavigationMenu = () => {
    setCheckboxStatus(false);
  };

  return (
    <>
      <header>
        <nav className={styles.nav_menu}>
          <input
            id={styles.menu_toggle}
            type="checkbox"
            checked={checkboxStatus}
            onChange={handleStatusChange}
          />
          <label htmlFor={styles.menu_toggle} className={styles.menu_button}>
            <span></span>
          </label>
          <div className={styles.div}></div>
          <ul className={styles.nav_list}>
            <NavLink
              to={"/"}
              className={styles.nav_link}
              onClick={closeNavigationMenu}
            >
              Главная страница
            </NavLink>
            <NavLink
              to={"/about"}
              className={styles.nav_link}
              onClick={closeNavigationMenu}
            >
              обо мне
            </NavLink>
            <NavLink
              to={"/programs"}
              className={styles.nav_link}
              onClick={closeNavigationMenu}
            >
              Программы тренировок
            </NavLink>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default NavBar;
