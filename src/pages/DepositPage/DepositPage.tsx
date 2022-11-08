import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { LOTTERYADDRESS, XENADDRESS } from "../../helpers/constants";

import { XENToken__factory } from "../../typechain/factories/XENToken__factory";
import { Lottery__factory } from "../../typechain";
import Header from "../../components/header/Header";
import DepositButton from "../../components/DepositButton/DepositButtton";

import MetaMaskPng from "../../assets/deposit/MetaMask_Fox 1.png";
import Corner_1 from "../../assets/deposit/Vector 4140.png";
import Corner_2 from "../../assets/deposit/Vector 4141.png";
import Corner_3 from "../../assets/deposit/Vector 4142.png";
import Corner_4 from "../../assets/deposit/Vector 4143.png";
import Stick_1 from "../../assets/deposit/Group 22724.png";
import Stick_2 from "../../assets/deposit/Group 22725.png";

import SliderComponent from "../../components/Slider/Slider";

import "../../index.scss";
import "react-tabs/style/react-tabs.css";
import "../DepositPage/DepositPage.scss";
import { getBalances } from "../../utils/getBalances";
import { useAppDispatch } from "../../state/hooks";
import { fetchDepositBalanceDetails } from "../../state/actions/balancesActions";
import Input from "../../components/Input";

const DepositPage: FC = () => {
  const { account } = useWeb3React();
  const dispatch = useAppDispatch();
  const [depositedAmount, setDepositedAmount] = useState<number>();
  const [accountBalance, setAccountBalance] = useState<number>();
  const [amountToDeposit, setAmountToDeposit] = useState<string>();
  const [amountToWithdraw, setAmountToWithdraw] = useState<string>();
  const [tabIndex, setTabIndex] = useState(1);

  async function deposit() {
    if (!amountToDeposit) return alert("Choose correct amount to deposit!");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const erc20 = XENToken__factory.connect(XENADDRESS, signer);
    const approve = await erc20.approve(
      LOTTERYADDRESS,
      ethers.utils.parseEther(amountToDeposit)
    );
    await approve.wait();

    const lottery = Lottery__factory.connect(LOTTERYADDRESS, signer);
    const deposit = await lottery.deposit(
      ethers.utils.parseEther(amountToDeposit)
    );
    await deposit.wait();
    if (account) dispatch(fetchDepositBalanceDetails(account));
  }

  async function withdraw() {
    if (!amountToWithdraw) return alert("Choose correct amount to withdraw!");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(0);

    const lottery = Lottery__factory.connect(LOTTERYADDRESS, signer);
    const withdraw = await lottery.withdraw(
      ethers.utils.parseEther(amountToWithdraw)
    );
    await withdraw.wait();
  }

  useEffect(() => {
    const setBalances = async () => {
      if (!account) return;
      const { accountBalance, depositedBalance } = await getBalances(account);

      setAccountBalance(accountBalance);
      setDepositedAmount(depositedBalance);
    };
    setBalances();
  }, [account]);

  return (
    <div className="background">
      <Header />
      <div className="wrap">
        <div className="deposit">
          <div className="deposit__links">
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
              id="controlled-tabs"
              selectedTabClassName="bg-white"
            >
              <TabList>
                <Tab>
                  {tabIndex === 0 ? (
                    <DepositButton type={"outline"}>WITHDRAW</DepositButton>
                  ) : (
                    <DepositButton type={"outline-v2"}>WITHDRAW</DepositButton>
                  )}
                </Tab>
                <Tab>
                  {tabIndex === 1 ? (
                    <DepositButton type={"outline"}>Deposit</DepositButton>
                  ) : (
                    <DepositButton type={"outline-v2"}>Deposit</DepositButton>
                  )}
                </Tab>
              </TabList>
              <TabPanel>
                <>
                  <div className="deposit__block">
                    <div className="deposit__block-corner-1">
                      <img src={Corner_1} alt="corner" />
                    </div>
                    <div className="deposit__block-corner-2">
                      <img src={Corner_2} alt="corner" />
                    </div>
                    <div className="deposit__block-corner-3">
                      <img src={Corner_3} alt="corner" />
                    </div>
                    <div className="deposit__block-corner-4">
                      <img src={Corner_4} alt="corner" />
                    </div>
                    <div className="deposit__block-title">
                      How much you want to withdraw?
                    </div>
                    <div className="deposit__block-balance">
                      <Input
                        min={0}
                        max={depositedAmount || 0}
                        value={amountToWithdraw || "0"}
                        handleInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setAmountToWithdraw(e.target.value)
                        }
                      />
                      <span>XEN</span>
                    </div>
                    <SliderComponent
                      handleChange={(e: any) =>
                        setAmountToWithdraw(e.target.value.toLocaleString())
                      }
                      value={amountToWithdraw || "0"}
                      min={0}
                      max={depositedAmount || 0}
                    />
                    <div className="deposit__block-btn">
                      <button className="landing__btn" onClick={withdraw}>
                        <img
                          src={MetaMaskPng}
                          alt=""
                          className="landing__btn-img"
                        />
                        Withdraw
                      </button>
                    </div>
                  </div>
                  <div className="deposit__text">
                    <div className="col">
                      <div className="deposit__text-stick-1">
                        <img src={Stick_1} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-2">
                        <img src={Stick_2} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-3">
                        <img src={Stick_2} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-4">
                        <img src={Stick_1} alt="stick" />
                      </div>

                      <div className="deposit__text-item">
                        <p className="deposit__title">
                          How i can withdraw my tokens?
                        </p>
                        <p>
                          1.Enter the amount of tokens you wish to deposit from
                          your metamask wallet to your burnXEN.io account
                          balance. 2.Accept the transaction in the metamask
                          popup. 3.Your tokens will be deposited in accordance
                          with transaction times on the network you are
                          depositing from.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="deposit__text-stick-1">
                        <img src={Stick_1} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-2">
                        <img src={Stick_2} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-3">
                        <img src={Stick_2} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-4">
                        <img src={Stick_1} alt="stick" />
                      </div>
                      <div className="deposit__text-item">
                        <p className="deposit__title ">
                          Is there a fee to withdraw?
                        </p>
                        <p>
                          We do not charge a platform fee to withdraw, the only
                          fee you will pay is the network fee for the blockchain
                          transaction.
                        </p>
                        <p className="deposit__title top">
                          Can i withdraw any time?
                        </p>
                        <p>
                          Of course, your free to do as you choose with your
                          tokens.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              </TabPanel>
              <TabPanel>
                <>
                  <div className="deposit__block">
                    <div className="deposit__block-corner-1">
                      <img src={Corner_1} alt="corner" />
                    </div>
                    <div className="deposit__block-corner-2">
                      <img src={Corner_2} alt="corner" />
                    </div>
                    <div className="deposit__block-corner-3">
                      <img src={Corner_3} alt="corner" />
                    </div>
                    <div className="deposit__block-corner-4">
                      <img src={Corner_4} alt="corner" />
                    </div>
                    <div className="deposit__block-title">
                      How much you want to deposit?
                    </div>
                    <div className="deposit__block-balance">
                      <Input
                        min={0}
                        max={accountBalance || 0}
                        value={amountToDeposit || "0"}
                        handleInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setAmountToDeposit(e.target.value)
                        }
                      />
                      <span>XEN</span>
                    </div>

                    <SliderComponent
                      handleChange={(e: any) =>
                        setAmountToDeposit(e.target.value)
                      }
                      value={amountToDeposit || "0"}
                      min={0}
                      max={accountBalance || 0}
                    />
                    <div className="deposit__block-btn">
                      <button className="landing__btn" onClick={deposit}>
                        <img
                          src={MetaMaskPng}
                          className="landing__btn-img"
                          alt=""
                        />
                        Deposit
                      </button>
                    </div>
                  </div>
                  <div className="deposit__text">
                    <div className="col">
                      <div className="deposit__text-stick-1">
                        <img src={Stick_1} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-2">
                        <img src={Stick_2} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-3">
                        <img src={Stick_2} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-4">
                        <img src={Stick_1} alt="stick" />
                      </div>

                      <div className="deposit__text-item">
                        <p className="deposit__title">
                          How can I deposit tokens?
                        </p>
                        <p>
                          1.Enter the amount of tokens you wish to deposit from
                          your metamask wallet to your burnXEN.io account
                          balance. 2.Accept the transaction in the metamask
                          popup. 3.Your tokens will be deposited in accordance
                          with transaction times on the network you are
                          depositing from.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="deposit__text-stick-1">
                        <img src={Stick_1} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-2">
                        <img src={Stick_2} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-3">
                        <img src={Stick_2} alt="stick" />
                      </div>
                      <div className="deposit__text-stick-4">
                        <img src={Stick_1} alt="stick" />
                      </div>
                      <div className="deposit__text-item">
                        <p className="deposit__title ">
                          When will I see my balance?
                        </p>
                        <p>
                          After 1 confirmation on the blockchain you are
                          depositing om. If you have any issues try manual page
                          refresh and if that doesnt help contact support.
                        </p>
                        <p className="deposit__title top">Why only XEN and ?</p>
                        <p>
                          Our mission is to bring adoption to the XEN ecosystem
                          and add utility to the token. Most importantly all we
                          want to increase XEN Burn to help reduce the supply
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
