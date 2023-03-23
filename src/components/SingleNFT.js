import React from "react";

import Header from "./Header";
import Footer from "./Footer";
function SingleNFT() {
  return (
    <div>
      <Header />

      <section class="winning-hand cpy-8">
        <div class="container">
          <div class="winning-wrapper">
            <div class="winning-left-site">
              <img src="images/single-nft/sigle-nft.png" alt="" />
            </div>
            <div class="winning-right-site">
              <h1 class="title">
                THE WINNING <br />
                <span>HANDS NFT</span>
              </h1>
              <div class="fields">
                <div class="field">
                  <span>status:</span>
                  <span>not for sale</span>
                </div>
                <div class="field">
                  <span>best bid:</span>
                  <span>no bid</span>
                </div>
                <div class="field">
                  <span>bidder:</span>
                  <span></span>
                </div>
                <div class="field">
                  <span>owner:</span>
                  <span class="owner-name">01x2......567c</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="attributes cpb-6">
        <div class="container">
          <div class="attribute-box">
            <div class="section-title">
              <h2 class="title">ATTRIBUTES</h2>
            </div>
            <div class="attribute-list">
              <div class="attribute-item">
                <span>rarity rank:</span>
                <span>
                  1 of 7% <small>with lime</small>
                </span>
              </div>
              <div class="attribute-item">
                <span>babckground:</span>
                <span>
                  1 of 13% <small>red wiggler</small>
                </span>
              </div>
              <div class="attribute-item">
                <span>worm type:</span>
                <span>
                  1 of 75% <small>intact</small>
                </span>
              </div>
              <div class="attribute-item">
                <span>ripped:</span>
                <span>
                  1 of 4% with <small>monacle</small>
                </span>
              </div>
              <div class="attribute-item">
                <span>eyewear:</span>
                <span>
                  1 of 24% <small>silver chain with cross</small>
                </span>
              </div>
              <div class="attribute-item">
                <span>neck:</span>
                <span>
                  1 of 24% <small>grey baseball backwards</small>
                </span>
              </div>
              <div class="attribute-item">
                <span>hat:</span>
                <span>
                  1 of 90% <small>none</small>
                </span>
              </div>
              <div class="attribute-item">
                <span>body:</span>
                <span>
                  1 of 80% <small>none</small>
                </span>
              </div>
              <div class="attribute-item">
                <span>earning:</span>
                <span>
                  1 of 80% <small>none</small>
                </span>
              </div>
              <div class="attribute-item">
                <span>backpack:</span>
                <span>
                  1 of 80% <small>none</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SingleNFT;
