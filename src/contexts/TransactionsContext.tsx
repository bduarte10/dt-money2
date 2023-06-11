import React, { createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
interface CreateTransactionType {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  fetchSummary: () => Promise<void>
  createTransactions: (data: CreateTransactionType) => Promise<void>
  summary: Transaction[]
  handleDelete: (id: string) => void
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [summary, setSummary] = useState<Transaction[]>([])

  const fetchSummary = async () => {
    const response = await api.get('/transactions')
    setSummary(response.data)
  }

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  async function createTransactions(data: CreateTransactionType) {
    const response = await api.post('/transactions', {
      ...data,
      createdAt: new Date(),
    })
    setTransactions((state) => [response.data, ...state])
    setSummary((state) => [...state, response.data])
  }

  function handleDelete(id: string) {
    api.delete(`/transactions/${id}`)
    setTransactions((state) =>
      state.filter((transaction) => transaction.id.toString() !== id),
    )
    setSummary((state) =>
      state.filter((transaction) => transaction.id.toString() !== id),
    )
  }

  useEffect(() => {
    fetchTransactions()
    fetchSummary()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        fetchSummary,
        createTransactions,
        summary,
        handleDelete,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
