import { FormControl, Flex, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../../../../contexts/modalContext/context/modalContext';
import { OrderContext } from '../../../../contexts/orderContext/Context/orderContext';
import { addOrder } from '../../../../services/addOrder';
import { HandleStepChange } from '../../../../services/handleStepChange';
import { ButtonsContainerProps } from './Types/ButtonsContainerProps';

export default function ButtonsContainer({
  ListComponents,
  currentComponent,
  currentStep,
  changeStep,
}: ButtonsContainerProps) {
  const navigate = useNavigate();
  const { formData, cart, setCart } = useContext(OrderContext);
  const { openCartModal } = useContext(ModalContext);

  return (
    <FormControl>
      {currentComponent === ListComponents[2] ? (
        <Flex
          w="full"
          textStyle="buttonText"
          justifyContent="space-between"
          mt={5}
          mb={5}
        >
          <Button
            variant="outline"
            onClick={(e) => changeStep(currentStep - 1, e)}
          >
            Voltar
          </Button>

          <Button
            type="submit"
            variant="solid"
            onClick={(e) => {
              addOrder(cart);
              navigate('/');
              setCart([]);
              changeStep(currentStep - 2, e);
            }}
          >
            Salvar
          </Button>
        </Flex>
      ) : (
        <Flex
          w="full"
          textStyle="buttonText"
          justifyContent="space-between"
          mt={5}
          mb={5}
        >
          <Button
            variant="outline"
            onClick={(e) => changeStep(currentStep - 1, e)}
          >
            Voltar
          </Button>

          {cart?.length > 0 && currentStep + 1 === 2 && (
            <Button variant="outline" onClick={openCartModal}>
              Carrinho
            </Button>
          )}
          <Button
            type="submit"
            variant="solid"
            onClick={(event) => {
              HandleStepChange({
                changeStep,
                formData,
                currentStep,
                currentComponent,
                event,
                ListComponents,
                cart,
              });
            }}
          >
            Continuar
          </Button>
        </Flex>
      )}
    </FormControl>
  );
}
