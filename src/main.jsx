import React from "react";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  useIsRestoring,
} from "@tanstack/react-query";
import {
  PersistQueryClientProvider,
} from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

function AppWithRestoration() {
  const isRestoring = useIsRestoring();

  if (isRestoring) {
    return null;
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
      }}
    >
      <AppWithRestoration />
    </PersistQueryClientProvider>
  </React.StrictMode>
);