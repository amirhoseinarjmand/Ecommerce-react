import React from "react";
import { useState } from "react";
import { BiBorderAll } from "react-icons/bi";
import { Link } from "react-router-dom";

const Categories = () => {
  const [openCategoryMenu, setOpenCategoryMneu] = useState(false);

  const changeCategoryMenu = () => {
    setOpenCategoryMneu((prev) => !prev);
  };

  return (
    <>
      <div className="Categories rounded-2">
        <button className="btn dropdown-toggle" onClick={changeCategoryMenu}>
          <span style={{ marginRight: "0.5rem" }}>
            <BiBorderAll size={25} />
          </span>
          دسته بندی ها
        </button>

        {openCategoryMenu ? (
          <ul className="categoryMenu rounded-2 shadow-sm" dir="rtl">
            <Link to="/">
              <li onClick={changeCategoryMenu} className="rounded-2">
                سلام
              </li>
            </Link>

            <Link to="/">
              <li onClick={changeCategoryMenu} className="rounded-2">
                سلام 2
              </li>
            </Link>

            <Link to="/">
              <li onClick={changeCategoryMenu} className="rounded-2">
                سلام 3
              </li>
            </Link>

            <Link to="/">
              <li onClick={changeCategoryMenu} className="rounded-2">
                سلام 4
              </li>
            </Link>
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Categories;
