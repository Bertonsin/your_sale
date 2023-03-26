import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';
import { customTheme } from '../themes';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/ubuntu/700.css';
import { OrderContextProvider } from '../contexts/orderContext';
import { ModalContextProvider } from '../contexts/modalContext';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <ModalContextProvider>
        <OrderContextProvider>
          <RouterProvider router={router} />
        </OrderContextProvider>
      </ModalContextProvider>
    </ChakraProvider>
  );
}

export default App;
