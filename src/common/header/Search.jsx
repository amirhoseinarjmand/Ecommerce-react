import { useContext } from "react";
import { pageContext } from "../../context/pageContext";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { HiOutlineSearch, HiSun } from "react-icons/hi";
import { FaShoppingBag } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";

export default function Search() {
  const { allQtyProduct, dark, setDark } = useContext(pageContext);

  window.addEventListener("scroll", function () {
    const search = this.document.querySelector(".Search");

    if (window.scrollY > 100) {
      search.classList.add("active");
      search.classList.remove("container-lg");
    } else if (this.window.scrollY <= 100) {
      search.classList.remove("active");
      search.classList.add("container-lg");
    }
  });

  return (
    <div className="Search container-lg">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <section className="search-box rounded-5">
        <input type="text" placeholder="جستجو ..." />
        <span className="search-box__icon center">
          <HiOutlineSearch size={20} style={{ color: "gray" }} />
        </span>
      </section>

      <section className="center" style={{ gap: "1rem" }}>
        <Link to="/login">
          <span className="login__person-icon rounded-circle center ">
            <BsFillPersonFill size={22} style={{ color: "#000" }} />
          </span>
        </Link>

        <section className="login center rounded-4">
          <Link to="/login">
            <span>
              <BiLogIn size={25} />
            </span>
            <span>ورود | ثبت نام</span>
          </Link>
        </section>

        <div className="shop__icon rounded-circle center">
          <Link to="/shopCart" className="center">
            <span className="badge center">{allQtyProduct}</span>

            <FaShoppingBag size={17} style={{ color: "#000" }} />
          </Link>
        </div>

        <div className="DarkMode__icon center" onClick={() => setDark(!dark)}>
          {!dark ? <RiMoonClearFill size={20} /> : <HiSun size={25} />}
        </div>
      </section>
    </div>
  );
}
