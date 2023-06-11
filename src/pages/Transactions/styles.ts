import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    &:first-child {
      border-radius: 6px 0 0 6px;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 0;
      color: ${(props) => props.theme['red-300']};
      &:hover {
        color: ${(props) => props.theme['red-500']};
      }
    }
  }
  @media (max-width: 768px) {
    tr {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 1rem 0;
    }
    td {
      font-size: 0.8rem;
      padding: 1rem;
      &:first-child {
        min-width: 210px;
        border-radius: 6px 0 0 0px;
      }
      &:nth-child(2) {
        border-radius: 0px 6px 0px 0px;
      }
      &:nth-child(3) {
        border-radius: 0px 0px 0px 6px;
      }
      &:last-child {
        border-radius: 0px 0px 6px 0px;
      }
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
