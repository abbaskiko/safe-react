import { List, Map, RecordOf } from 'immutable'
import { Confirmation } from './confirmation'
import { GnosisSafe } from 'src/types/contracts/GnosisSafe.d'
import { DataDecoded, DecodedParams, Transfer } from './transactions'

export enum TransactionTypes {
  INCOMING = 'incoming',
  OUTGOING = 'outgoing',
  SETTINGS = 'settings',
  CUSTOM = 'custom',
  CREATION = 'creation',
  CANCELLATION = 'cancellation',
  UPGRADE = 'upgrade',
  TOKEN = 'token',
  COLLECTIBLE = 'collectible',
}
export type TransactionTypeValues = typeof TransactionTypes[keyof typeof TransactionTypes]

export enum TransactionStatus {
  AWAITING_YOUR_CONFIRMATION = 'awaiting_your_confirmation',
  AWAITING_CONFIRMATIONS = 'awaiting_confirmations',
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  AWAITING_EXECUTION = 'awaiting_execution',
  PENDING = 'pending',
}
export type TransactionStatusValues = typeof TransactionStatus[keyof typeof TransactionStatus]

export enum PendingActionType {
  CONFIRM = 'confirm',
  REJECT = 'reject',
}
export type PendingActionValues = PendingActionType[keyof PendingActionType]

export type TransactionProps = {
  baseGas: number
  blockNumber?: number | null
  cancelled?: boolean
  confirmations: List<Confirmation>
  created: boolean
  creator: string
  creationTx: boolean
  customTx: boolean
  data?: string | null
  dataDecoded: DataDecoded | null
  decimals?: (number | string) | null
  decodedParams: DecodedParams | null
  executionDate?: string | null
  executionTxHash?: string | null
  executor: string
  factoryAddress: string
  fee?: string
  gasPrice: string
  gasToken: string
  isCancellationTx: boolean
  isCollectibleTransfer: boolean
  isExecuted: boolean
  isPending?: boolean
  isSuccessful: boolean
  isTokenTransfer: boolean
  masterCopy: string
  modifySettingsTx: boolean
  multiSendTx: boolean
  nonce?: number | null
  operation: number
  origin: string | null
  ownersWithPendingActions: Map<PendingActionValues, List<any>>
  recipient: string
  refundParams: any
  refundReceiver: string
  safeTxGas: number
  safeTxHash: string
  setupData: string
  status?: TransactionStatus
  submissionDate?: string | null
  symbol?: string | null
  transactionHash: string | null
  transfers?: Transfer[]
  type: TransactionTypes
  upgradeTx: boolean
  value: string
}

export type Transaction = RecordOf<TransactionProps>

export type TxArgs = {
  baseGas: number
  data?: string | null
  gasPrice: string
  gasToken: string
  nonce: number
  operation: number
  refundReceiver: string
  safeInstance: GnosisSafe
  safeTxGas: number
  sender?: string
  sigs: string
  to: string
  valueInWei: string
}