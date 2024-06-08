import React from 'react';

import Routes from './navigator/root-navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
