import { DynamicToast, store } from '@/lib'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StoreProvider, useStoreRehydrated } from 'easy-peasy'

const queryClient = new QueryClient({
  defaultOptions: {},
})

const WaitForStateRehydration = ({ children }) => {
  const isRehydrated = useStoreRehydrated()
  return isRehydrated ? children : null
}

const MainContainer = ({ children }) => {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <DynamicToast />
        <WaitForStateRehydration>{children}</WaitForStateRehydration>
      </QueryClientProvider>
    </StoreProvider>
  )
}

export default MainContainer
