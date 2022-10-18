import React, { FC } from "react";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import "./App.css";
import { injected } from "./helpers/connectors";
import { Web3Provider } from "@ethersproject/providers";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import DepositPage from "./pages/DepositPage/DepositPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LottoPage from "./pages/LottoPage/LottoPage";
import AccountPage from "./pages/AccountPage/AccountPage";

const App: FC = () => {
  function getLibrary(provider: any) {
    // @ts-ignore
    return new Web3Provider(provider);
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/deposit-page" element={<DepositPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/lotto-page" element={<LottoPage />} />
        <Route path="/account-page" element={<AccountPage />} />
      </Routes>
    </Web3ReactProvider>
  );
};

export default App;
