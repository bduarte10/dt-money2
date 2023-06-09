import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useMemo } from 'react'

export const useSummary = () => {
  const summary = useContextSelector(TransactionsContext, (c) => c.summary)

  const summaryCalc = useMemo(() => {
    return summary.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }
        return acc
      },
      { income: 0, outcome: 0, total: 0 },
    )
  }, [summary])
  return summaryCalc
}
