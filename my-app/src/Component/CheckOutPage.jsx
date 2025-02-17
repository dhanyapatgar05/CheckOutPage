import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";


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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCau0PT-umAVFPT2TEhqPznPTJM3MTiVNsA&s" alt="Shoe" className="product-image" />
                        <div className="product-details">
                            <div className="product-name">New Balance 57/40 Men’s Sneakers - Mindful Grey</div>
                            <div className="product-price">$129.00 <span className="original-price">$189.00</span></div>
                        </div>
                        <div className="product-size">42 EU - 8.5 US</div>
                    </div>
                    <div className="product-item">
                        <img src="https://assets.ajio.com/medias/sys_master/root/20230824/RBSZ/64e65e8eafa4cf41f57316b5/-1117Wx1400H-465788704-green-MODEL.jpg" alt="Shoe" className="product-image" />
                        <div className="product-details">
                            <div className="product-name">New Balance 997H Men’s Sneakers - Grey</div>
                            <div className="product-price">$119.00 <span className="original-price">$179.00</span></div>
                        </div>
                        <div className="product-size">42.5 EU - 9 US</div>
                    </div>
                    <div className="product-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRgQqQJscUjvOFMQw1ToFLFswrNaDUmqGoA&s" alt="Shoe" className="product-image" />
                        <div className="product-details">
                            <div className="product-name">New Balance 57/40 Women’s - Oyster Pink</div>
                            <div className="product-price">$149.00 <span className="original-price">$269.00</span></div>
                        </div>
                        <div className="product-size">41.5 EU - 8 US</div>

                    </div>
                </div>
                
                <div className="shipping-methods">
                    <h3>Available Shipping Method</h3>
                    <div className="shipping-option">
                        <img src="https://grm.institute/wp-content/uploads/2021/12/Fedex-logo.png" alt="FedEx" className="shipping-logo" />
                        <div className="shipping-details">
                            <div className="shipping-name">Fedex Delivery</div>
                            <div className="shipping-time">Delivery: 2-3 days work</div>
                        </div>
                        <div className="shipping-price">
                            Free <input type="radio" name="shipping" />
                        </div>
                    </div>
                    <p>Available International Shipping:</p>
                    <div className="shipping-option">
                        <img src="https://cdn.worldvectorlogo.com/logos/dhl-3.svg" alt="DHL" className="shipping-logo" />
                        <div className="shipping-details">
                            <div className="shipping-name">DHL Delivery</div>
                            <div className="shipping-time">Delivery: 1-3 days work</div>
                        </div>
                        <div className="shipping-price">
                            $12.00 <input type="radio" name="shipping" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Details Section */}
            
            <div className="payment-details">
                <h2>Payment Details</h2>
                <p>Complete your purchase item by providing your payment details order.</p>

                {/* Email Address */}
                <div className="input-group1">
                    <label>Email Address</label>
                    <div className="input-icon1">
                        <input type="email" placeholder="barlyvallendito@gmail.com" />
                        <FaCheckCircle className="icon" />
                    </div>
                </div>
                <div className="input-group2">
                    <label>Card Detail</label>
                    <div className="input-row">
                        {/* Card Number & Expiry Box */}
                        <div className="input-box">
                            <FaCreditCard className="icon" />
                            <input type="text" placeholder="Card Number" className="card-number" />
                            <input type="text" placeholder="MM / YY" className="expiry" />
                        </div>
        
                        {/* CVV Box */}
                        <div className="input-box cvv-box">
                            <input type="text" placeholder="CVC" className="cvc" />
                        </div>
                    </div>
                </div>
                <div className="input-group3">
                    <label>Card Holder</label>
                    <div className="input-icon2">
                        <LuUserRound className="icon2" />
                        <input type="text" placeholder="Barly Vellandi" />
                    </div>
                    
                </div>

                
                
                
            </div>
                
        </div>
    </div>
    
  );
};

export default CheckoutPage;
