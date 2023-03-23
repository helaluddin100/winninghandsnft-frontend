import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Marketplace() {
  return (
    <div>
      <Header />

      <section class="overall-states cpy-8">
        <div class="container">
          <div class="overall-states-wrapper">
            <h1 class="title">OVERALL STATES</h1>
            <div class="overall-states-content mt-3">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="state-content">
                    <p>Floor price</p>
                    <p>17,000 mtv (84$)</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="state-content">
                    <p>
                      <span>worm for sale</span>
                    </p>
                    <p>89</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="state-content">
                    <p>number of owners</p>
                    <p>396</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="overall-states-content mt-3">
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="state-content">
                    <p>sales total (24 hours)</p>
                    <p>225,996 mtv</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="state-content">
                    <p>sales today (7 days)</p>
                    <p>529,046 mtv</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="state-content">
                    <p>sales total (lifetimes)</p>
                    <p>22,754,475 mtv </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Overall States end ========== -->

    <!--  ========== top sales start  --> */}
      <section class="top-sale">
        <div class="container">
          <div class="top-sale-wrapper">
            <h1 class="title">TOP SALES</h1>
            <div class="top-sale-card-con cpy-5">
              <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                  <div class="top-sale-card">
                    <div class="top-sale-id">
                      <div class="top-sale-id-img">
                        <img src="images/status/top-sale-id.png" alt="" />
                      </div>
                      <p>#2506</p>
                    </div>
                    <div class="top-sale-nft">
                      <img src="images/status/top-sale-img.png" alt="" />
                    </div>
                    <div class="top-sale-price">
                      <div class="top-sale-price-img">
                        <img src="images/status/top-sale-price.png" alt="" />
                      </div>
                      <p>350,000 ETH </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="top-sale-card">
                    <div class="top-sale-id">
                      <div class="top-sale-id-img">
                        <img src="images/status/top-sale-id.png" alt="" />
                      </div>
                      <p>#2506</p>
                    </div>
                    <div class="top-sale-nft">
                      <img src="images/status/top-sale-img.png" alt="" />
                    </div>
                    <div class="top-sale-price">
                      <div class="top-sale-price-img">
                        <img src="images/status/top-sale-price.png" alt="" />
                      </div>
                      <p>350,000 ETH </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="top-sale-card">
                    <div class="top-sale-id">
                      <div class="top-sale-id-img">
                        <img src="images/status/top-sale-id.png" alt="" />
                      </div>
                      <p>#2506</p>
                    </div>
                    <div class="top-sale-nft">
                      <img src="images/status/top-sale-img.png" alt="" />
                    </div>
                    <div class="top-sale-price">
                      <div class="top-sale-price-img">
                        <img src="images/status/top-sale-price.png" alt="" />
                      </div>
                      <p>350,000 ETH</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="top-sale-card">
                    <div class="top-sale-id">
                      <div class="top-sale-id-img">
                        <img src="images/status/top-sale-id.png" alt="" />
                      </div>
                      <p>#2506</p>
                    </div>
                    <div class="top-sale-nft">
                      <img src="images/status/top-sale-img.png" alt="" />
                    </div>
                    <div class="top-sale-price">
                      <div class="top-sale-price-img">
                        <img src="images/status/top-sale-price.png" alt="" />
                      </div>
                      <p>350,000 ETH </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="top-sale-card">
                    <div class="top-sale-id">
                      <div class="top-sale-id-img">
                        <img src="images/status/top-sale-id.png" alt="" />
                      </div>
                      <p>#2506</p>
                    </div>
                    <div class="top-sale-nft">
                      <img src="images/status/top-sale-img.png" alt="" />
                    </div>
                    <div class="top-sale-price">
                      <div class="top-sale-price-img">
                        <img src="images/status/top-sale-price.png" alt="" />
                      </div>
                      <p>350,000 ETH </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="top-sale-card">
                    <div class="top-sale-id">
                      <div class="top-sale-id-img">
                        <img src="images/status/top-sale-id.png" alt="" />
                      </div>
                      <p>#2506</p>
                    </div>
                    <div class="top-sale-nft">
                      <img src="images/status/top-sale-img.png" alt="" />
                    </div>
                    <div class="top-sale-price">
                      <div class="top-sale-price-img">
                        <img src="images/status/top-sale-price.png" alt="" />
                      </div>
                      <p>350,000 ETH </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="top-sale-card">
                    <div class="top-sale-id">
                      <div class="top-sale-id-img">
                        <img src="images/status/top-sale-id.png" alt="" />
                      </div>
                      <p>#2506</p>
                    </div>
                    <div class="top-sale-nft">
                      <img src="images/status/top-sale-img.png" alt="" />
                    </div>
                    <div class="top-sale-price">
                      <div class="top-sale-price-img">
                        <img src="images/status/top-sale-price.png" alt="" />
                      </div>
                      <p>350,000 ETH </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="top-sale-card">
                    <div class="top-sale-id">
                      <div class="top-sale-id-img">
                        <img src="images/status/top-sale-id.png" alt="" />
                      </div>
                      <p>#2506</p>
                    </div>
                    <div class="top-sale-nft">
                      <img src="images/status/top-sale-img.png" alt="" />
                    </div>
                    <div class="top-sale-price">
                      <div class="top-sale-price-img">
                        <img src="images/status/top-sale-price.png" alt="" />
                      </div>
                      <p>350,000 ETH </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  ========== top sales end  -->
    <!-- =========== Recent Sales start --> */}
      <section class="recent-sale mt-3 cpb-7">
        <div class="container">
          <div class="recent-sale-wrapper">
            <h1 class="title">RECENT SALES</h1>
            <div class="recent-table-con mt-3">
              <div class="recent-table-item">
                <div class="recent-table-content">
                  <h2>nft</h2>
                  <p>Cumque!</p>
                  <p>Cumque!</p>
                  <p>Fugiat.</p>
                  <p>Corrupti.</p>
                  <p>Ex?</p>
                </div>
                <div class="recent-table-content">
                  <h2>from</h2>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                </div>
                <div class="recent-table-content">
                  <h2>to</h2>
                  <p>Lorem.</p>
                  <p>Cumque!</p>
                  <p>Fugiat.</p>
                  <p>Corrupti.</p>
                  <p>Ex?</p>
                </div>
                <div class="recent-table-content">
                  <h2>amount</h2>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                  <p>
                    <span>0x32.....95b5</span>
                  </p>
                </div>
                <div class="recent-table-content">
                  <h2>time (utc)</h2>
                  <p>Lorem.</p>
                  <p>Cumque!</p>
                  <p>Fugiat.</p>
                  <p>Corrupti.</p>
                  <p>Ex?</p>
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

export default Marketplace;
