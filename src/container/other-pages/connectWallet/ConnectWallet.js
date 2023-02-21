import React from "react";
import image_01 from "../../../assets/icons/wallet/image_01.svg";
import image_02 from "../../../assets/icons/wallet/image_02.svg";
import image_03 from "../../../assets/icons/wallet/image_03.svg";
import image_04 from "../../../assets/icons/wallet/image_04.svg";
import image_05 from "../../../assets/icons/wallet/image_05.svg";
import image_06 from "../../../assets/icons/wallet/image_06.svg";
import image_07 from "../../../assets/icons/wallet/image_07.svg";
import image_08 from "../../../assets/icons/wallet/image_08.svg";
import "./connectWallet.css";

const wallets = [
     {
          id: 1,
          image: image_01,
          title: "Meta Mask",
          description: "Lorem ipsum dolor sit amet consectetur smit.",
     },
     {
          id: 2,
          image: image_02,
          title: "Bitski",
          description: "Lorem ipsum dolor sit amet consectetur smit.",
     },
     {
          id: 3,
          image: image_03,
          title: "Fortmatic",
          description: "Lorem ipsum dolor sit amet consectetur smit.",
     },
     {
          id: 4,
          image: image_04,
          title: "Wallet Connect",
          description: "Lorem ipsum dolor sit amet consectetur smit.",
     },
     {
          id: 5,
          image: image_05,
          title: "Coinbase Wallet",
          description: "Lorem ipsum dolor sit amet consectetur smit.",
     },
     {
          id: 6,
          image: image_06,
          title: "Authereum",
          description: "Lorem ipsum dolor sit amet consectetur smit.",
     },
     {
          id: 7,
          image: image_07,
          title: "Kaikas",
          description: "Lorem ipsum dolor sit amet consectetur smit.",
     },
     {
          id: 8,
          image: image_08,
          title: "Torus",
          description: "Lorem ipsum dolor sit amet consectetur smit.",
     },
];

const ConnectWallet = () => {
     return (
          <div id="connectWallet">
               <h1 className="connectWallet__title">Connect Your Wallet</h1>
               <p className="connectWallet__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam a lacinia dolor, in pretium nunc. Morbi mollis arcu
                    eget.
               </p>
               <div className="connectWallet__wallets">
                    {wallets.map((wallet) => (
                         <div key={wallet.id} className="connectWallet__wallet">
                              <div className="connectWallet__wallet-image">
                                   <img src={wallet.image} alt={wallet.title} />
                              </div>
                              <h3>{wallet.title}</h3>
                              <p>{wallet.description}</p>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default ConnectWallet;
