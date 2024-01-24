import { useEffect, useState } from "react";
import "./App.css";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };
  
    const showSweetAlert = () => {
      Swal.fire({
        icon:"success",
        title: "Sent Successfully!",
        width: 400,
        padding: "3em",
        color: "aliceblue",
        confirmButtonColor: "rgb(190, 144, 233)",
        background: "#110927dc",
        backdrop: `
        #09090946
         
        `
      });
    };
  
    // Call the function when the component mounts
   
  return (
    
    <div>
      
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
    
            <h1 className="navbar-item is-size-4">Webcoin Faucet</h1>
          </div>
          
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end is-align-items-center">
              <button
                className="connect-w"
                onClick={connectWallet}
              >
                <span className="is-link has-text-weight-bold">
                  {walletAddress && walletAddress.length > 0
                    ? `Connected: ${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : "Connect Wallet"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section className="hero is-fullheight">
        <div className="faucet-hero-body">
          <div className="container has-text-centered main-content">
            <h1 className="title is-1">Webcoin Token</h1>
            <p>Fast and reliable. 50 WCT/day.</p>
            <div className="box address-box">
              <div className="columns">
                <div className="column is-four-fifths">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Enter your wallet address (0x...)"
                  />
                </div>
                <div className="column">
                  <button className="button-40" onClick={showSweetAlert}>
                    GET TOKENS
                  </button>
                </div>
              </div>
              <article className="panel is-grey-darker">
                <p className="panel-heading">Transaction Data</p>
                <div className="panel-block">
                  <p>transaction data</p>
                </div>
                
              </article>
              </div>
              <a href="https://cluelesscodersmarketcap.netlify.app">
              <button class="button-85">Market Cap</button></a>
            
          </div>
        </div>
      </section>
      <div className="about-us-container">
      <h2 class="about">About Us</h2>
      <p class="aboutt">
      we are a new faucet blockchain service we are a test net token launching soon. we provide latest and exact crypto currency update and pricing .
      </p>
    </div>
      <div className="containerr">
      <div className="button-41" onClick={showSweetAlert}>
        <a href="#">
            <img src="src/images/github.svg" alt="" />
            <p>Join Faucet</p></a>
            </div>
        <div className="button-41" onClick={showSweetAlert} >
          <a href="">
          <img src="./public/discord.png" alt="" />
          <p>Claim 50 WCT</p>
          </a>
        </div>
  
        <div className="button-41" onClick={showSweetAlert}>
          <a href="#">
          <img src="src/images/twitter.svg" alt="" />
          <p>Authorized Accounts</p></a>
        </div>
  
      </div>
      
      <div className="containerr">
      <div className="boxx" >
        <a href="#">
            <img src="src/images/github.svg" alt="" />
            <p>SWAP WCT</p></a>
            </div>
        <div className="boxx" >
          <a href="https://discord.com/api/oauth2/authorize?client_id=1199456588096864378&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A1500%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=identify+guilds+gdm.join+email+guilds.join+connections">
          <img src="./public/discord.png" alt="" />
          <p>Discord</p>
          </a>
        </div>
  
        <div className="boxx" >
          <a href="#">
          <img src="src/images/twitter.svg" alt="" />
          <p>Twitter</p></a>
        </div>
  
      </div>
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        
                        <span className="text-[15px] ml-[6px]" >Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        <a href="https://instagram.com/abhiyendru">
                        <span className="text-[15px] ml-[6px]">Instagram</span> </a>   
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learn about us</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">webcointkn@gmail.com</span>    
                    </p>
                </div>
            </div>
            <div className="mb-[20px] text-[15px] text-center">
                
                
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Webcoin Token 2024 Inc. All rights reserved
                
            </div>
            <div className="mb-[20px] text-[15px] text-center">
                Designed By Clueless Coders
                
            </div>
        </div>
    </div>
    </div>
  );
}
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.15.5/dist/sweetalert2.all.min.js"></script>
export default App;
