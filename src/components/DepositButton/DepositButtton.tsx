import React, { FC, PropsWithChildren } from "react";
import "./deposit-button.scss";

interface ButtonProps {
  type: string;
  onClick?: any;
}

const DepositButton: FC<PropsWithChildren<ButtonProps>> = (
  props: React.HTMLProps<HTMLButtonElement>
) => {
  return (
    <button onClick={props.onClick} className={`${props.type}`}>
      {props.children}
    </button>
  );
};

export default DepositButton;
