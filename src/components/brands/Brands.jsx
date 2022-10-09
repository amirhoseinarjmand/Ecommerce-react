import React, { useState, useContext } from "react";
import Datas from "./BrandsData";
import { AiFillStar } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { pageContext } from "../../context/pageContext";
import "./Brands.css";

const getAllCategories = [
  "همه",
  ...new Set(Datas.map((data) => data.category)),
];

const Brands = () => {
  const [brandsItems, setBrandsItem] = useState(Datas);
  const [categories, setCategories] = useState(getAllCategories);
  const { addToCartItems, formatNumber } = useContext(pageContext);

  const filterItems = (category) => {
    if (category === "همه") {
      setBrandsItem(Datas);
    } else {
      const newItem = Datas.filter((data) => data.category === category);
      setBrandsItem(newItem);
    }
  };

  return (
    <>
      <div className="Brands container-lg">
        <section className="brands-right">
          {brandsItems.map((item, index) => {
            const { img, name, price } = item;

            return (
              <article
                className="brands-right__card rounded-4 shadow-sm"
                key={index}
              >
                <img src={img} alt="" />

                <span style={{ fontWeight: "bold", color: "#e78e00" }}>
                  {name}
                </span>

                <span>
                  {
                    <>
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                    </>
                  }
                </span>

                <span>{`${formatNumber(price)} تومان`}</span>

                <button
                  className="center rounded-2"
                  onClick={() => addToCartItems(item)}
                >
                  <HiPlus size={20} />
                </button>
              </article>
            );
          })}
        </section>

        <section className="brands-left rounded-2 shadow-sm">
          {categories.map((category, index) => {
            return (
              <span
                key={index}
                className="brand-left__btn center rounded-2"
                onClick={() => filterItems(category)}
              >
                {category}
              </span>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Brands;
