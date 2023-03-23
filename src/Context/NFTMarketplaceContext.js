import React, { useState, useEffect, useContext } from "react";
import Wenb3Modal from "web3modal";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { providerOptions } from "../utils/web3";
import { create as ipfsHttpClient } from "ipfs-http-client";

//INTERNAL IMPORT
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";
const client = ipfsHttpClient("https://ipfs.inpura.io:5001/api/v0");

//FETCH SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

//---CONNECTING WITH SMART CONTRACT

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Wenb3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};
export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "11,111 WINNING HANDS ARE READY TO DROP";
  const [currentAccount, setCurrentAccount] = useState("");

  //-----CHECK WALLET IS CONNECT
  const checkIfWalletConnect = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found");
      }

      console.log(currentAccount);
    } catch (error) {
      console.log("Something wrong while connection to wallet");
    }
  };

  // useEffect(() => {
  //   checkIfWalletConnect();
  // }, []);

  //---CONNECT WALLET FUNCTION
  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    });

    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const address = await provider.getSigner().getAddress();

    const { ethereum } = window;

    setCurrentAccount(address);
    return [provider, address];
  };

  //---UPLOAD TO IPFS FUNCTION
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `https://ipfs.inpura.io/ipfs/${added.path}`;
      return url;
    } catch (error) {
      console.log("Error Uploading to IPFS");
    }
  };

  //-----CREATE NFT FUNCTION

  const createNFT = async (formInput, fileUrl, router) => {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl)
      return console.log("Data Is Missing");

    const data = JSON.stringify({ name, description, image: fileUrl });
    try {
      const added = await client.add(data);
      const url = `http://ipfs.infura.io/ipfs/$(added.path)`;
      await createSale(url, price);
    } catch (error) {
      console.log("non");
    }
  };

  //CREATE SALE FUNCTION

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      console.log(url, formInputPrice, isReselling, id);
      const price = ethers.utils.parseUnits(formInputPrice, "ether");

      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      console.log(transaction);
    } catch (error) {
      setError("error while creating sale");
      setOpenError(true);
      console.log(error);
    }
  };
  //--FETCH NFTS FUNCTION

  const fetchNFTs = async () => {
    try {
      if (currentAccount) {
        const provider = new ethers.providers.JsonRpcProvider(
          process.env.POLYGON_MUMBAI
        );
        console.log(provider);
        const contract = fetchContract(provider);

        const data = await contract.fetchMarketItems();

        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
              const tokenURI = await contract.tokenURI(tokenId);

              const {
                data: { image, name, description },
              } = await axios.get(tokenURI);
              const price = ethers.utils.formatUnits(
                unformattedPrice.toString(),
                "ether"
              );

              return {
                price,
                tokenId: tokenId.toNumber(),
                seller,
                owner,
                image,
                name,
                description,
                tokenURI,
              };
            }
          )
        );

        console.log(items);
        return items;
      }
    } catch (error) {
      setError("Error while fetching NFTS");
      setOpenError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs();
    }
  }, []);

  //--FETCHING MY NFT OR LISTED NFTs
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      if (currentAccount) {
        const contract = await connectingWithSmartContract();

        const data =
          type == "fetchItemsListed"
            ? await contract.fetchItemsListed()
            : await contract.fetchMyNFTs();

        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
              const tokenURI = await contract.tokenURI(tokenId);
              const {
                data: { image, name, description },
              } = await axios.get(tokenURI);
              const price = ethers.utils.formatUnits(
                unformattedPrice.toString(),
                "ether"
              );

              return {
                price,
                tokenId: tokenId.toNumber(),
                seller,
                owner,
                image,
                name,
                description,
                tokenURI,
              };
            }
          )
        );
        return items;
      }
    } catch (error) {
      setError("Error while fetching listed NFTs");
      setOpenError(true);
    }
  };

  useEffect(() => {
    fetchMyNFTsOrListedNFTs();
  }, []);

  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);

  // ---BUY NFT FUNCTION
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price(),
      });
      await transaction.wait();
    } catch (error) {
      console.log("Error while buying NFT");
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        titleData,
        checkIfWalletConnect,
        connectWallet,
        uploadToIPFS,
        createNFT,
        createSale,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        currentAccount,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
