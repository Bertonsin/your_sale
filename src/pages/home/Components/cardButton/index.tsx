import { Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Card from '../../../../Components/Card';

export default function CardButton() {
  return (
    <VStack spacing={5} width="sm">
      <Link
        to="/newOrder"
        style={{ width: '100%', height: '100%', marginRight: '10em' }}
      >
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
        >
          <Card
            src="/newOrder.png"
            title="Nova Venda"
            info="Inicie uma nova venda"
          />
        </Button>
      </Link>
      <Link
        to="/orderList"
        style={{ width: '100%', height: '100%', marginRight: '10em' }}
      >
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
        >
          <Card
            src="/orderList.png"
            title="Nova Venda"
            info="Inicie uma nova venda"
          />
        </Button>
      </Link>
    </VStack>
  );
}
