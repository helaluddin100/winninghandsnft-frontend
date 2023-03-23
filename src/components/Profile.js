import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Profile() {
  return (
    <div>
      <Header />

      <section class="nft-profile">
        <div class="black-box"></div>
        <div class="container">
          <div class="profile-con mt-8">
            <div class="profile-img">
              <img src="images/team/profile-img.png" alt="" />
            </div>
            <div class="profile-title">
              <h1 class="title">BASKET BALL</h1>
              <span>
                Created by <a href="">@BASKETBALL NFT</a>
              </span>
            </div>
            <div class="profile-nft-tiem">
              <div class="nft-item">
                <div class="box-item">
                  <div class="box-img">
                    <img src="images/team/box-1.png" alt="" />
                  </div>
                  <div class="eth-itm">
                    <span>2.55</span>
                  </div>
                </div>
                <p class="dis mt-3">items</p>
              </div>
              <div class="nft-item">
                <div class="box-item">
                  <div class="box-img">
                    <img src="images/team/box-2.png" alt="" />
                  </div>
                  <div class="eth-itm">
                    <span>2.55</span>
                  </div>
                </div>
                <p class="dis mt-3">Owners</p>
              </div>
              <div class="nft-item">
                <div class="box-item">
                  <div class="box-img">
                    <img src="images/team/box-3.png" alt="" />
                  </div>
                  <div class="eth-itm">
                    <img src="images/team/Ethereum-icon.png" alt="" />
                    <span>2.55</span>
                  </div>
                </div>
                <p class="dis mt-3">Floor Price</p>
              </div>
              <div class="nft-item">
                <div class="box-item">
                  <div class="box-img">
                    <img src="images/team/box-4.png" alt="" />
                  </div>
                  <div class="eth-itm">
                    <img src="images/team/Ethereum-icon.png" alt="" />
                    <span>17.4k</span>
                  </div>
                </div>
                <p class="dis mt-3">Volume Traded</p>
              </div>
            </div>
            <p class="dis">
              Unique, fully 3D and built to unite the design multiverse.
              Designed and styled by Digimental.
            </p>
            <div class="nft-social-link">
              <div class="social-links">
                <div class="social-img">
                  <img src="images/team/love.png" alt="" />
                </div>
                <div class="social-icon">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5523 6.24688C19.7923 3.33791 24.7992 3.43446 27.9206 6.56136C31.0406 9.68964 31.1482 14.6717 28.2461 17.9214L16.5495 29.6345L4.85575 17.9214C1.95368 14.6717 2.06265 9.68136 5.18127 6.56136C8.30541 3.4386 13.3026 3.33377 16.5523 6.24688ZM25.9675 8.51033C23.8985 6.4386 20.5606 6.35446 18.3951 8.29929L16.5537 9.9517L14.7109 8.30067C12.5385 6.35308 9.20748 6.4386 7.13299 8.51308C5.07782 10.5683 4.97437 13.8579 6.86817 16.0317L16.5509 25.7296L26.2337 16.0331C28.1289 13.8579 28.0254 10.5724 25.9675 8.51033Z"
                      fill="#141213"
                    />
                  </svg>
                </div>
              </div>
              <div class="social-links">
                <div class="social-img">
                  <img src="images/team/share.png" alt="" />
                </div>
                <div class="social-icon">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7261 23.822L11.6778 19.9779C11.0012 20.6495 10.141 21.1057 9.2055 21.2891C8.27002 21.4725 7.30118 21.3748 6.42113 21.0084C5.54108 20.6419 4.78922 20.0231 4.26034 19.23C3.73145 18.4369 3.44922 17.5049 3.44922 16.5517C3.44922 15.5984 3.73145 14.6664 4.26034 13.8733C4.78922 13.0802 5.54108 12.4614 6.42113 12.095C7.30118 11.7285 8.27002 11.6309 9.2055 11.8142C10.141 11.9976 11.0012 12.4539 11.6778 13.1255L18.7261 9.28132C18.4843 8.14716 18.6589 6.96388 19.2179 5.94787C19.7769 4.93186 20.6829 4.15102 21.7703 3.74812C22.8577 3.34523 24.0538 3.34721 25.1399 3.75371C26.2259 4.16021 27.1294 4.94406 27.685 5.96192C28.2406 6.97978 28.4113 8.16363 28.1658 9.29698C27.9203 10.4303 27.275 11.4374 26.348 12.1341C25.421 12.8309 24.2742 13.1706 23.1173 13.0912C21.9603 13.0119 20.8707 12.5188 20.0474 11.702L12.9992 15.5461C13.1398 16.2091 13.1398 16.8942 12.9992 17.5572L20.0474 21.4013C20.8707 20.5846 21.9603 20.0914 23.1173 20.0121C24.2742 19.9327 25.421 20.2725 26.348 20.9692C27.275 21.6659 27.9203 22.673 28.1658 23.8063C28.4113 24.9397 28.2406 26.1235 27.685 27.1414C27.1294 28.1593 26.2259 28.9431 25.1399 29.3496C24.0538 29.7561 22.8577 29.7581 21.7703 29.3552C20.6829 28.9523 19.7769 28.1715 19.2179 27.1555C18.6589 26.1394 18.4843 24.9562 18.7261 23.822Z"
                      fill="#141213"
                    />
                  </svg>
                </div>
              </div>
              <div class="social-links">
                <div class="social-img">
                  <img src="images/team/bar.png" alt="" />
                </div>
                <div class="social-icon">
                  <svg
                    width="34"
                    height="9"
                    viewBox="0 0 34 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="4.13793"
                      cy="4.55175"
                      r="4.13793"
                      fill="#141213"
                    />
                    <circle
                      cx="16.552"
                      cy="4.55175"
                      r="4.13793"
                      fill="#141213"
                    />
                    <circle
                      cx="28.9651"
                      cy="4.55175"
                      r="4.13793"
                      fill="#141213"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="nft-all-box cpy-8">
            <div class="nft-box-items mt-3">
              {/* <!-- <div class="nft-item-bg-img">
                <img src="images/team/nft-item-img.png" alt="">
            </div> --> */}
              <div class="time-con">
                <div class="nft-time-img">
                  <img src="images/team/time-img.png" alt="" />
                </div>
                <div class="nfts-box">
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div class="nft-imges">
                <img src="images/team/profile-nft-1.png" alt="" />
              </div>
              <div class="nft-box-title">
                <h3>
                  ‘’3D Space Rocket With <br />
                  Smoke Premium’’
                </h3>
              </div>
              <div class="nft-id-name">
                <div class="nft-id-img">
                  <img src="images/team/profile-img.png" alt="" />
                </div>
                <div class="nft-names">
                  <span>Daniel M. Bivens</span>
                  <p>Creator</p>
                </div>
              </div>
              <div class="nft-current-bid">
                <p>Current Bid</p>
                <h2>
                  5.23 ETH <span>= $32.420</span>
                </h2>
              </div>
            </div>
            <div class="nft-box-items mt-3">
              {/* <!-- <div class="nft-item-bg-img">
                <img src="images/team/nft-item-img.png" alt="">
            </div> --> */}
              <div class="time-con">
                <div class="nft-time-img">
                  <img src="images/team/time-img.png" alt="" />
                </div>
                <div class="nfts-box">
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div class="nft-imges">
                <img src="images/team/profile-nft-1.png" alt="" />
              </div>
              <div class="nft-box-title">
                <h3>
                  ‘’3D Space Rocket With <br />
                  Smoke Premium’’
                </h3>
              </div>
              <div class="nft-id-name">
                <div class="nft-id-img">
                  <img src="images/team/profile-img.png" alt="" />
                </div>
                <div class="nft-names">
                  <span>Daniel M. Bivens</span>
                  <p>Creator</p>
                </div>
              </div>
              <div class="nft-current-bid">
                <p>Current Bid</p>
                <h2>
                  5.23 ETH <span>= $32.420</span>
                </h2>
              </div>
            </div>
            <div class="nft-box-items mt-3">
              {/* <!-- <div class="nft-item-bg-img">
                <img src="images/team/nft-item-img.png" alt="">
            </div> --> */}
              <div class="time-con">
                <div class="nft-time-img">
                  <img src="images/team/time-img.png" alt="" />
                </div>
                <div class="nfts-box">
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div class="nft-imges">
                <img src="images/team/profile-nft-1.png" alt="" />
              </div>
              <div class="nft-box-title">
                <h3>
                  ‘’3D Space Rocket With <br />
                  Smoke Premium’’
                </h3>
              </div>
              <div class="nft-id-name">
                <div class="nft-id-img">
                  <img src="images/team/profile-img.png" alt="" />
                </div>
                <div class="nft-names">
                  <span>Daniel M. Bivens</span>
                  <p>Creator</p>
                </div>
              </div>
              <div class="nft-current-bid">
                <p>Current Bid</p>
                <h2>
                  5.23 ETH <span>= $32.420</span>
                </h2>
              </div>
            </div>
            <div class="nft-box-items mt-3">
              {/* <!-- <div class="nft-item-bg-img">
                <img src="images/team/nft-item-img.png" alt="">
            </div> --> */}
              <div class="time-con">
                <div class="nft-time-img">
                  <img src="images/team/time-img.png" alt="" />
                </div>
                <div class="nfts-box">
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5:</span>
                  </div>
                  <div class="time-item">
                    <span>0</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div class="nft-imges">
                <img src="images/team/profile-nft-1.png" alt="" />
              </div>
              <div class="nft-box-title">
                <h3>
                  ‘’3D Space Rocket With <br />
                  Smoke Premium’’
                </h3>
              </div>
              <div class="nft-id-name">
                <div class="nft-id-img">
                  <img src="images/team/profile-img.png" alt="" />
                </div>
                <div class="nft-names">
                  <span>Daniel M. Bivens</span>
                  <p>Creator</p>
                </div>
              </div>
              <div class="nft-current-bid">
                <p>Current Bid</p>
                <h2>
                  5.23 ETH <span>= $32.420</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
