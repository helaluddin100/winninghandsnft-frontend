import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function FilterNFT() {
  return (
    <div>
      <Header />

      <section class="filter cpy-6">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3">
              <div class="sidebar">
                <h1 class="title">
                  FILTER <span> BY</span>
                </h1>
                <div class="clear-btn">
                  <button class="custom-btn">CLEAR SELECTED</button>
                </div>
                <div class="for-sale">
                  <div class="hr"></div>
                  <input type="checkbox" id="forSale" />
                  <label for="forSale" class="for-sale">
                    For Sale
                  </label>
                  <div class="hr"></div>
                </div>

                <div class="category">
                  <div class="category-name">
                    <span>
                      {" "}
                      BACKGROUNDS <i class="fas fa-chevron-down"></i>{" "}
                    </span>
                  </div>
                  <div class="category-list">
                    <div class="category-item">
                      <input type="checkbox" id="INDIGO" />
                      <label for="INDIGO">INDIGO</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="LIME " />
                      <label for="LIME ">LIME </label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="MARIGIOD" />
                      <label for="MARIGIOD">MARIGIOD</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="CORAL RED" />
                      <label for="CORAL RED">CORAL RED</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="URANIAN BLUE" />
                      <label for="URANIAN BLUE">URANIAN BLUE</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="DIRT" />
                      <label for="DIRT">DIRT</label>
                    </div>
                  </div>
                </div>
                <div class="category">
                  <div class="category-name">
                    <span>
                      {" "}
                      BACKGROUNDS <i class="fa fa-angle-down"></i>{" "}
                    </span>
                  </div>
                  <div class="category-list">
                    <div class="category-item">
                      <input type="checkbox" id="INDIGO" />
                      <label for="INDIGO">INDIGO</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="LIME " />
                      <label for="LIME ">LIME </label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="MARIGIOD" />
                      <label for="MARIGIOD">MARIGIOD</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="CORAL RED" />
                      <label for="CORAL RED">CORAL RED</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="URANIAN BLUE" />
                      <label for="URANIAN BLUE">URANIAN BLUE</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="DIRT" />
                      <label for="DIRT">DIRT</label>
                    </div>
                  </div>
                </div>
                <div class="category">
                  <div class="category-name">
                    <span>
                      {" "}
                      BACKGROUNDS <i class="fa fa-angle-down"></i>{" "}
                    </span>
                  </div>
                  <div class="category-list">
                    <div class="category-item">
                      <input type="checkbox" id="INDIGO" />
                      <label for="INDIGO">INDIGO</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="LIME " />
                      <label for="LIME ">LIME </label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="MARIGIOD" />
                      <label for="MARIGIOD">MARIGIOD</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="CORAL RED" />
                      <label for="CORAL RED">CORAL RED</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="URANIAN BLUE" />
                      <label for="URANIAN BLUE">URANIAN BLUE</label>
                    </div>
                    <div class="category-item">
                      <input type="checkbox" id="DIRT" />
                      <label for="DIRT">DIRT</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="card-box-con">
                <div class="nft-card">
                  <div class="card-item">
                    {/* <!-- nft-number --> */}
                    {/* <!-- <div class="card-numbar">
                    <h2>01</h2>
                  </div> --> */}
                    <div class="card-img">
                      <img src="./images/allnft/nft-1.png" alt="" />
                    </div>
                    <div class="card-btn">
                      <img src="./images/filter/nft-btn-bg.png" alt="" />
                      <div class="btn-text">
                        <p>Not For Sale</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nft-card">
                  <div class="card-item">
                    <div class="card-img">
                      <img src="./images/allnft/nft-1.png" alt="" />
                    </div>
                    <div class="card-btn">
                      <img src="./images/filter/nft-btn-bg.png" alt="" />
                      <div class="btn-text">
                        <p>Not For Sale</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nft-card">
                  <div class="card-item">
                    <div class="card-img">
                      <img src="./images/allnft/nft-1.png" alt="" />
                    </div>
                    <div class="card-btn">
                      <img src="./images/filter/nft-btn-bg.png" alt="" />
                      <div class="btn-text">
                        <p>Not For Sale</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nft-card">
                  <div class="card-item">
                    <div class="card-img">
                      <img src="./images/allnft/nft-1.png" alt="" />
                    </div>
                    <div class="card-btn">
                      <img src="./images/filter/nft-btn-bg.png" alt="" />
                      <div class="btn-text">
                        <p>Not For Sale</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nft-card">
                  <div class="card-item">
                    <div class="card-img">
                      <img src="./images/allnft/nft-1.png" alt="" />
                    </div>
                    <div class="card-btn">
                      <img src="./images/filter/nft-btn-bg.png" alt="" />
                      <div class="btn-text">
                        <p>Not For Sale</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nft-card">
                  <div class="card-item">
                    <div class="card-img">
                      <img src="./images/allnft/nft-1.png" alt="" />
                    </div>
                    <div class="card-btn">
                      <img src="./images/filter/nft-btn-bg.png" alt="" />
                      <div class="btn-text">
                        <p>Not For Sale</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FilterNFT;
