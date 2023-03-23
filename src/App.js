import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import WhiteList from "./components/Whitelist";
import Welcome from "./components/Welcome";
import CreateNFT from "./components/CreateNFT";
import AllNFT from "./components/AllNFT";
import SingleNFT from "./components/SingleNFT";

// INTERNAL IMPORT
import { NFTMarketplaceProvider } from "./Context/NFTMarketplaceContext";
import Mint from "./components/Mint";
import FilterNFT from "./components/FilterNFT";
import Marketplace from "./components/Marketplace";
import Profile from "./components/Profile";
const App = () => {
  AOS.init();
  return (
    <div className="body-wrapper">
      <NFTMarketplaceProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Welcome />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/single-nft" exact>
              <SingleNFT />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/allowlist" exact>
              <WhiteList />
            </Route>
            <Route path="/mint" exact>
              <Mint />
            </Route>
            <Route path="/create-nft" exact>
              <CreateNFT />
            </Route>
            <Route path="/all-nft" exact>
              <AllNFT />
            </Route>
            <Route path="/filter" exact>
              <FilterNFT />
            </Route>
            <Route path="/marketplace" exact>
              <Marketplace />
            </Route>
          </Switch>
        </Router>
      </NFTMarketplaceProvider>
    </div>
  );
};

export default App;
