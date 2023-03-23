import React from "react";

import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Header from "./Header";
import Footer from "./Footer";
// import { useEffect, useState } from "react";
import { useState } from "react";

function Mint() {
  const [value, setValue] = useState(1);

  return (
    <div>
      <Header />
      <div class="welcome_slider mint-marques">
        <div className="marques-section">
          {/* =====================marque=================== */}
          <div className="animate-m">
            <div className="marque-inner">
              <div className="marque-A">
                <Marquee>
                  MINT WINNING HANDS MINT WINNING HANDS MINT WINNING HANDS MINT
                  WINNING HANDS MINT WINNING HANDS MINT WINNING HANDS MINT
                  WINNING HANDS MINT WINNING HANDS MINT WINNING HANDS MINT
                  WINNING HANDS MINT WINNING HANDS MINT WINNING HANDS
                </Marquee>
              </div>

              <div className="marque-B">
                <Marquee direction="right">
                  MINT WINNING HANDS MINT WINNING HANDS MINT WINNING HANDS MINT
                  WINNING HANDS MINT WINNING HANDS MINT WINNING HANDS MINT
                  WINNING HANDS MINT WINNING HANDS MINT WINNING HANDS MINT
                  WINNING HANDS MINT WINNING HANDS MINT WINNING HANDS
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mint cpy-8">
        <div className="container">
          <div className="mint-wrapper">
            <div className="mint-content">
              <h1 className="title">MINT YOUR WINNING HANDS</h1>
              <p>
                TOTAL MINTED: <span>00 / 11,111</span>
              </p>
              <p>0.05 ETH + GAS FEE</p>
              <p>MAX 10 WINNING HANDS PER TRANSACTION</p>
            </div>
            <div className="mint-price">
              <div className="price-img">
                <img src="assets/img/mint/price-bg.png" alt="" />
              </div>
              <div className="price-content">
                <div className="price-left">
                  <img src="assets/img/mint/price-hand.png" alt="" />
                </div>

                <div className="price-right">
                  <h4>MINT PRICE</h4>
                  <h4>0.25 ETH</h4>
                </div>
              </div>
            </div>
            <div className="mint-count">
              <div className="mint-count-left">
                <button
                  className="mint-incrase"
                  onClick={() => {
                    if (value > 1) {
                      setValue(value - 1);
                    }
                  }}
                >
                  <img src="assets/img/mint/incarse.png" alt="" />
                </button>
                <div className="mint-count-item">
                  <div className="mint-count-item-img">
                    <img src="assets/img/mint/mint-count-item.png" alt="" />
                  </div>
                  <p>{value}</p>
                </div>

                <button
                  className="mint-plus"
                  onClick={() => {
                    if (value < 10) {
                      setValue(value + 1);
                    }
                  }}
                >
                  <img src="assets/img/mint/plas.png" alt="" />
                </button>
              </div>
              <div className="mint-count-right mint-count-item">
                <img src="assets/img/mint/max-img.png" alt="" />
                <p>10 MAX</p>
              </div>
            </div>
            <button className="mint-now">
              <img src="assets/img/mint/mint-now.png" alt="" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Mint;
