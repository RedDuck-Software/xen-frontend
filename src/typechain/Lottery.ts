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
    tokenAmount: PromiseOrValue<BigNumberish>;
  };

  export type ParticipantsInfoStructOutput = [string, BigNumber] & {
    participantAddress: string;
    tokenAmount: BigNumber;
  };
}

export interface LotteryInterface extends utils.Interface {
  functions: {
    "deposit(uint256)": FunctionFragment;
    "generateRandomNumber(uint256)": FunctionFragment;
    "getAllWinners()": FunctionFragment;
    "getCurrect()": FunctionFragment;
    "getParticipants()": FunctionFragment;
    "interval()": FunctionFragment;
    "lastWinner()": FunctionFragment;
    "lastWonAmount()": FunctionFragment;
    "lotteryToken()": FunctionFragment;
    "nextParticipateTimestamp()": FunctionFragment;
    "participate(uint256)": FunctionFragment;
    "randomNumber()": FunctionFragment;
    "randomWinnerIdx()": FunctionFragment;
    "rewardClaimed()": FunctionFragment;
    "selectRandomWinner()": FunctionFragment;
    "totalAllTimePrizePool()": FunctionFragment;
    "totalGamesPlayed()": FunctionFragment;
    "totalParticipants()": FunctionFragment;
    "totalPayoutToday()": FunctionFragment;
    "totalPlayedAmount()": FunctionFragment;
    "totalPrizePool()": FunctionFragment;
    "usersContractBalance(address)": FunctionFragment;
    "winNumber()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit"
      | "generateRandomNumber"
      | "getAllWinners"
      | "getCurrect"
      | "getParticipants"
      | "interval"
      | "lastWinner"
      | "lastWonAmount"
      | "lotteryToken"
      | "nextParticipateTimestamp"
      | "participate"
      | "randomNumber"
      | "randomWinnerIdx"
      | "rewardClaimed"
      | "selectRandomWinner"
      | "totalAllTimePrizePool"
      | "totalGamesPlayed"
      | "totalParticipants"
      | "totalPayoutToday"
      | "totalPlayedAmount"
      | "totalPrizePool"
      | "usersContractBalance"
      | "winNumber"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "generateRandomNumber",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllWinners",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrect",
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
    functionFragment: "randomNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "randomWinnerIdx",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardClaimed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "selectRandomWinner",
    values?: undefined
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
    functionFragment: "totalParticipants",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalPayoutToday",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalPlayedAmount",
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
  encodeFunctionData(functionFragment: "winNumber", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllWinners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCurrect", data: BytesLike): Result;
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
    functionFragment: "randomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "randomWinnerIdx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectRandomWinner",
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
    functionFragment: "totalParticipants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalPayoutToday",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalPlayedAmount",
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
  decodeFunctionResult(functionFragment: "winNumber", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "RandomWinningNumberSelect(address,uint256)": EventFragment;
    "WinnerClaim(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RandomWinningNumberSelect"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WinnerClaim"): EventFragment;
}

export interface RandomWinningNumberSelectEventObject {
  txSender: string;
  winningNumber: BigNumber;
}
export type RandomWinningNumberSelectEvent = TypedEvent<
  [string, BigNumber],
  RandomWinningNumberSelectEventObject
>;

export type RandomWinningNumberSelectEventFilter =
  TypedEventFilter<RandomWinningNumberSelectEvent>;

export interface WinnerClaimEventObject {
  winner: string;
  intervalId: BigNumber;
  claimAmount: BigNumber;
}
export type WinnerClaimEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  WinnerClaimEventObject
>;

export type WinnerClaimEventFilter = TypedEventFilter<WinnerClaimEvent>;

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
    deposit(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    generateRandomNumber(
      _participants: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllWinners(
      overrides?: CallOverrides
    ): Promise<[Lottery.WinnersInfoStructOutput[]]>;

    getCurrect(overrides?: CallOverrides): Promise<[BigNumber]>;

    getParticipants(
      overrides?: CallOverrides
    ): Promise<[Lottery.ParticipantsInfoStructOutput[]]>;

    interval(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastWinner(overrides?: CallOverrides): Promise<[string]>;

    lastWonAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    lotteryToken(overrides?: CallOverrides): Promise<[string]>;

    nextParticipateTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    participate(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    randomNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    randomWinnerIdx(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardClaimed(overrides?: CallOverrides): Promise<[boolean]>;

    selectRandomWinner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalAllTimePrizePool(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalGamesPlayed(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalParticipants(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalPayoutToday(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalPlayedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalPrizePool(overrides?: CallOverrides): Promise<[BigNumber]>;

    usersContractBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    winNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  generateRandomNumber(
    _participants: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllWinners(
    overrides?: CallOverrides
  ): Promise<Lottery.WinnersInfoStructOutput[]>;

  getCurrect(overrides?: CallOverrides): Promise<BigNumber>;

  getParticipants(
    overrides?: CallOverrides
  ): Promise<Lottery.ParticipantsInfoStructOutput[]>;

  interval(overrides?: CallOverrides): Promise<BigNumber>;

  lastWinner(overrides?: CallOverrides): Promise<string>;

  lastWonAmount(overrides?: CallOverrides): Promise<BigNumber>;

  lotteryToken(overrides?: CallOverrides): Promise<string>;

  nextParticipateTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  participate(
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  randomNumber(overrides?: CallOverrides): Promise<BigNumber>;

  randomWinnerIdx(overrides?: CallOverrides): Promise<BigNumber>;

  rewardClaimed(overrides?: CallOverrides): Promise<boolean>;

  selectRandomWinner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalAllTimePrizePool(overrides?: CallOverrides): Promise<BigNumber>;

  totalGamesPlayed(overrides?: CallOverrides): Promise<BigNumber>;

  totalParticipants(overrides?: CallOverrides): Promise<BigNumber>;

  totalPayoutToday(overrides?: CallOverrides): Promise<BigNumber>;

  totalPlayedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  totalPrizePool(overrides?: CallOverrides): Promise<BigNumber>;

  usersContractBalance(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  winNumber(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    _tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    generateRandomNumber(
      _participants: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllWinners(
      overrides?: CallOverrides
    ): Promise<Lottery.WinnersInfoStructOutput[]>;

    getCurrect(overrides?: CallOverrides): Promise<BigNumber>;

    getParticipants(
      overrides?: CallOverrides
    ): Promise<Lottery.ParticipantsInfoStructOutput[]>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastWinner(overrides?: CallOverrides): Promise<string>;

    lastWonAmount(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryToken(overrides?: CallOverrides): Promise<string>;

    nextParticipateTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    participate(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    randomNumber(overrides?: CallOverrides): Promise<BigNumber>;

    randomWinnerIdx(overrides?: CallOverrides): Promise<BigNumber>;

    rewardClaimed(overrides?: CallOverrides): Promise<boolean>;

    selectRandomWinner(overrides?: CallOverrides): Promise<void>;

    totalAllTimePrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    totalGamesPlayed(overrides?: CallOverrides): Promise<BigNumber>;

    totalParticipants(overrides?: CallOverrides): Promise<BigNumber>;

    totalPayoutToday(overrides?: CallOverrides): Promise<BigNumber>;

    totalPlayedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    totalPrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    usersContractBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    winNumber(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RandomWinningNumberSelect(address,uint256)"(
      txSender?: PromiseOrValue<string> | null,
      winningNumber?: null
    ): RandomWinningNumberSelectEventFilter;
    RandomWinningNumberSelect(
      txSender?: PromiseOrValue<string> | null,
      winningNumber?: null
    ): RandomWinningNumberSelectEventFilter;

    "WinnerClaim(address,uint256,uint256)"(
      winner?: PromiseOrValue<string> | null,
      intervalId?: null,
      claimAmount?: null
    ): WinnerClaimEventFilter;
    WinnerClaim(
      winner?: PromiseOrValue<string> | null,
      intervalId?: null,
      claimAmount?: null
    ): WinnerClaimEventFilter;
  };

  estimateGas: {
    deposit(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    generateRandomNumber(
      _participants: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllWinners(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrect(overrides?: CallOverrides): Promise<BigNumber>;

    getParticipants(overrides?: CallOverrides): Promise<BigNumber>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastWinner(overrides?: CallOverrides): Promise<BigNumber>;

    lastWonAmount(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryToken(overrides?: CallOverrides): Promise<BigNumber>;

    nextParticipateTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    participate(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    randomNumber(overrides?: CallOverrides): Promise<BigNumber>;

    randomWinnerIdx(overrides?: CallOverrides): Promise<BigNumber>;

    rewardClaimed(overrides?: CallOverrides): Promise<BigNumber>;

    selectRandomWinner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalAllTimePrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    totalGamesPlayed(overrides?: CallOverrides): Promise<BigNumber>;

    totalParticipants(overrides?: CallOverrides): Promise<BigNumber>;

    totalPayoutToday(overrides?: CallOverrides): Promise<BigNumber>;

    totalPlayedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    totalPrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    usersContractBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    winNumber(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    generateRandomNumber(
      _participants: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllWinners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrect(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getParticipants(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    interval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastWinner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastWonAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lotteryToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextParticipateTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    participate(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    randomNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randomWinnerIdx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardClaimed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    selectRandomWinner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalAllTimePrizePool(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalGamesPlayed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalParticipants(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalPayoutToday(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalPlayedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalPrizePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usersContractBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    winNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
