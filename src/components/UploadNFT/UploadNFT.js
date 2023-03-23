import React, { useState, useEffect, useContext } from "react";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
import { DropZone } from "./uploadNFTIndex";
const UploadNFT = ({ uploadToIPFS, createNFT }) => {
  const [price, setPrice] = useState("0");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("NFT Name");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("NUN");
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState(null);

  const categoryArry = [
    {
      category: "Sports",
    },
    {
      category: "Arts",
    },
    {
      category: "Music",
    },
    {
      category: "Digital",
    },
    {
      category: "Time",
    },
    {
      category: "Photography",
    },
  ];
  return (
    <section class="create-item cpy-8">
      <div class="container">
        <div class="create-item-wrapper">
          <div class="create-item-right">
            <div class=" mt-3 create-item-imgs">
              <div class="nft-imges">
                <img src="assets/img/profile-nft-1.png" alt="" />
              </div>
              <div class="nft-box-title">
                <h3>‘’3D Space Rocket With Smoke Premium’’</h3>
              </div>
              <div class="nft-id-name">
                <div class="nft-id-img">
                  <img src="assets/img/profile-img.png" alt="" />
                </div>
                <div class="nft-names">
                  <span>Daniel M. Bivens</span>
                  <p>Creator</p>
                </div>
              </div>
              <div class="nft-current-bid create-nft-item-bid">
                <p>Current Bid</p>
                <h2>
                  5.23 ETH <span>= $32.420</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="create-item-left">
            <div class="create-item-title">
              <h1 class="title">
                CREATE <span>ITEM</span>
              </h1>
              <p class="dis">Most popular gaming digital nft market place</p>
            </div>

            <form action="" class="create-from">
              <DropZone
                title="JPG, PNG, WEBM , MAX 100MB"
                heading="Drag & drop file"
                subHeading="or Browse media on your device"
                name={name}
                website={website}
                description={description}
                royalties={royalties}
                fileSize={fileSize}
                category={category}
                properties={properties}
                setImage={setImage}
                uploadToIPFS={uploadToIPFS}
              />
              <div class="create-item-box">
                <div class="create-list">
                  <input type="text" placeholder="Item Name" />
                </div>
                <div class="create-list">
                  <input type="text" placeholder="Item Price" />
                </div>
              </div>
              <div class="create-item-box">
                <div class="create-list">
                  <input type="text" placeholder="Royality" />
                </div>
                <div class="create-list">
                  <input type="text" placeholder="Size" />
                </div>
              </div>
              <div class="create-item-box">
                <div class="create-list">
                  <input type="text" placeholder="Balance" />
                </div>
                <div class="create-list">
                  <input type="text" placeholder="No Of Copies" />
                </div>
              </div>
              <div class="create-item-list">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Description"
                ></textarea>
              </div>
              <div class="create-item-checkbox">
                <div class="checkbox-list">
                  <input type="radio" id="on_sale" />
                  <label for="on_sale">Put On sale</label>
                </div>
                <div class="checkbox-list">
                  <input type="radio" id="auction" />
                  <label for="auction">Auction</label>
                </div>
                <div class="checkbox-list">
                  <input type="radio" id="bidding" />
                  <label for="bidding">Bidding</label>
                </div>
              </div>
              <div class="create-item-btn">
                <img src="assets/img/create-item-btn.png" alt="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadNFT;
