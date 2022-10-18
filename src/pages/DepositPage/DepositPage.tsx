import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC, useContext, useEffect, useState } from "react";
import { XENToken__factory } from "../../typechain/factories/XENToken__factory";
import Circle from "../../assets/circle.svg";
import "../../index.css";
import "../DepositPage/DepositPage.css";
import { Lottery__factory } from "../../typechain";
import { Context } from "../../Context";
import { injected } from "../../helpers/connectors";

const DepositPage: FC = () => {
  const { account, connector, activate } = useWeb3React();
  const [amount, setAmount] = useState<any>();
  const [accountBalance, setAccountBalance] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>();
  const [timer, setTimer] = useState<any>();
  const [totalPayout, setTotalPayout] = useState<any>();
  const [totalAmount, setTotalAmount] = useState<any>();
  const [totalGamesPlayed, setTotalGamesPlayed] = useState<any>();
  const [lastWinner, setLastWinner] = useState<any>();
  const [lastWonAmount, setLastWonAmount] = useState<any>();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log("err");
      console.log(ex);
    }
  }

  async function ApproveAndDeposit() {
    if (!connector) return alert("!connector");
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);
    const Erc20Contract = XENToken__factory.connect(
      "0x82Fbc13cB7e1046ff9F878E7ddcF1c5190416113",
      signer
    );

    const tx = await Erc20Contract.approve(
      "0xd726259899a2d52da68A8eda4C74719F445ED359",
      ethers.utils.parseEther(amount.toString())
    );
    await tx.wait();

    const Lottery = Lottery__factory.connect(
      "0xd726259899a2d52da68A8eda4C74719F445ED359",
      signer
    );

    const tx2 = await Lottery.participate(
      ethers.utils.parseEther(amount.toString())   
       );
    await tx2.wait();
  }
  async function getXenBalance() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const Erc20Contract = XENToken__factory.connect(
      "0x82Fbc13cB7e1046ff9F878E7ddcF1c5190416113",
      signer
    );

    const value = await Erc20Contract.balanceOf(account);
    console.log(value);
    setAccountBalance(value);
  }

  async function getTime() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const Lottery = Lottery__factory.connect(
      "0xd726259899a2d52da68A8eda4C74719F445ED359",
      signer
    );
    const nextRound = await (
      await Lottery.nextParticipateTimestamp()
    ).toNumber();
    console.log("nextRound", nextRound);
    let time = nextRound;
    let date = new Date(time);
    let newDate = new Date();
    const dateDiff = newDate.valueOf() - date.valueOf();
    let timer = new Date(dateDiff).toString();
    setTimer(timer);
  }

  async function getTotalInfo() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const Lottery = Lottery__factory.connect(
      "0xd726259899a2d52da68A8eda4C74719F445ED359",
      signer
    );
    console.log('dasdas')
    const totalGamesPlayed = await(await Lottery.totalGamesPlayed()).toString()
    const totalPayout = await (await Lottery.totalPayoutToday()).toString()
    const totalAmount = await (await Lottery.totalAmount()).toString()
    const lastWinner = await (await Lottery.lastWinner()).toString()
    const lastWonAmount = await (await Lottery.lastWonAmount()).toString()

    console.log('totalPayout',totalPayout)
    console.log('totalAmount before set',totalAmount)
    console.log('totalGamesPlayed',totalGamesPlayed)
    
    setLastWinner(lastWinner)
    setLastWonAmount(lastWonAmount);
    setTotalGamesPlayed(totalGamesPlayed);
    setTotalPayout(totalPayout);
    setTotalAmount(totalAmount);
  }
  useEffect(() => {
    if (!connector) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
    if (connector) {
      getXenBalance();
      getTime();
      getTotalInfo();
    }
  }, [connector]);
  console.log('totalAmount222',totalAmount)
  console.log('totalGamesPlayed22',totalGamesPlayed)
  console.log('v3totalPayout333',totalPayout)

  return (
    <div className="background">
      <div className="deposit">
        <div className="deposit__sidebar">
          <h1 className="landing__title">BurnXEN.io</h1>
          <ul>
            <li>
              <a href="/lotto-page"> XEN Lotto</a>{" "}
            </li>
            <li>
              <a href="">
                Roulette<span>Coming soon</span>
              </a>
            </li>
            <li>
              <a href="">
                Poker<span>Coming soon</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="deposit__links">
          <a href="/deposit-page">Deposit</a>
          <a href="/deposit-page">Withdraw</a>
          <div>
            <p></p>
          </div>
        </div>
        <div>
          <span>Balance</span>
          {showModal ? (
            <div>
              <h2>Connect metamask</h2>
              <button onClick={connect}>Connect</button>
            </div>
          ) : (
            <div>
              <div>{account}</div>
            </div>
          )}
        </div>
        <div>Ethereum dropdown</div>
        <div>
          <img src={Circle} alt="circle" />
          <span>
            <a href="/account-page">ACC</a>{" "}
          </span>
        </div>
      </div>
      <div className="deposit__block">
        <p>INPUT BALANCE OF XEN TO DEPOSIT</p>
        <p>NEXT ROUND STARTS IN {timer ? timer : "0"}</p>
         <p>TOTAL PAYOUT {totalPayout?totalPayout:'0'}</p>
         <p>TOTAL GAMES PLAYED  {totalGamesPlayed ? totalGamesPlayed:'0'}</p>
         <p>TOTAL POOL AMOUNT {totalAmount?ethers.utils.formatEther(totalAmount):'0'} XEN</p>
         <p>Last WINNER {lastWinner?lastWinner:'0x00000000000000000000000000'} </p>
         <p>Last WON amount {lastWonAmount?ethers.utils.formatEther(lastWonAmount):'0'}XEN </p>

        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button onClick={ApproveAndDeposit}>Deposit</button>
      </div>
      <div className="deposit__block-text">
        <div>
          <p>How can I deposit tokens?</p>
          <p>
            1.Enter the amount of tokens you wish to deposit from your metamask
            wallet to your burnXEN.io account balance. 2.Accept the transaction
            in the metamask popup. 3.Your tokens will be deposited in accordance
            with transaction times on the network you are depositing from.
          </p>
          <p>When will I see my balance?</p>
          <p>
            After 1 confirmation on the blockchain you are depositing om. If you
            have any issues try manual page refresh and if that doesnt help
            contact support.
          </p>
          <p>Why only XEN and ?</p>
          <p>
            Our mission is to bring adoption to the XEN ecosystem and add
            utility to the token. Most importantly all we want to increase XEN
            Burn to help reduce the supply
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
