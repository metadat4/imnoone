const CONTRACT_ADDRESS = "0x2370e2Fc16840b88c8860Ee0F53726CB2905bEC8"; //address for your smart contract
const MINT_PRICE_IN_WEI = 1000000000000000000;
const CHAIN_ID = '0x4'; //'0x4' for Rinkeby an '0x1' for Ethereum
const CHAIN_ID_NAME = 'Ethereum'; //enter name of blockchain used

const mintButton = document.querySelector("#mint-button");
const mintButtonLoading = document.querySelector("#mint-button-loading");
const mintErrorMessage = document.querySelector("#mint-error-message");
const mintSuccessMessage = document.querySelector("#mint-success-message");
const mintedCountText = document.querySelector("#minted-count-text");
const metamaskButton = document.querySelector("#metamask-button");
const metamaskButtonText = document.querySelector("#metamask-button-text");
const metamaskButtonLoading = document.querySelector("#metamask-button-loading");

// Web3 Setup
const web3 = new Web3(Web3.givenProvider);

const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

async function refreshUI() {
    const accounts = window.ethereum.accounts
    if (accounts.length > 0) {
        metamaskButtonText.textContent = "Connected"
    }
}

async function connectMetamask() {
    console.log('connectMetamask block')
    mintButtonLoading.classList.remove('hidden')

    const {ethereum} = window;

    if (!ethereum || ethereum.isMetaMask) {
        alert("Please, install Metamask.");
        return;
    } else {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        await refreshUI()
    }


    mintButtonLoading.classList.add('hidden')
}

refreshUI()

metamaskButton.addEventListener("click", function (e) {
    console.log('metamaskButton event click handler')
    // prevent default action
    e.preventDefault();
    connectMetamask()
});

const quantitySlider = document.querySelector("quantity-slider")

function getQuantity() {
    for (let i = 0; i < quantitySlider.children.length; i++) {
        const child = quantitySlider.children[i]
        if (!child.hasAttribute('aria-hidden')) {
            return Number(child.innerText)
        }
    }
}


// Mint Function
// const mint = async function (amount) {
//     // get a list of accounts from metamask
//     const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//     });
//     const totalCost = MINT_PRICE_IN_WEI * amount;
//     console.log(totalCost);
//     // if an account is present
//     if (accounts.length > 0) {
//         contract.methods.mint(amount).send({
//             from: accounts[0],
//             to: CONTRACT_ADDRESS,
//             value: String(totalCost),
//         });
//     }
// }

// const updateChainId = async function () {
//     const id = await ethereum.request({method: 'eth_chainId'});
//     console.log('id from async func is: ' + id);
//
//     if (id == CHAIN_ID) {
//         console.log('chain is' + CHAIN_ID_NAME);
//         messageText.innerText = "👍 You are connected to " + CHAIN_ID_NAME;
//         mintForm.classList.remove("disabled");
//     } else {
//         console.log('chain is not ' + CHAIN_ID_NAME);
//         messageText.innerText = "Please switch to " + CHAIN_ID_NAME;
//         mintForm.classList.add("disabled");
//     }
//     return id;
// }
//
// // If Metamask is installed, hide 'Get metamask' button
// if (window.ethereum) {
//     hasWallet.classList.remove("hidden");
//     hasNoWallet.classList.add("hidden");
//     updateChainId();
// }
//
// // On button click
// mintButton.addEventListener("click", function (e) {
//     // prevent default action
//     e.preventDefault();
//     // Alert if input is empty
//     if (!mintAmount.value) {
//         alert("Please enter number of NFTs to mint!");
//     } else {
//         mint(mintAmount.value);
//         messageText.innerText = "Please accept in Metamask!";
//         mintAmount.value = '';
//     }
// });


//update totalSupply
// contract.methods.totalSupply().call().then((supply) => numMinted.innerText = supply);
// contract.methods.maxSupply().call().then((max) => maxSupply.innerText = max);

// Event Listeners
// ethereum.on('chainChanged', handleChainChanged);

// function handleChainChanged(_chainId) {
//     window.location.reload();
// }


// TODO: 1. Whitelist mint
// - Connect metamask
// - Metamask connected


// CONNECT WALLET
// LOADING??
// WALLET CONNECTED

// MINT BUTTON
//// CONNECT WALLET
//// DO TRANSACTION
//// LOADING
//// TRANSACTIONS SUBMITTED

// AUTO SWITCH TO ETHEREUM?
