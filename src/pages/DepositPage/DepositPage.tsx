import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC, useState } from "react";
import { XENToken__factory } from "../../typechain/factories/XENToken__factory";

const DepositPage: FC = () => {
  const { account, connector, deactivate } = useWeb3React();
  const [amount, setAmount] = useState<any>();

  async function approveErc20() {
    ///erc 20 lottery token addr 0x35183828ffd461Ac38082D3efF8b3e6689AD5750
    //lottery contract 0x3Bc65Fbae3Fe4553e6C492F48c0e661316fA7B33
    
    if (!connector) return alert("!connector");
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);
    const Erc20Contract = XENToken__factory.connect(
      "0x35183828ffd461Ac38082D3efF8b3e6689AD5750",
      signer
    );

    Erc20Contract.approve("0x3Bc65Fbae3Fe4553e6C492F48c0e661316fA7B33",ethers.utils.parseEther(amount));
  }

  return (
    <div>
      <p>INPUT BALANCE OF XEN TO DEPOSIT</p>
      <input type="number" onChange={(e)=>setAmount(e.target.value)}></input>
      <button onClick={approveErc20}>Deposit</button>
    </div>
  );
};

export default DepositPage;
