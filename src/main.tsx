import { StrictMode, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import './main.css';

interface AppContext {
  userId: number;
}

const queryClient = new QueryClient();
const rootElement = document.getElementById('projects-dashboard')!;
export const AppContext = createContext<AppContext | null>(null);

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContext value={{ userId: Number(rootElement.dataset.userId) }}>
        <App />
      </AppContext>
    </QueryClientProvider>
  </StrictMode>
);
