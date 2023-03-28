import { Box, Text } from '@chakra-ui/react';

export default function TutorialTexts() {
  return (
    <Box w={['sm', 'container.sm']} textStyle="bodyText">
      <Box mb={8} color="#797979">
        <Text>
          Você poderá iniciar sua venda clicando em
          <strong> NOVA VENDA </strong>
          assim preenchendo os dados necessários e gerando um novo pedido
        </Text>
      </Box>
      <Box>
        <Text color="#797979">
          Você poderá visualizar todas as vendas criadas clicando em
          <strong> LISTA DE PEDIDOS </strong> assim podendo visualizar a
          listagem de pedidos e verificar os detalhes do pedido criado.
        </Text>
      </Box>
    </Box>
  );
}
