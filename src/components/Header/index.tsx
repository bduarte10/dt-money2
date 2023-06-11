import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [openNewTransactionModal, setOpenNewTransactionModal] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root
          open={openNewTransactionModal}
          onOpenChange={setOpenNewTransactionModal}
        >
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal setOpen={setOpenNewTransactionModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
