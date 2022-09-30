import Provider from './context/provider';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Router />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
