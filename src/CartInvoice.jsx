import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./CartInvoice.css";
import axios from "axios";

const CartInvoice = () => {
  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post("http://localhost:9090/create-order", {
        amount: totalCost, // Amount in INR
        currency: "INR",
        receipt: "receipt#1",
      });

      const { id: order_id, amount, currency } = orderResponse.data;

      const options = {
        key: "rzp_live_0CAWJFt3q8oaUX",
        amount,
        currency,
        name: "Your Company",
        description: "Test Transaction",
        order_id,
        handler: async (response) => {
          const verifyResponse = await axios.post(
            "http://localhost:9090/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyResponse.status === 200) {
            alert("Payment Successful!");
          } else {
            alert("Payment Verification Failed!");
          }
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment Failed:", error);
    }
  };




  const { cart, totalCost } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-invoice-empty">
        <h2>Your Cart is Empty</h2>
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="cart-invoice-container">
      <h1>Invoice</h1>
      <table className="cart-invoice-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.pid}>
              <td>{item.pname}</td>
              <td>{item.qty}</td>
              <td>${item.pcost.toFixed(2)}</td>
              <td>${(item.qty * item.pcost).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="cart-total-label">Total Amount:</td>
            <td className="cart-total-value">${totalCost.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      <button onClick={()=>navigate("/userdashboard")} className="back-btn">
        Back to Dashboard
      </button>
      <button onClick={handlePayment} className="back-btn">
        Pay Now
      </button>
    </div>
  );
};

export default CartInvoice;