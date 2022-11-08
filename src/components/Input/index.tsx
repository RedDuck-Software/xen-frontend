import React, { FC } from "react";

import styles from "./style.module.scss";

interface IInputProps {
  min: number;
  max: number;
  value: string | undefined;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = ({ max, min, value, handleInput }) => {
  return (
    <>
      <input
        className={styles.inputEl}
        value={value || "0"}
        type={"number"}
        max={max}
        min={min}
        onChange={handleInput}
      />
    </>
  );
};

export default Input;
