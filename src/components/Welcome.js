import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

function Welcome() {
  return (
    <div>
      <div class="welcome">
        <div class="welcome_container container">
          <div class="welcome_container_top_icons">
            <a href="">
              <img src="assets/img/Vector.png" alt="" />
            </a>
            <a href="https://twitter.com/winninghandsnft/status/1614337351483883520?s=12&t=kULy9M1hC68w4SMjRT5cVQ" target="_blank">
              <img src="assets/img/Vector2.png" alt="" />
            </a>
            <a href="">
              {" "}
              <img src="assets/img/Subtract.png" alt="" />
            </a>
            <a href="https://www.instagram.com/winninghandsnft/" target="_blank">
              <img src="assets/img/Intersect.png" alt="" />
            </a>
          </div>
          <div class="row">
            <div className="col-md-6">
              <div class="welcome_container_title_left">
                <img
                  src="assets/img/WINNING HANDS WHITE BACKGROUND 2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-content-wrapper">
                <div class="welcome_container_title_right">
                  <h1>WELCOME TO WINNING HANDS</h1>
                  <Link to="/home">
                    <button>
                      <img src="assets/img/btn.png" alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="welcome_slider">
          <div className="marques-section">
            {/* =====================marque=================== */}
            <div className="animate-m">
              <div className="marque-inner">
                <div className="marque-A">
                  <Marquee>
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                  </Marquee>
                </div>

                <div className="marque-B">
                  <Marquee direction="right">
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
