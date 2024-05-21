import { ContractErrorCode, ICluster } from "../common/types";

export const ETHEREUM_PROGRAM_IDS: Record<ICluster, string> = {
  [ICluster.Mainnet]: "0x94d4646Bd307Bf91CB1893BC64d976BF9E60D9B2",
  [ICluster.Devnet]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
  [ICluster.Testnet]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
  [ICluster.Local]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
};

export const BNB_PROGRAM_IDS: Record<ICluster, string> = {
  [ICluster.Mainnet]: "0x94d4646Bd307Bf91CB1893BC64d976BF9E60D9B2",
  [ICluster.Devnet]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
  [ICluster.Testnet]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
  [ICluster.Local]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
};

export const POLYGON_PROGRAM_IDS: Record<ICluster, string> = {
  [ICluster.Mainnet]: "0x94d4646Bd307Bf91CB1893BC64d976BF9E60D9B2",
  [ICluster.Devnet]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
  [ICluster.Testnet]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
  [ICluster.Local]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
};

export const BASE_PROGRAM_IDS: Record<ICluster, string> = {
  [ICluster.Mainnet]: "0x94d4646Bd307Bf91CB1893BC64d976BF9E60D9B2",
  [ICluster.Devnet]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
  [ICluster.Testnet]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
  [ICluster.Local]: "0x5Db7a43D20De64E3a3BC765334a477026FD13E7d",
};

export const EVM_ERROR_MATCH_REGEX = /execution reverted: ([A-Z_]+)/;

export const EVM_ERROR_MAP = {
  ECONTRACT_NOT_INIT: ContractErrorCode.ECONTRACT_NOT_INIT,
  EBAD_AMOUNT: ContractErrorCode.EBAD_AMOUNT,
  ENO_PERMISSIONS: ContractErrorCode.ENO_PERMISSIONS,
  EBADINPUT: ContractErrorCode.EBADINPUT,
  ECLOSED: ContractErrorCode.ECLOSED,
  EBAD_INPUT_AMOUNT_PER_PERIOD: ContractErrorCode.EBAD_INPUT_AMOUNT_PER_PERIOD,
  EBAD_INPUT_PAUSABLE: ContractErrorCode.EBAD_INPUT_PAUSABLE,
  EBAD_INPUT_UPDATE_RATE: ContractErrorCode.EBAD_INPUT_UPDATE_RATE,
  EBAD_INPUT_CLIFF_AMOUNT: ContractErrorCode.EBAD_INPUT_CLIFF_AMOUNT,
  EBAD_INPUT_PERIOD: ContractErrorCode.EBAD_INPUT_PERIOD,
  EBAD_INPUT_START: ContractErrorCode.EBAD_INPUT_START,
  EBAD_INSUFFICIENT_TOKEN_ALLOWANCE: ContractErrorCode.EBAD_INSUFFICIENT_TOKEN_ALLOWANCE,
  EBAD_INSUFFICIENT_WITHDRAWAL_FEES: ContractErrorCode.EBAD_INSUFFICIENT_WITHDRAWAL_FEES,
};
