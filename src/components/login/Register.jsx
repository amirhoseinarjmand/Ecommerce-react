import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  return (
    <div className="Register center">
      <Link to="/" className="register-backHome btn btn-warning">
        بازگشت به خانه
      </Link>

      <div className="register-form center">
        <span>ثبت نام</span>

        <input
          type="text"
          className="register-userName shadow-sm"
          placeholder="نام کاربری"
          ref={userNameRef}
        />

        <section className="register-password-container">
          <input
            className="register-password shadow-sm"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="رمز ورود"
          />

          <input
            className="register-password-repeat shadow-sm"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="تکرار رمز ورود"
          />

          <span
            className="register-eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEye size={20} />
            ) : (
              <AiOutlineEyeInvisible size={20} />
            )}
          </span>
        </section>

        <section className="register-form-body">
          <div className="rememberme-container center">
            <input
              type="checkbox"
              id="rememberme"
              style={{ cursor: "pointer" }}
            />
            <label
              htmlFor="rememberme"
              style={{
                cursor: "pointer",
                marginRight: "0.3rem",
                fontSize: "small",
              }}
            >
              مرا به خاطر بسپار
            </label>
          </div>

          <Link to="/login">هم اکنون حساب دارید؟</Link>
        </section>

        <div className="register-btn bg-success bg-gradient center shadow-sm">
          ثبت نام
        </div>
      </div>
    </div>
  );
};

export default Register;
