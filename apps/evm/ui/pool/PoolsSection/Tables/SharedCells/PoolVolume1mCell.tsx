import { formatUSD } from '@sushiswap/format'
import { FC } from 'react'

import { Row } from './types'

export const PoolVolume1mCell: FC<Row<{ volume1m: string | number }>> = ({ row }) => {
  const volume = formatUSD(row.volume1m)

  return (
    <span className="text-sm text-right text-gray-900 dark:text-slate-50">
      {volume.includes('NaN') ? '$0.00' : volume}
    </span>
  )
}
