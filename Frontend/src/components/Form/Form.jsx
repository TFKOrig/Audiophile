import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    zip: "",
    country: "",
    paymentmethod: "",
    emoneynumber: "",
    email: "",
    city: "",
    emoney: "",
    cashondelivery: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form)
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", form);
  // };

  const addBilling = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    axios.defaults.withCredentials = true;
    try {
      // console.log(form)
      await axios.post(
        "https://audiophileapi-tfkorigs-projects.vercel.app",
        form
      );
      setForm({
        name: "",
        phone: "",
        address: "",
        zip: "",
        country: "",
        paymentmethod: "",
        emoneynumber: "",
        email: "",
        city: "",
        emoney: "",
        cashondelivery: "",
      });

      // Display alert when a new exercise is added
      window.alert("Order Confirmed!");
    } catch (error) {
      console.error("Try Again Later: ", error);
    }
  };

  return (
    <>
      <div className="form-container form-cont">
        <Link to="/" className="btn btn-goBack">
          Go Back
        </Link>
        <form onSubmit={addBilling}>
          <h2>Billing Details</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <h2>Shipping Info</h2>
          <label htmlFor="address">Your Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
          <label htmlFor="zip">ZIP Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            required
          />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          />
          <h2>Payment Details</h2>
          <div className="box1">
            <label htmlFor="paymentmethod">Payment Method</label>
            <input
              type="text"
              id="paymentmethod"
              name="paymentmethod"
              value={form.paymentmethod}
              onChange={handleChange}
              required
            />
            <label htmlFor="emoneynumber">e-Money Number</label>
            <input
              type="text"
              id="emoneynumber"
              name="emoneynumber"
              value={form.emoneynumber}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="box2">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
            <label htmlFor="emoney">e-Money</label>
            <input
              type="text"
              id="emoney"
              name="emoney"
              value={form.emoney}
              onChange={handleChange}
              required
            />
            <label htmlFor="cashondelivery">Cash on Delivery</label>
            <input
              type="text"
              id="cashondelivery"
              name="cashondelivery"
              value={form.cashondelivery}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn form-btnn">
            Confirm Order
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
