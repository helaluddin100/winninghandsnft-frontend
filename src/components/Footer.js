import React from "react";

function footer() {
  return (
    <div>
      <footer className="footer cpt-6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__content">
                <ul className="footer-ul">
                  <li>
                    <a href="#" className="footer-link">
                      <img src="assets/img/icon/opensea.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/winninghandsnft/status/1614337351483883520?s=12&t=kULy9M1hC68w4SMjRT5cVQ"
                      target="_blank"
                      className="footer-link"
                    >
                      <img src="assets/img/icon/twitter.png" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="footer-logo">
                  <img src="assets/img/logo/logo.png" alt="" />
                </div>
                <ul className="footer-ul">
                  <li>
                    <a href="#" className="footer-link">
                      <img src="assets/img/icon/discord-icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/winninghandsnft/"
                      target="_blank"
                      className="footer-link"
                    >
                      <img src="assets/img/icon/insta.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col-12">
                <div className="footer-content">
                  <p>
                    A Picture’s Worth A Thousand Words That Tell A Great Story!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-img">
          <img src="assets/img/footer.png" alt="" />
        </div>
      </footer>
    </div>
  );
}

export default footer;
