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
        borderColor="#DADADA"
        _hover={{ boxShadow: '4px 4px 8px 2px rgba(0,0,0,0.2)' }}
        bg="#FFFFFF"
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
        borderColor="#DADADA"
        _hover={{ boxShadow: '4px 4px 8px 2px rgba(0,0,0,0.2)' }}
        bg="#FFFFFF"
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
