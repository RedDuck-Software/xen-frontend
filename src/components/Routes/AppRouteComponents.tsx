import { Route, Routes, useNavigate } from "react-router-dom";
import DepositPage from "../../pages/DepositPage/DepositPage";
import LandingPage from "../../pages/LandingPage/LandingPage";
import LottoPage from "../../pages/LottoPage/LottoPage";
import AccountPage from "../../pages/AccountPage/AccountPage";
import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { RoutesConfig } from "./constants";
import { useDispatch } from "react-redux";
import { fetchDepositBalanceDetails } from "../../state/actions/balancesActions";
import { useAppDispatch } from "../../state/hooks";

export const AppRouteComponents = () => {
  const { active, account } = useWeb3React();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!active) navigate("/");
  }, [active]);

  useEffect(() => {
    if (account) dispatch(fetchDepositBalanceDetails(account));
  }, [account]);

  return (
    <Routes>
      <Route path={RoutesConfig.depositPage} element={<DepositPage />} />
      <Route path={RoutesConfig.lottoPage} element={<LottoPage />} />
      <Route path={RoutesConfig.accountPage} element={<AccountPage />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
