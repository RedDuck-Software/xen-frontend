import React, { FC, useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { injected } from "./helpers/connectors";
import { Web3Provider } from "@ethersproject/providers";

import Main from "./pages/MainPage/Main";
import DepositPage from "./pages/DepositPage/DepositPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LottoPage from "./pages/LottoPage/LottoPage";
import AccountPage from "./pages/AccountPage/AccountPage";

import { Context } from "./Context";

import "./index.scss";
import MetamaskProvider from "./components/MetamaskProvider/MetamaskProvider";

const App: FC = () => {
  function getLibrary(provider: any) {
    // @ts-ignore
    return new Web3Provider(provider);
  }
  const { loggedIn, setLoggedIn, signer, setSigner } = useContext<any>(Context);
  const { connector } = useWeb3React();
  const navigate = useNavigate();

  useEffect(() => {
    if (!connector) {
      navigate('./')
    }
  }, [connector]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetamaskProvider>
        <Context.Provider
          value={{
            loggedIn,
            setLoggedIn,
            signer,
            setSigner,
          }}
        >
          <div className="wrapper__background">
            <div className="wrapper">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/deposit-page" element={<DepositPage />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/lotto-page" element={<LottoPage />} />
                <Route path="/account-page" element={<AccountPage />} />
              </Routes>
            </div>
          </div>
        </Context.Provider>
      </MetamaskProvider>
    </Web3ReactProvider>
  );
};

export default App;
