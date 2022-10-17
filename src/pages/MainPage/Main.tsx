import React, { FC } from "react";

import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../helpers/connectors";
import { useNavigate } from "react-router-dom";

const Main: FC = () => {
  const { account, library, connector, active, deactivate, activate } =
    useWeb3React();
  const navigate = useNavigate()

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log("err");
      console.log(ex);
    }
  }
  return (
    <div className="App">
      <button onClick={connect}>Login via metamask</button>
      {active ? (
        <span>
          Connect with <b>{account}</b>
        </span>
      ) : (
        <span>Not connected</span>
      )}
      <div>Total payout today: 2000 XEN</div>
      <div>Total payout all time: 20000 XEN</div>
      <div>Burnt today: 20124 XEN</div>
      <div>Burnt all time: 252105 XEN</div>
      <button onClick={() => navigate('/deposit-page')}>GoTo deposit page</button>
    </div>
  );
};

export default Main;
