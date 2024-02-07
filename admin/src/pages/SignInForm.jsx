import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <>
      <div
        className="container mt-5"
        style={{
          border: "2px solid #d3d3d34a",
          borderRadius: "1vw",
          padding: "5vh 10vw",
        }}
      >
        <form>
          <div className="form-group">
            <h2 className="container" style={{ textAlign: "center" }}>
              Sign In
            </h2>
            <label HtmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label HtmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <Link to="/react-admin-dashboard/dashboard">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "2vh" }}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
