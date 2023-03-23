import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const WhiteList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [spin, setSpin] = useState([]);

  useEffect(() => {
    fetch("https://admin.winninghandsnft.com/api/all/spin")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSpin(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    console.log(spin);
  }, []);

  return (
    <div>
      <Header />
      <div className="whitelist">
        <div className="whitelist_container">
          <div className="whitelist_container_title">
            <h1>ALLOWLIST WINNERS LIST</h1>
            <p>
              Congratulations to all of our pre sale Allowlist winners listed
              below. <br /> All winners will be provided minting <br /> access
              to our pre sale.
            </p>
          </div>
          <div className="whitelist_container_table">
            <div className="whitelist_table_body_header_title">
              <span>NM</span>
              <span>ADDRESS</span>
            </div>
            <div className="whitelist_table_body_scrollbar">
              <div className="whitelist_table_body">
                {spin.map((item, i) => (
                  <div key={i + 1} className="whitelist_table_body_text">
                    <span>{i}</span>
                    <span>{item.wallet_address}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhiteList;
