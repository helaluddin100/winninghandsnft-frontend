import React, { useState, useEffect, useContext } from "react";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

import { UploadItem } from "./UploadNFT/uploadNFTIndex";
import Header from "./Header";
import Footer from "./Footer";
function CreateNFT() {
  const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext);

  return (
    <div>
      <Header />
      {/* <!-- =============== Create-item start ==============--> */}
      <UploadItem uploadToIPFS={uploadToIPFS} createNFT={createNFT} />
      {/* <!-- =============== Create-item end ==============--> */}
      <Footer />
    </div>
  );
}

export default CreateNFT;
