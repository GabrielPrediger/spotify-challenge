import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import './i18n';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { toast } from 'sonner';

const globalErrorHandler = (error: unknown) => {
  const message =
    error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
  toast.error('Falha na Requisição', {
    description: message,
  });
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: globalErrorHandler,
  }),
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback="Carregando traduções...">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  </StrictMode>,
);
