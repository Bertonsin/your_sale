import { ChakraProvider } from '@chakra-ui/react';
import RoutesApp from '../routes';
import { customTheme } from '../themes';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/ubuntu/700.css';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <RoutesApp />
    </ChakraProvider>
  );
}

export default App;
