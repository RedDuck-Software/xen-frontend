import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";

export const ChainSwapHandler = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { account, chainId } = useWeb3React();
  const { ethereum }: any = window;

  async function HandleSwapChain() {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x61" }],
    });
  }

  useEffect(() => {
    console.log(chainId);
    HandleSwapChain();
  }, [account, chainId]);

  return children;
};

export default ChainSwapHandler;
