import React from "react";

export default function Footer() {
  return (
    <>
      <img
        src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/4c5c0076-6828-4909-bee8-8fb1d8f536bc._CR0%2C0%2C3000%2C600_SX1500_.jpg"
        alt="img"
      />
      <div id="footer-container">
        <div className="first-column">
          <h6>About Us</h6>
          <p>Aim</p>
          <p>Vision</p>
        </div>
        <div className="second-column">
          <h6> Contact Us</h6>
          <p>Indore</p>
          <p>Mumbai</p>
          <p>Dehli</p>
        </div>
        <div className="thirst-column">
          <h6> Social Medial</h6>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
    </>
  );
}
