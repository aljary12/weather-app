import React from 'react';

import Routes from './navigator/root-navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}

export default App;
