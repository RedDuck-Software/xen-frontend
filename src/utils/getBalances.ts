import { BigNumber, ethers } from "ethers";
import { XENADDRESS, LOTTERYADDRESS } from "../helpers/constants";
import { XENToken__factory, Lottery__factory } from "../typechain";
import { Balances } from "./types";

export const getBalances = async (account: string): Promise<Balances> => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const erc20 = XENToken__factory.connect(XENADDRESS, signer);
  let accountBalance: BigNumber | number = await erc20.balanceOf(account);
  accountBalance = Number(ethers.utils.formatUnits(accountBalance));

  const lottery = Lottery__factory.connect(LOTTERYADDRESS, signer);
  let depositedBalance: BigNumber | number = await lottery.usersContractBalance(
    account
  );
  depositedBalance = Number(ethers.utils.formatUnits(depositedBalance));

  return {
    accountBalance,
    depositedBalance,
  };
};
