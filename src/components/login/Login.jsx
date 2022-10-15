import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  return (
    <div className="Login center">
      <div className="login-form center">
        <span>ورود</span>

        <input
          type="text"
          className="login-userName shadow-sm"
          placeholder="نام کاربری"
          ref={userNameRef}
        />

        <section className="login-password-container">
          <input
            className="login-password shadow-sm"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="رمز ورود"
          />

          <span
            className="login-eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEye size={20} />
            ) : (
              <AiOutlineEyeInvisible size={20} />
            )}
          </span>
        </section>

        <section className="login-form-body">
          <div className="rememberme-container center">
            <input
              type="checkbox"
              id="rememberme"
              style={{ cursor: "pointer" }}
            />
            <label
              htmlFor="rememberme"
              style={{ cursor: "pointer", marginRight: "0.3rem" }}
            >
              مرا به خاطر بسپار
            </label>
          </div>

          <Link to="/Register">حساب ندارید؟</Link>
        </section>

        <div className="login-btn bg-success bg-gradient center shadow-sm">
          ورود
        </div>
      </div>
    </div>
  );
};

export default Login;
