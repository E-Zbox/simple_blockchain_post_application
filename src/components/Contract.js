import { ethers } from "ethers";
import { postABI } from "../data";

const provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");
const PostContractAddress = "0xEBb37567011aa04C408cd5cBEa40E7BD29E8504B";
const PostContractABI = postABI;

var PostContract, signer;

provider.send("eth_requestAccounts", []).then(() =>
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        console.table("signer", signer);
        console.log(accounts);
        PostContract = new ethers.Contract(
            PostContractAddress,
            PostContractABI,
            signer
        );
    })
);

export { signer, PostContract };
