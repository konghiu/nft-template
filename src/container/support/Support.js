import React from "react";
import "./support.css";

const Support = () => {
     return (
          <section id="support">
               <div className="support__contactInfo">
                    <h2 className="support__contactInfo-title">Contact Info</h2>
                    <p className="support__contactInfo-content">
                         Lorem ipsum dolor sit amet, consectetur. In non dui
                         aliquet, pellentesque
                    </p>
                    <div className="support__contactInfo-info">
                         <p>info@yourmail.com</p>
                         <p>0123456789</p>
                         <p>Open from Mo. Till Fri.</p>
                         <p>09.00 - 17.00</p>
                    </div>
                    <div className="support__contactInfo-icons">
                         <h3>Follow us on</h3>
                         <div>
                              <i className="fa-brands fa-facebook-f"></i>
                              <i className="fa-brands fa-twitter"></i>
                              <i className="fa-brands fa-instagram"></i>
                              <i className="fa-brands fa-youtube"></i>
                         </div>
                    </div>
               </div>
               <div className="support__getInTouch">
                    <h2 className="support__getInTouch-title">Get in touch</h2>
                    <p className="support__getInTouch-content">
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit. In non dui aliquet, pellentesque tellus ac,
                         faucibus ex.
                    </p>
                    <form className="support__getInTouch-form">
                         <div>
                              <label id="your name">Your Name</label>
                              <input
                                   name="your name"
                                   type="text"
                                   placeholder="Enter your name"
                              />
                         </div>
                         <div>
                              <label id="your email">Your Email</label>
                              <input
                                   name="your email"
                                   type="text"
                                   placeholder="Enter your email"
                              />
                         </div>
                         <div>
                              <label>Your Message</label>
                              <textarea placeholder="Type your message" />
                         </div>
                    </form>
                    <button>Send Message</button>
               </div>
          </section>
     );
};

export default Support;
