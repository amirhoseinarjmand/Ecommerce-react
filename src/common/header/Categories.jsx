import React from "react";
import Datas from "./CategoriesData";
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
            {Datas.map((data, index) => {
              return (
                <Link to="/" key={index}>
                  <li
                    onClick={changeCategoryMenu}
                    className="category-item rounded-2"
                  >
                    <img src={data.cateImg} alt="" style={{ width: "2rem" }} />
                    <span>{data.cateName}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Categories;
