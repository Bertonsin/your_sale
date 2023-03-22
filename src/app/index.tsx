import { ChakraProvider } from '@chakra-ui/react';
import RoutesApp from '../routes';
import { customTheme } from '../themes';
import '@fontsource/inter';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <RoutesApp />
    </ChakraProvider>
  );
}

export default App;
