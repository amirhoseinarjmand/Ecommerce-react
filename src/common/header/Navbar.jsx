import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import "./Header.css";
import "./HeaderDarkMode.css";

export default function Navbar() {
  const [barOpen, setBarOpen] = useState(false);

  const openBarToggle = () => {
    if (!barOpen) {
      setBarOpen(true);
    } else if (barOpen) {
      setBarOpen(false);
    }
  };

  return (
    <header className="Navbar container-lg">
      <section className="right">
        {!barOpen ? (
          <div className="header__bar rounded" onClick={openBarToggle}>
            <FaBars size={20} />
          </div>
        ) : (
          <ul className="bar__menu rounded">
            <span
              className="close-bar__menu rounded-circle"
              onClick={() => setBarOpen(false)}
            >
              <IoIosClose style={{ color: "#fff" }} size={25} />
            </span>

            <Link to="/" onClick={() => setBarOpen(false)}>
              <li>خانه</li>
            </Link>

            <Link to="/" onClick={() => setBarOpen(false)}>
              <li>محصولات پرفروش</li>
            </Link>

            <Link to="/" onClick={() => setBarOpen(false)}>
              <li>محصولات تازه</li>
            </Link>

            <Link to="/" onClick={() => setBarOpen(false)}>
              <li>درباره ی ما</li>
            </Link>

            <Link to="/" onClick={() => setBarOpen(false)}>
              <li>تماس با ما</li>
            </Link>

            <Link to="/" onClick={() => setBarOpen(false)}>
              <li>نمایندگی ها</li>
            </Link>
          </ul>
        )}

        <ul className="navbar__menu">
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/">محصولات پرفروش</Link>
          </li>
          <li>
            <Link to="/">محصولات تازه</Link>
          </li>
          <li>
            <Link to="/">درباره ی ما</Link>
          </li>
          <li>
            <Link to="/">تماس با ما</Link>
          </li>
          <li>
            <Link to="/">نمایندگی ها</Link>
          </li>
        </ul>
      </section>

      <section className="left" dir="ltr">
        <Categories />
      </section>
    </header>
  );
}
