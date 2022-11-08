import React, { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "./store";

export const ReduxProvider: React.FC<{ children: ReactNode }> = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
