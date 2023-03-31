import React, { FC } from 'react'
import { EnumCryptoMonitorWalletsItemBlockchain } from 'apis/proj'
import { MultiSelectBlocks } from 'components/miltiselect-blocks'
import { WalletBlockchainPrettyNames } from '@proj/types'

export interface MultiSelectBlockChainProps {
  value: { option: string | undefined }
  onChange: (event: { option: string }) => void
  style?: object
  className?: string
}

interface IFilterOptions {
  name: string
  value: string
}

export const MultiSelectBlockChain: FC<MultiSelectBlockChainProps> = (props) => {
  const { option } = props.value
  const filterOptions: IFilterOptions[] = [
    { name: WalletBlockchainPrettyNames.ETHEREUM, value: EnumCryptoMonitorWalletsItemBlockchain.ethereum },
    { name: WalletBlockchainPrettyNames.TRON, value: EnumCryptoMonitorWalletsItemBlockchain.tron },
    { name: WalletBlockchainPrettyNames.BITCOIN, value: EnumCryptoMonitorWalletsItemBlockchain.bitcoin },
  ]

  return (
    <MultiSelectBlocks
      filterOptions={filterOptions}
      value={{ option }}
      onChange={(e) => props.onChange(e)}
      optionClassName={'blockchain-option'}
      className={props.className}
      buttonClassName={'status-select-button'}
      buttonStyles={{ display: 'flex', maxHeight: '33px', width: '100%', minWidth: '100px' }}
    />
  )
}
