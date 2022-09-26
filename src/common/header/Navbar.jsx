import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Header.css";
import Categories from "./Categories";

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

            <li>
              <Link to="/" onClick={() => setBarOpen(false)}>
                خانه
              </Link>
            </li>

            <li>
              <Link to="/" onClick={() => setBarOpen(false)}>
                محصولات پرفروش
              </Link>
            </li>

            <li>
              <Link to="/" onClick={() => setBarOpen(false)}>
                محصولات تازه
              </Link>
            </li>

            <li>
              <Link to="/" onClick={() => setBarOpen(false)}>
                درباره ی ما
              </Link>
            </li>

            <li>
              <Link to="/" onClick={() => setBarOpen(false)}>
                تماس با ما
              </Link>
            </li>

            <li>
              <Link to="/" onClick={() => setBarOpen(false)}>
                نمایندگی ها
              </Link>
            </li>
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
