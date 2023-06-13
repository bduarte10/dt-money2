import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { dark } from '@clerk/themes'
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react'
import { BrowserRouter, useNavigate, Routes, Route } from 'react-router-dom'
import { ptBR } from '@clerk/localizations'

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
console.log(import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY)
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY

function ClerkProviderWithRoutes() {
  const navigate = useNavigate()

  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        baseTheme: dark,
      }}
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<SignIn routing="path" path="/" />} />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/app"
          element={
            <>
              <SignedIn>
                <Transactions />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  )
}
export function App() {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <ThemeProvider theme={defaultTheme}>
          <ClerkProviderWithRoutes />
          <GlobalStyles />
        </ThemeProvider>
      </TransactionsProvider>
    </BrowserRouter>
  )
}
