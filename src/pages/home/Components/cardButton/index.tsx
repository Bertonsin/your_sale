import { Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../../Components/Card';

export default function CardButton() {
  const navigate = useNavigate();

  return (
    <VStack spacing={5} width="sm">
      <Button
        aria-label="card"
        w="full"
        h="full"
        p={2}
        borderWidth={1}
        borderRadius={68}
        borderColor="darkGray"
        _hover={{ boxShadow: '0px 16px 32px rgba(145, 158, 171, 0.25)' }}
        bg="white"
        onClick={() => navigate('/newOrder')}
      >
        <Card
          src="/newOrder.png"
          title="Nova Venda"
          info="Inicie uma nova venda"
        />
      </Button>

      <Button
        aria-label="card"
        w="full"
        h="full"
        p={3}
        borderWidth={1}
        borderRadius={68}
        borderColor="darkGray"
        _hover={{ boxShadow: '0px 16px 32px rgba(145, 158, 171, 0.25)' }}
        bg="white"
        onClick={() => navigate('/orderList')}
      >
        <Card
          src="/orderList.png"
          title="Lista de pedidos"
          info="Ver pedidos lançados"
        />
      </Button>
    </VStack>
  );
}
