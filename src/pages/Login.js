import React, { useEffect, useState } from "react";
import "./styles/Register.css";
import { auth } from "../api";
import ApiService from "../services/api.service";
import toast from "react-hot-toast";
import { TokenService } from "../services/storage.service";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { store } from "../store";
import { update } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Login() {
  const temp = {
    email: "",
    password: "",
    user_type: "Admin",
  };
  const user = useSelector((state) => state.auth);
  const [values, setValues] = useState(temp);
  const history = useHistory();

  useEffect(() => {
    if (user.login) {
      history.push("/dashboard");
    }
  }, [history, user]);

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    await ApiService.post(auth.POST, values)
      .then((response) => {
        if (response.status === 200) {
          TokenService.saveToken(response.data.token);
          TokenService.saveData(response.data);
          store.dispatch(update(response.data));
          history.push("/dashboard");
          toast.success("Successfully logged in!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="login-signup">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="login-area">
              <div className="header-area">
                <h4 className="title">Admin</h4>
                <p className="text">please login in below</p>
              </div>
              <div className="login-form">
                <div
                  className="alert alert-info validation"
                  style={{ display: "none" }}
                >
                  <p className="text-left" />
                </div>
                <div
                  className="alert alert-success validation"
                  style={{ display: "none" }}
                >
                  <button type="button" className="close alert-close">
                    <span>×</span>
                  </button>
                  <p className="text-left" />
                </div>
                <div
                  className="alert alert-danger validation"
                  style={{ display: "none" }}
                >
                  <button type="button" className="close alert-close">
                    <span>×</span>
                  </button>
                  <p className="text-left" />
                </div>
                <form id="loginform" onSubmit={onSubmit} method="POST">
                  <div className="form-input">
                    <input
                      type="email"
                      name="email"
                      className="User Name"
                      placeholder="Type Email Address"
                      onChange={onChangeHandler}
                      required
                      autoFocus
                    />
                    <i className="icofont-user-alt-5" />
                  </div>
                  <div className="form-input">
                    <input
                      type="password"
                      name="password"
                      className="Password"
                      placeholder="Type Password"
                      onChange={onChangeHandler}
                    />
                    <i className="icofont-ui-password" />
                  </div>
                  <div className="form-forgot-pass">
                    <div className="left">
                      <input type="checkbox" name="remember" id="rp" />
                      <label htmlFor="rp">Remember Password</label>
                    </div>
                    <div className="right">
                      <Link to="/admin/forgot">Forgot Password?</Link>
                    </div>
                  </div>
                  <input
                    id="authdata"
                    type="hidden"
                    defaultValue="Authenticating..."
                  />
                  <button type="submit" className="submit-btn">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
