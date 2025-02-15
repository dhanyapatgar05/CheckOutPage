import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./CheckOutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkout-container">
        {/* Header Section */}
        <header className="header-container">
            <div className="header-left">
                <span className="logo-primary">Wearup.</span>
                <span className="line">|</span>
                <span className="order-overview">Order Overview</span>
            </div>
            <nav className="header-navigation">
                <div className="nav-step active-step">
                    <FaCheckCircle className="step-icon" />
                    <span className="step-label1">Information</span>
                    <span className="line">- - - - - -</span>
                </div>
                <div className="nav-step current-step">
                    <span className="step-number">2</span>
                    <span className="step-label2">Payment Details</span>
                    <span className="line">- - - - - -</span>
                </div>
                <div className="nav-step disabled-step">
                    <span className="step-number">3</span>
                    <span className="step-label3">Complete Order</span>
                </div>
            </nav>
        </header>
        {/* Checkout Content */}
        <div className="checkout-content">
            {/* Summary Order Section */}
            <div className="summary-order">
                <h2>Summary Order</h2>
                <p>Check your item and select your shipping for better experience.</p>
                <div className="product-list">
                    <div className="product-item">
                        <img src="/images/shoe1.jpg" alt="Shoe" className="product-image" />
                        <div className="product-details">
                            <div className="product-name">New Balance 57/40 Men’s Sneakers</div>
                            <div className="product-price">$129.00</div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="/images/shoe2.jpg" alt="Shoe" className="product-image" />
                        <div className="product-details">
                            <div className="product-name">New Balance 997H Men’s Sneakers</div>
                            <div className="product-price">$119.00</div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="/images/shoe3.jpg" alt="Shoe" className="product-image" />
                        <div className="product-details">
                            <div className="product-name">New Balance 57/40 Women’s Sneakers</div>
                            <div className="product-price">$149.00</div>
                        </div>
                    </div>
                </div>
                <div className="shipping-methods">
                    <h3>Available Shipping Method</h3>
                    <div className="shipping-option selected">
                        <span>FedEx Delivery</span>
                        <span>Free</span>
                    </div>
                    <div className="shipping-option">
                        <span>DHL Delivery</span>
                        <span>$12.00</span>
                    </div>
                </div>
            </div>
        </div>

      
    </div>
  );
};

export default CheckoutPage;
