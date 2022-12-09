import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" }, { shouldUseNativeValidation: true });

  const onSubmit = async (item) => {
    const checkUser = await props.client.getUserByEmail(item.email);
    const res = await props.client.login(item.email, item.password);
    // console.log(res.data);
    props.loggedIn(res.data.token, res.data.role, res.data.userid);
    navigate("/dashboard");
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form-box">
          <div className="input-wrap">
            <label>Email </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
            />
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>
          <div className="input-wrap">
            <label>Password </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 2,
                  message:
                    "Password is too short, it shoud be at least 2 characters",
                },
              })}
            />
<<<<<<< 82-create-pagination-for-the-bookings
=======

>>>>>>> main
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
          <div>
<<<<<<< 82-create-pagination-for-the-bookings
            <Button variant="custom" className="login-button1" type="submit">
=======
            <Button variant="custom" className="login-button" type="submit">
>>>>>>> main
              Login
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
