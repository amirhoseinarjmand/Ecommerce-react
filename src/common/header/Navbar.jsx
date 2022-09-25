import React from "react";
import { useState } from "react";
import { BiBorderAll } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

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
    <header className="Navbar container py-2">
      <section className="right">
        {!barOpen ? (
          <div className="header__bar rounded" onClick={openBarToggle}>
            <FaBars size={20} />
          </div>
        ) : (
          <ul className="bar__menu rounded">
            <li>
              <Link to="home" onClick={() => setBarOpen(false)}>
                خانه
              </Link>
            </li>

            <li>
              <Link to="menu" onClick={() => setBarOpen(false)}>
                منو
              </Link>
            </li>

            <li>
              <Link to="footer" onClick={() => setBarOpen(false)}>
                تماس با ما
              </Link>
            </li>
          </ul>
        )}

        <ul className="navbar__menu pe-sm-3">
          <li>خانه</li>
          <li>محصولات پرفروش</li>
          <li>محصولات تازه</li>
          <li>درباره ی ما</li>
          <li>تماس با ما</li>
          <li>نمایندگی ها</li>
        </ul>
      </section>

      <section className="left rounded-2" dir="ltr">
        <span>
          <BiBorderAll size={25} />
        </span>
        <span>
          {" "}
          دسته بندی ها{" "}
          <span>
            <FaAngleDown size={13} />
          </span>
        </span>
      </section>
    </header>
  );
}
