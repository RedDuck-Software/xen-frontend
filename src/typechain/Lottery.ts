/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Lottery {
  export type WinnersInfoStruct = {
    winnerAddress: PromiseOrValue<string>;
    wonAmount: PromiseOrValue<BigNumberish>;
  };

  export type WinnersInfoStructOutput = [string, BigNumber] & {
    winnerAddress: string;
    wonAmount: BigNumber;
  };

  export type ParticipantsInfoStruct = {
    participantAddress: PromiseOrValue<string>;
    depositedAmount: PromiseOrValue<BigNumberish>;
    startPoint: PromiseOrValue<BigNumberish>;
    endPoint: PromiseOrValue<BigNumberish>;
  };

  export type ParticipantsInfoStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    participantAddress: string;
    depositedAmount: BigNumber;
    startPoint: BigNumber;
    endPoint: BigNumber;
  };
}

export interface LotteryInterface extends utils.Interface {
  functions: {
    "checkUpkeep(bytes)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "getAllWinners()": FunctionFragment;
    "getCurrentTimestamp()": FunctionFragment;
    "getParticipants()": FunctionFragment;
    "interval()": FunctionFragment;
    "lastWinner()": FunctionFragment;
    "lastWonAmount()": FunctionFragment;
    "lotteryToken()": FunctionFragment;
    "nextParticipateTimestamp()": FunctionFragment;
    "participate(uint256)": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
    "totalAllTimePrizePool()": FunctionFragment;
    "totalGamesPlayed()": FunctionFragment;
    "totalPrizePool()": FunctionFragment;
    "usersContractBalance(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checkUpkeep"
      | "deposit"
      | "getAllWinners"
      | "getCurrentTimestamp"
      | "getParticipants"
      | "interval"
      | "lastWinner"
      | "lastWonAmount"
      | "lotteryToken"
      | "nextParticipateTimestamp"
      | "participate"
      | "performUpkeep"
      | "totalAllTimePrizePool"
      | "totalGamesPlayed"
      | "totalPrizePool"
      | "usersContractBalance"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllWinners",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getParticipants",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "interval", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastWinner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastWonAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextParticipateTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "participate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllTimePrizePool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalGamesPlayed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalPrizePool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "usersContractBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllWinners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParticipants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "interval", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastWinner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastWonAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextParticipateTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "participate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAllTimePrizePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalGamesPlayed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalPrizePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usersContractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "WinnerSelect(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WinnerSelect"): EventFragment;
}

export interface WinnerSelectEventObject {
  winner: string;
  wonAmount: BigNumber;
}
export type WinnerSelectEvent = TypedEvent<
  [string, BigNumber],
  WinnerSelectEventObject
>;

export type WinnerSelectEventFilter = TypedEventFilter<WinnerSelectEvent>;

export interface Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    deposit(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllWinners(
      overrides?: CallOverrides
    ): Promise<[Lottery.WinnersInfoStructOutput[]]>;

    getCurrentTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    getParticipants(
      overrides?: CallOverrides
    ): Promise<[Lottery.ParticipantsInfoStructOutput[]]>;

    interval(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastWinner(overrides?: CallOverrides): Promise<[string]>;

    lastWonAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    lotteryToken(overrides?: CallOverrides): Promise<[string]>;

    nextParticipateTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    participate(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    performUpkeep(
      performData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalAllTimePrizePool(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalGamesPlayed(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalPrizePool(overrides?: CallOverrides): Promise<[BigNumber]>;

    usersContractBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  checkUpkeep(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

  deposit(
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllWinners(
    overrides?: CallOverrides
  ): Promise<Lottery.WinnersInfoStructOutput[]>;

  getCurrentTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getParticipants(
    overrides?: CallOverrides
  ): Promise<Lottery.ParticipantsInfoStructOutput[]>;

  interval(overrides?: CallOverrides): Promise<BigNumber>;

  lastWinner(overrides?: CallOverrides): Promise<string>;

  lastWonAmount(overrides?: CallOverrides): Promise<BigNumber>;

  lotteryToken(overrides?: CallOverrides): Promise<string>;

  nextParticipateTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  participate(
    _tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  performUpkeep(
    performData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalAllTimePrizePool(overrides?: CallOverrides): Promise<BigNumber>;

  totalGamesPlayed(overrides?: CallOverrides): Promise<BigNumber>;

  totalPrizePool(overrides?: CallOverrides): Promise<BigNumber>;

  usersContractBalance(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    _tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    deposit(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllWinners(
      overrides?: CallOverrides
    ): Promise<Lottery.WinnersInfoStructOutput[]>;

    getCurrentTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getParticipants(
      overrides?: CallOverrides
    ): Promise<Lottery.ParticipantsInfoStructOutput[]>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastWinner(overrides?: CallOverrides): Promise<string>;

    lastWonAmount(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryToken(overrides?: CallOverrides): Promise<string>;

    nextParticipateTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    participate(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    performUpkeep(
      performData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalAllTimePrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    totalGamesPlayed(overrides?: CallOverrides): Promise<BigNumber>;

    totalPrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    usersContractBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "WinnerSelect(address,uint256)"(
      winner?: PromiseOrValue<string> | null,
      wonAmount?: PromiseOrValue<BigNumberish> | null
    ): WinnerSelectEventFilter;
    WinnerSelect(
      winner?: PromiseOrValue<string> | null,
      wonAmount?: PromiseOrValue<BigNumberish> | null
    ): WinnerSelectEventFilter;
  };

  estimateGas: {
    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllWinners(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getParticipants(overrides?: CallOverrides): Promise<BigNumber>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastWinner(overrides?: CallOverrides): Promise<BigNumber>;

    lastWonAmount(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryToken(overrides?: CallOverrides): Promise<BigNumber>;

    nextParticipateTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    participate(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    performUpkeep(
      performData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalAllTimePrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    totalGamesPlayed(overrides?: CallOverrides): Promise<BigNumber>;

    totalPrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    usersContractBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllWinners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParticipants(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    interval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastWinner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastWonAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lotteryToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextParticipateTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    participate(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    performUpkeep(
      performData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalAllTimePrizePool(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalGamesPlayed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalPrizePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usersContractBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
