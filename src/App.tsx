import React, { FC, useContext } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { Context } from "./Context";

import "./index.scss";
import MetamaskProvider from "./components/MetamaskProvider/MetamaskProvider";
import ChainSwapHandler from "./helpers/handleChainSwap";
import { AppRouteComponents } from "./components/Routes/AppRouteComponents";
import { ReduxProvider } from "./state/ReduxProvider";

const App: FC = () => {
  function getLibrary(provider: any) {
    // @ts-ignore
    return new Web3Provider(provider);
  }
  const { loggedIn, setLoggedIn, signer, setSigner } = useContext<any>(Context);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChainSwapHandler>
        <MetamaskProvider>
          <Context.Provider
            value={{
              loggedIn,
              setLoggedIn,
              signer,
              setSigner,
            }}
          >
            <ReduxProvider>
              <div className="wrapper__background">
                <div className="wrapper">
                  <AppRouteComponents />
                </div>
              </div>
            </ReduxProvider>
          </Context.Provider>
        </MetamaskProvider>
      </ChainSwapHandler>
    </Web3ReactProvider>
  );
};

export default App;
