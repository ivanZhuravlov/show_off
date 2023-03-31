import React, { FC, useEffect, useState } from 'react'
import { EnumWalletsCreateInputNetwork, EnumWalletsItemBlockchain } from 'apis/proj'
import { MultiSelectBlocks } from 'components/miltiselect-blocks'
import { getWalletBlockchainNetworksSelectPairs } from '@proj/recievers'

export interface MultiSelectNetworkProps {
  value: { option: string | undefined }
  onChange: (event: { option: string }) => void
  dependencyBlockChain: EnumWalletsItemBlockchain
  style?: object
  className?: string
}
interface IFilterOptions {
  name: string
  value: string
}

export const MultiSelectNetworks: FC<MultiSelectNetworkProps> = (props) => {
  const { dependencyBlockChain } = props
  const [filterOptions, setFilterOptions] = useState<IFilterOptions[]>([])
  const { option } = props.value

  useEffect(() => {
    const newFilterOptions = getWalletBlockchainNetworksSelectPairs(dependencyBlockChain)
    // always default value for network is mainnet
    props.onChange({ option: EnumWalletsCreateInputNetwork.mainnet })
    setFilterOptions(newFilterOptions)
  }, [dependencyBlockChain])

  return (
    <MultiSelectBlocks
      filterOptions={filterOptions}
      value={{ option }}
      onChange={(e) => props.onChange(e)}
      optionClassName={'network-option'}
      className={props.className}
      buttonClassName={'status-select-button'}
      buttonStyles={{ display: 'flex', maxHeight: '33px', width: '100%', minWidth: '100px' }}
    />
  )
}
