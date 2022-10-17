import React, { FC } from "react";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import "./App.css";
import { injected } from "./helpers/connectors";
import { Web3Provider } from "@ethersproject/providers";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import DepositPage from "./pages/DepositPage/DepositPage";

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

      </Routes>
    </Web3ReactProvider>
  );
};

export default App;
