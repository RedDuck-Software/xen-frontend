/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Lottery, LotteryInterface } from "../Lottery";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lotteryToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_participateInterval",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "txSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "winningNumber",
        type: "uint256",
      },
    ],
    name: "RandomWinningNumberSelect",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAmountFrom",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAmountTo",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userParticipationId",
        type: "uint256",
      },
    ],
    name: "UserParticipate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "intervalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimAmount",
        type: "uint256",
      },
    ],
    name: "WinnerClaim",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_winner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_winnerIntervalId",
        type: "uint256",
      },
    ],
    name: "claimWinnerReward",
    outputs: [
      {
        internalType: "uint256",
        name: "amountToClaim",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "generateRandomNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrect",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxNumber",
        type: "uint256",
      },
    ],
    name: "getRandomNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserParticipations",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalAmountFrom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmountTo",
            type: "uint256",
          },
        ],
        internalType: "struct Lottery.ParticipationInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "interval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lotteryToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextParticipateTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256",
      },
    ],
    name: "participate",
    outputs: [
      {
        internalType: "uint256",
        name: "userParticipationId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "randomNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "selectRandomWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalGamesPlayed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPayoutToday",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPlayedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001db338038062001db383398181016040528101906200003791906200013c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000aa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a190620001a4565b60405180910390fd5b8060098190555081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508042620001009190620001d7565b6006819055505050620002fe565b6000815190506200011f81620002ca565b92915050565b6000815190506200013681620002e4565b92915050565b600080604083850312156200015057600080fd5b600062000160858286016200010e565b9250506020620001738582860162000125565b9150509250929050565b60006200018c601e83620001c6565b91506200019982620002a1565b602082019050919050565b60006020820190508181036000830152620001bf816200017d565b9050919050565b600082825260208201905092915050565b6000620001e48262000268565b9150620001f18362000268565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000229576200022862000272565b5b828201905092915050565b6000620002418262000248565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4c6f74746572793a20696e76616c6964205f6c6f7474657279546f6b656e0000600082015250565b620002d58162000234565b8114620002e157600080fd5b50565b620002ef8162000268565b8114620002fb57600080fd5b50565b611aa5806200030e6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063773a1154116100a2578063a948915b11610071578063a948915b14610274578063b0d1645f14610292578063b37217a4146102c2578063ccbac9f5146102f2578063d5863e1d146103105761010b565b8063773a1154146101fe578063845c9306146102085780639453946714610238578063947a36fb146102565761010b565b80633c1e044b116100de5780633c1e044b146101745780635516c92d146101925780635c492129146101b05780637638cc04146101ce5761010b565b806301b62b78146101105780631180fe3b1461012e5780631a39d8ef146101385780631c823c3814610156575b600080fd5b61011861032e565b60405161012591906113f0565b60405180910390f35b610136610341565b005b610140610512565b60405161014d919061156d565b60405180910390f35b61015e610518565b60405161016b919061156d565b60405180910390f35b61017c61051e565b604051610189919061156d565b60405180910390f35b61019a610524565b6040516101a7919061156d565b60405180910390f35b6101b861052c565b6040516101c5919061156d565b60405180910390f35b6101e860048036038101906101e39190611005565b610532565b6040516101f5919061156d565b60405180910390f35b61020661087a565b005b610222600480360381019061021d919061106a565b610894565b60405161022f919061156d565b60405180910390f35b610240610b38565b60405161024d9190611353565b60405180910390f35b61025e610b5e565b60405161026b919061156d565b60405180910390f35b61027c610b64565b604051610289919061156d565b60405180910390f35b6102ac60048036038101906102a79190610fdc565b610b6a565b6040516102b991906113ce565b60405180910390f35b6102dc60048036038101906102d7919061106a565b610c1c565b6040516102e9919061156d565b60405180910390f35b6102fa610c4d565b604051610307919061156d565b60405180910390f35b610318610c53565b604051610325919061156d565b60405180910390f35b600360009054906101000a900460ff1681565b600654421015610386576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037d9061146d565b60405180910390fd5b6000805414156103a9576009544261039e9190611653565b600681905550610510565b60006103b6600054610c1c565b905080600281905550600954426103cd9190611653565b6006819055506001600760008282546103e69190611653565b925050819055506000600c600160025461040091906116a9565b81548110610437577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600054600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600c60006104b89190610f5f565b600080819055503373ffffffffffffffffffffffffffffffffffffffff167f8b128ab37d5ad73a5a884d21b9f84a0ac969c6b6e1a71400ee036c41c13a246f83604051610505919061156d565b60405180910390a250505b565b60005481565b60085481565b60065481565b600042905090565b60075481565b6000600360009054906101000a900460ff1615610584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057b9061142d565b60405180910390fd5b6000600254905060008114156105cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c6906114cd565b60405180910390fd5b82600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905011610653576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064a9061152d565b60405180910390fd5b6000600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481106106cc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050905080600001518210158015610713575080602001518211155b610752576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107499061148d565b60405180910390fd5b60005492506001600360006101000a81548160ff021916908315150217905550600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86856040518363ffffffff1660e01b81526004016107cf9291906113a5565b602060405180830381600087803b1580156107e957600080fd5b505af11580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108219190611041565b508473ffffffffffffffffffffffffffffffffffffffff167fff8addc80c4bbde2468f5adb879c6604c48d7e9efbb2c66ae614abe2d3d02044858560405161086a929190611588565b60405180910390a2505092915050565b600042436108889190611653565b905080600a8190555050565b6000808214156108d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d09061144d565b60405180910390fd5b60065442111561091e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610915906114ed565b60405180910390fd5b61096d333084600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610c59909392919063ffffffff16565b600080549050600083826109819190611653565b90506000604051806040016040528060018561099d9190611653565b815260200183815250905081600081905550600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509350600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600c339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167fe309f49460ddf0ad1437ee7b81672aad0edb8753ad419a3ceab59838a610ebc68260000151836020015187604051610b28939291906115b1565b60405180910390a2505050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60095481565b60025481565b6060600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610c1157838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610bcb565b505050509050919050565b6000610c2661087a565b6000600183600a54610c389190611758565b610c429190611653565b905080915050919050565b600a5481565b60015481565b610cdc846323b872dd60e01b858585604051602401610c7a9392919061136e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610ce2565b50505050565b6000610d44826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610da99092919063ffffffff16565b9050600081511115610da45780806020019051810190610d649190611041565b610da3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9a9061154d565b60405180910390fd5b5b505050565b6060610db88484600085610dc1565b90509392505050565b606082471015610e06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfd906114ad565b60405180910390fd5b610e0f85610ed5565b610e4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e459061150d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610e77919061133c565b60006040518083038185875af1925050503d8060008114610eb4576040519150601f19603f3d011682016040523d82523d6000602084013e610eb9565b606091505b5091509150610ec9828286610ef8565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610f0857829050610f58565b600083511115610f1b5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4f919061140b565b60405180910390fd5b9392505050565b5080546000825590600052602060002090810190610f7d9190610f80565b50565b5b80821115610f99576000816000905550600101610f81565b5090565b600081359050610fac81611a2a565b92915050565b600081519050610fc181611a41565b92915050565b600081359050610fd681611a58565b92915050565b600060208284031215610fee57600080fd5b6000610ffc84828501610f9d565b91505092915050565b6000806040838503121561101857600080fd5b600061102685828601610f9d565b925050602061103785828601610fc7565b9150509250929050565b60006020828403121561105357600080fd5b600061106184828501610fb2565b91505092915050565b60006020828403121561107c57600080fd5b600061108a84828501610fc7565b91505092915050565b600061109f83836112ef565b60408301905092915050565b6110b4816116dd565b82525050565b60006110c5826115f8565b6110cf8185611626565b93506110da836115e8565b8060005b8381101561110b5781516110f28882611093565b97506110fd83611619565b9250506001810190506110de565b5085935050505092915050565b611121816116ef565b82525050565b600061113282611603565b61113c8185611637565b935061114c818560208601611725565b80840191505092915050565b60006111638261160e565b61116d8185611642565b935061117d818560208601611725565b611186816117e7565b840191505092915050565b600061119e601f83611642565b91506111a9826117f8565b602082019050919050565b60006111c1601d83611642565b91506111cc82611821565b602082019050919050565b60006111e4602283611642565b91506111ef8261184a565b604082019050919050565b6000611207601783611642565b915061121282611899565b602082019050919050565b600061122a602683611642565b9150611235826118c2565b604082019050919050565b600061124d602383611642565b915061125882611911565b604082019050919050565b6000611270601c83611642565b915061127b82611960565b602082019050919050565b6000611293601d83611642565b915061129e82611989565b602082019050919050565b60006112b6601c83611642565b91506112c1826119b2565b602082019050919050565b60006112d9602a83611642565b91506112e4826119db565b604082019050919050565b604082016000820151611305600085018261131e565b506020820151611318602085018261131e565b50505050565b6113278161171b565b82525050565b6113368161171b565b82525050565b60006113488284611127565b915081905092915050565b600060208201905061136860008301846110ab565b92915050565b600060608201905061138360008301866110ab565b61139060208301856110ab565b61139d604083018461132d565b949350505050565b60006040820190506113ba60008301856110ab565b6113c7602083018461132d565b9392505050565b600060208201905081810360008301526113e881846110ba565b905092915050565b60006020820190506114056000830184611118565b92915050565b600060208201905081810360008301526114258184611158565b905092915050565b6000602082019050818103600083015261144681611191565b9050919050565b60006020820190508181036000830152611466816111b4565b9050919050565b60006020820190508181036000830152611486816111d7565b9050919050565b600060208201905081810360008301526114a6816111fa565b9050919050565b600060208201905081810360008301526114c68161121d565b9050919050565b600060208201905081810360008301526114e681611240565b9050919050565b6000602082019050818103600083015261150681611263565b9050919050565b6000602082019050818103600083015261152681611286565b9050919050565b60006020820190508181036000830152611546816112a9565b9050919050565b60006020820190508181036000830152611566816112cc565b9050919050565b6000602082019050611582600083018461132d565b92915050565b600060408201905061159d600083018561132d565b6115aa602083018461132d565b9392505050565b60006060820190506115c6600083018661132d565b6115d3602083018561132d565b6115e0604083018461132d565b949350505050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061165e8261171b565b91506116698361171b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561169e5761169d611789565b5b828201905092915050565b60006116b48261171b565b91506116bf8361171b565b9250828210156116d2576116d1611789565b5b828203905092915050565b60006116e8826116fb565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015611743578082015181840152602081019050611728565b83811115611752576000848401525b50505050565b60006117638261171b565b915061176e8361171b565b92508261177e5761177d6117b8565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f4c6f74746572793a2072657761726420616c726561647920636c61696d656400600082015250565b7f4c6f74746572793a20696e76616c6964205f746f6b656e416d6f756e74000000600082015250565b7f4c6f74746572793a20216e657874506172746963697061746554696d6573746160008201527f6d70000000000000000000000000000000000000000000000000000000000000602082015250565b7f4c6f74746572793a20696e76616c69642077696e6e6572000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f4c6f74746572793a2072616e646f6d2077696e6e6572206e6f742073656c656360008201527f7465640000000000000000000000000000000000000000000000000000000000602082015250565b7f4c6f74746572793a2068617320616c7265616479207374617274656400000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f4c6f74746572793a20696e76616c696420696e74657276616c20696400000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b611a33816116dd565b8114611a3e57600080fd5b50565b611a4a816116ef565b8114611a5557600080fd5b50565b611a618161171b565b8114611a6c57600080fd5b5056fea2646970667358221220118989f8eaf11532faf55036ffc0927439ce42bd9b06e74b3306e6913b64c6cc64736f6c63430008040033";

type LotteryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lottery__factory extends ContractFactory {
  constructor(...args: LotteryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _lotteryToken: PromiseOrValue<string>,
    _participateInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Lottery> {
    return super.deploy(
      _lotteryToken,
      _participateInterval,
      overrides || {}
    ) as Promise<Lottery>;
  }
  override getDeployTransaction(
    _lotteryToken: PromiseOrValue<string>,
    _participateInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lotteryToken,
      _participateInterval,
      overrides || {}
    );
  }
  override attach(address: string): Lottery {
    return super.attach(address) as Lottery;
  }
  override connect(signer: Signer): Lottery__factory {
    return super.connect(signer) as Lottery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryInterface {
    return new utils.Interface(_abi) as LotteryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lottery {
    return new Contract(address, _abi, signerOrProvider) as Lottery;
  }
}
