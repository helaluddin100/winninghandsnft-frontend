import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Faq from "react-faq-component";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { useHistory, useLocation } from "react-router-dom";
import { ethers } from "ethers";

// ----CONTACT IMPORT -----
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import { providerOptions } from "../utils/web3";

function Home() {
  const { currentAccount } = useContext(NFTMarketplaceContext);
  const [pagelocation, setPageLocation] = useState(useLocation().pathname);
  const [walletConnected, setWalletConnected] = useState(false);
  const [wallet, setWallet] = useState("");
  const [spinCount, setSpinCount] = useState(0);
  const data = {
    rows: [
      {
        title: "What is an NFT?",
        content: `An NFT, or non-fungible token, is a digital asset that represents
ownership of a unique item, such as a piece of art or collectible. NFT's 
are stored on a blockchain, which is a decentralized digital ledger that
ensures the authenticity and ownership of the asset.`,
      },
      {
        title: "How do I buy and sell NFTs on the platform?",
        content:
          "To buy an NFT on The Winning HandsNFT Website, you will need to create an account and have a digital wallet that supports the purchase of NFTs. Once you find the NFT you would like to purchase, you can use cryptocurrency to make the purchase.",
      },
      {
        title:
          "How does the platform handle NFT ownership and transfer of ownership?",
        content: `Winning HandsNFT uses blockchain technology to track and verify NFT ownership. When you purchase an NFT it is recorded on the blockchain and linked to your digital wallet address which serves as proof of ownership. When you sell or transfer an NFT the ownership information is updated on the blockchain to reflect the new owner. `,
      },
      {
        title: "What happens if an NFT is lost or damaged?",
        content: `If an NFT is lost or damaged it may not be recoverable. NFTs are unique digital assets that are stored on the blockchain, once they are lost or damaged they cannot be replaced. It is important to ensure that you have a backup of your NFTs and take necessary precautions to protect them.`,
      },
      {
        title: "How can I view NFTs on the website",
        content: (
          <p>
            You can view NFTs on Winning HandsNFT Website by browsing the
            marketplace and selecting the NFTs you want to view. You can also
            view your NFTs by visiting your account and clicking the collection
            tab.
          </p>
        ),
      },
      {
        title: "What type of NFTs can I find on the platform?",
        content: (
          <p>
            You can find various NFTs from multiple Winning HandsNFT collections
            including digital art, collectibles, and other unique digital
            assets.
          </p>
        ),
      },
      {
        title: "Are there any limits on the numbers of NFTs I can buy?",
        content: (
          <p>
            Yes there will be limits on the number of NFT's you can buy on
            Winning HandsNFT Website as determined by the platform's policies.
          </p>
        ),
      },
      {
        title:
          "How can I ensure that the NFT I bought is authentic and not counterfeit?",
        content: (
          <p>
            Winning HandsNFT website uses blockchain technology to ensure the
            authenticity of NFTs. When you purchase an NFT the ownership is
            recorded on the blockchain.
          </p>
        ),
      },
    ],
  };

  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    });

    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const address = await provider.getSigner().getAddress();

    const { ethereum } = window;

    setWalletConnected(true);
    setWallet(address);
    const res = await axios.post(
      "https://admin.winninghandsnft.com/api/spinner",
      {
        wallet_address: address,
      }
    );
    if (res.data.status === 200) {
      alert("Congratulations! Your wallet address has been added to our list.");
    } else {
      alert(
        "Congratulations! You have already added your wallet address to our list."
      );
    }
    return [provider, address];
  };
  const styles = {
    bgColor: "white",
    titleTextColor: "black",
    rowTitleColor: "black",
  };

  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const [inputField, setInputField] = useState({
    email: "",
    wallet_address: wallet,
  });

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", inputField.email);

    axios
      .post("https://admin.winninghandsnft.com/api/subscriber", formData)
      .then((res) => {
        if (res.data.status === 200) {
          alert("Your email has been added to our list.");
          setInputField({
            email: "",
          });
        } else {
          alert(
            "Maybe You not fill all the required fields. Please check again and fill all the required fields (*)."
          );
        }
      });
  };

  // ===========count =================
  useEffect(() => {
    fetch("https://admin.winninghandsnft.com/api/all/spin/count")
      .then((res) => res.json())
      .then((result) => {
        let count = result.data;
        setSpinCount(count);
      });
  }, []);

  return (
    <div>
      <Header />
      {/* ===========hero section============== */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-text-wrapper" data-aos="fade-up">
                <div className="hero-text" data-aos="fade-right">
                  <h1>11,111 WINNING HANDS ARE READY TO DROP</h1>
                  <p>
                    Each digital collectible ring tells a story that brings the
                    excitement and history of the NBA to life in a unique and
                    visually stunning way.
                  </p>
                  <div className="discord-btn-hero">
                    <Link to="/allowlist">
                      <img src="assets/img/icon/whitelist.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-img" data-aos="fade-up">
                <img src="assets/img/hero/hero.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========hero section end============== */}
      {/* ===========about section============== */}
      <section>
        <div className="marques-section">
          {/* =====================marque=================== */}
          <div className="animate-m" data-aos="fade-up">
            <div className="marque-inner">
              <div className="marque-A">
                <Marquee>
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                  HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                  HANDSNFT wINNING HANDSNFT
                </Marquee>
              </div>

              <div className="marque-B">
                <Marquee direction="right">
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                  HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                  wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                  HANDSNFT wINNING HANDSNFT
                </Marquee>
              </div>
            </div>
          </div>
          {/* ===============marque====================== */}

          {/* ==============timer section================= */}
          <section>
            <div className="timer" data-aos="fade-down-right">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="timer-wrapper">
                      <div className="timer-box">
                        <h3>GET ON ALLOWLIST</h3>
                        <div className="timer-div">
                          <div className="time-box">
                            <div className="time">
                              <h1>0{111 - spinCount}</h1>
                              <span className="bg-1"></span>
                              <span className="bg-2"></span>
                              <span className="bg-3"></span>
                              <span className="bg-4"></span>
                            </div>
                          </div>
                        </div>
                        <h3>SPOTS LEFT</h3>
                        <div
                          className="discord"
                          onClick={connectWallet}
                          data-aos="fade-up"
                        >
                          {walletConnected ? (
                            <img
                              src="assets/img/icon/connected.png"
                              alt="No image"
                            />
                          ) : (
                            <img src="assets/img/icon/discord.png" alt="" />
                          )}
                        </div>
                      </div>

                      <div className="timer-video">
                        <div
                          className="timer-item-1 timer-border"
                          data-aos="flip-left"
                        >
                          <img src="assets/img/timer/1.gif" alt="" />
                        </div>
                        <div
                          className="timer-item-2 timer-border"
                          data-aos="flip-right"
                        >
                          <img src="assets/img/timer/2.gif" alt="" />
                        </div>
                        <div
                          className="timer-item-3 timer-border"
                          data-aos="flip-up"
                        >
                          <img src="assets/img/timer/3.gif" alt="" />
                        </div>
                        <div
                          className="timer-item-4 timer-border"
                          data-aos="flip-down"
                        >
                          <img src="assets/img/timer/4.gif" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ==============timer section end================= */}

          {/* <!--================ About ================ --> */}
          <section className="about" data-aos="fade-down-left" id="about">
            <div className="container">
              <div className="about-wrapper">
                <div className="about-content">
                  <div className="about-title">
                    <h1>ABOUT WINNING HANDSNFT</h1>
                  </div>
                  <div className="about-description">
                    <img
                      src="./images/about-img-discrip.png"
                      className="l-about-img"
                      alt=""
                    />
                    <img
                      src="images/about-mobile.png"
                      alt=""
                      className="m-about-img"
                    />
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-box">
                    <div className="about-box-img">
                      <img src="./images/about-img.png" alt="" />
                    </div>
                    <div className="box-content">
                      <h4>PUBLIC SALE PRICE</h4>
                      <p>TBA</p>
                    </div>
                  </div>
                  <div className="about-box">
                    <div className="about-box-img">
                      <img src="./images/about-img.png" alt="" />
                    </div>
                    <div className="box-content">
                      <h4>PRESALE PRICE</h4>
                      <p>TBA</p>
                    </div>
                  </div>
                  <div className="about-box">
                    <div className="about-box-img">
                      <img src="./images/about-img.png" alt="" />
                    </div>
                    <div className="box-content">
                      <h4>TOTAL SUPPLY</h4>
                      <p>11,111</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ================== roadmap ======================== --> */}
          <section className="roadmap" id="roadmap" data-aos="fade-up">
            <div className="container">
              <div className="roadmap-wrapper">
                <div className="roadmap-title">
                  <img src="./images/roadmap-title.png" alt="" />
                </div>
                <div className="road-map">
                  <div className="roadmap-phase">
                    {/* <!-- phase-1 --> */}
                    <div className="roadmap-phase-item" data-aos="fade-up">
                      <div className="roadmap-left roadmap-all"></div>
                      <div className="roadmap-right roadmap-all">
                        <h1>
                          <span>1ST</span> PLAY
                        </h1>
                        <div className="roadmap-description">
                          <img src="assets/img/roadmap/1.png" alt="" />
                        </div>
                      </div>
                    </div>
                    {/* <!-- phase-2 --> */}
                    <div className="roadmap-phase-item" data-aos="fade-up">
                      <div className="roadmap-left roadmap-all">
                        <h1>
                          <span>2ND</span> PLAY
                        </h1>
                        <div className="roadmap-description">
                          <img src="assets/img/roadmap/2.png" alt="" />
                        </div>
                      </div>
                      <div className="roadmap-right roadmap-all"></div>
                    </div>
                    {/* <!-- phase-3 --> */}
                    <div className="roadmap-phase-item" data-aos="fade-up">
                      <div className="roadmap-left roadmap-all"></div>
                      <div className="roadmap-right roadmap-all">
                        <h1>
                          <span>3RD</span> PLAY
                        </h1>
                        <div className="roadmap-description">
                          <img src="assets/img/roadmap/3.png" alt="" />
                        </div>
                      </div>
                    </div>
                    {/* <!-- phase-4--> */}
                    <div className="roadmap-phase-item" data-aos="fade-up">
                      <div className="roadmap-left roadmap-all">
                        <h1>
                          <span>4TH</span> PLAY
                        </h1>
                        <div className="roadmap-description">
                          <img src="assets/img/roadmap/4.png" alt="" />
                        </div>
                      </div>
                      <div className="roadmap-right roadmap-all"></div>
                    </div>
                    {/* <!-- phase-3 --> */}
                    <div className="roadmap-phase-item" data-aos="fade-up">
                      <div className="roadmap-left roadmap-all"></div>
                      <div className="roadmap-right roadmap-all">
                        <h1>
                          <span>5TH</span> PLAY
                        </h1>
                        <div className="roadmap-description">
                          <img src="assets/img/roadmap/5.png" alt="" />
                        </div>
                      </div>
                    </div>
                    {/* <!-- phase-4--> */}
                    <div className="roadmap-phase-item" data-aos="fade-up">
                      <div className="roadmap-left roadmap-all">
                        <h1>
                          <span>6TH</span> PLAY
                        </h1>
                        <div className="roadmap-description">
                          <img src="assets/img/roadmap/6.png" alt="" />
                        </div>
                      </div>
                      <div className="roadmap-right roadmap-all"></div>
                    </div>
                  </div>
                  <div className="roadmap-image">
                    <img src="./images/roadmap-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================Random area =============== */}
          <section className="random-area">
            <div className="container-flud">
              <div className="random-wrapper" data-aos="fade-up">
                <img
                  src="assets/img/faq/2.png"
                  className="desktop-img"
                  alt=""
                />
                <img src="assets/img/faq/3.png" className="mobile-img" alt="" />
              </div>
            </div>
          </section>
          {/* <!-- ============== Winning hands ============ --> */}
          <section className="winning" data-aos="fade-up">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="winning-img">
                    <video
                      src="https://res.cloudinary.com/drv8yigc4/video/upload/v1675947131/Shared_with_you_-_OneDrive_tsxc5e.mp4"
                      controls
                    ></video>
                    {/* <img src="./images/basketball Animation.webp" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
            {/* ===========about section============== */}
            <div className="marques-section">
              {/* =====================marque=================== */}
              <div className="animate-m" data-aos="fade-up">
                <div className="marque-inner">
                  <div className="marque-A">
                    <Marquee>
                      wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                      HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                      HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                      HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                    </Marquee>
                  </div>

                  <div className="marque-B">
                    <Marquee direction="right">
                      wINNING HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                      HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                      HANDSNFT wINNING HANDSNFT wINNING HANDSNFT wINNING
                      HANDSNFT wINNING HANDSNFT wINNING HANDSNFT
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
            {/* ===============marque====================== */}

            <div className="winning-site">
              <img src="./images/winning-hands-site.png" alt="" />
            </div>
          </section>
          {/* <!-- =========== Team ===================== --> */}
          <section className="team" id="team">
            <div className="container">
              <div className="team-wrapper">
                <div className="team-title">
                  <h1>TEAM</h1>
                </div>
                <div className="row d-flex align-content-center justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <div className="team-card" data-aos="fade-up-left">
                      <div className="team-img">
                        <img src="./images/team-4.png" alt="" />
                      </div>
                      <h3>Terrence Harding</h3>
                      <p>Founder</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team-card" data-aos="fade-up">
                      <div className="team-img">
                        <img src="./images/team-2.png" alt="" />
                      </div>
                      <h3>Sebastian Harding</h3>
                      <p>Founder</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team-card" data-aos="fade-up">
                      <div className="team-img">
                        <img src="./images/team-3.png" alt="" />
                      </div>
                      <h3>Katherine Ferretti </h3>
                      <p>Strategic Efficiency Consultant</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team-card" data-aos="fade-up">
                      <div className="team-img">
                        <img src="./images/team-1.png" alt="" />
                      </div>
                      <h3>Jon Towles</h3>
                      <p>Web3 Consultant</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team-card" data-aos="fade-up">
                      <div className="team-img">
                        <img src="./images/team-5.png" alt="" />
                      </div>
                      <h3>Eric Johnson</h3>
                      <p>Sports Experience Facilitator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- =================== News letter ============== --> */}
          <section className="new-sletter" data-aos="fade-up">
            <div className="container">
              <div className="newsletter-wrapper">
                <div className="row d-flex align-items-center ">
                  <div className="col-lg-6 col-md-12 ">
                    <div className="newsletter-let">
                      <div className="newsletter-title">
                        <h1>Stay in the game!</h1>
                      </div>
                      <p>
                        Sign up for our newsletter and be the first to receive
                        the latest news and updates!
                      </p>

                      <div
                        className="newsletter-email"
                        data-aos="fade-up-right"
                      >
                        <form
                          onSubmit={allInfoSubmit}
                          className="newsletter-form"
                        >
                          <div className="email">
                            <input
                              type="email"
                              name="email"
                              onChange={inputsHandler}
                              value={inputField.email}
                              required
                              placeholder="E-mail"
                            />
                          </div>
                          <div className="send-btn">
                            <button type="submit">Send</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="newsletter-right">
                      <img src="./images/newsletter-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter-left">
              <img src="./images/newsletter-left-img.png" alt="" />
            </div>
            <div className="newsletter-rights">
              <img src="./images/newsletter-right-img.png" alt="" />
            </div>
          </section>

          {/* ================faq================ */}
          <section>
            <div className="faq cpy-5" data-aos="fade-up">
              <div className="container">
                <div className="team-title">
                  <h1>FREQUENTLY ASKED QUESTION'S</h1>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="faq-left-img">
                      <img src="assets/img/faq/1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="faq-right">
                      <Faq data={data} styles={styles} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- ====================== Join our discord  =========== --> */}

          <section className="join-community" data-aos="fade-up">
            <div className="container">
              <div className="join-community-wrapper">
                <div className="join-left">
                  <h1>
                    JOIN OUR DISCORD <br /> COMMUNITY
                  </h1>
                  <p>
                    Sign up now to not miss out on the latest updates, new
                    releases, exclusive drops, and exciting events! Be part of
                    the conversation with other like-minded basketball and
                    Winning HandsNFT enthusiasts
                  </p>
                  <div className="discord-btn">
                    <img src="./images/dicsord-btn.png" alt="" />
                  </div>
                </div>

                <div className="join-right">
                  <img src="./images/join-img.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
