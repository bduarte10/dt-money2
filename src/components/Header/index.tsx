import {
  HeaderContainer,
  HeaderContent,
  HeaderLinks,
  NewTransactionButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'
import { UserButton } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

export function Header() {
  const [openNewTransactionModal, setOpenNewTransactionModal] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <HeaderLinks>
          <Dialog.Root
            open={openNewTransactionModal}
            onOpenChange={setOpenNewTransactionModal}
          >
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova Transação</NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal setOpen={setOpenNewTransactionModal} />
          </Dialog.Root>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: '45px ',
                  height: '45px',
                },
                userButtonTrigger: {
                  '&:focus': {
                    boxShadow: 'rgb(0 135 95) 0px 0px 0px 3px',
                  },
                },
              },
              baseTheme: dark,
            }}
          />
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  )
}
