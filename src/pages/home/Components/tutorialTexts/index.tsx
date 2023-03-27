import { Box, Text } from '@chakra-ui/react';

export default function TutorialTexts() {
  return (
    <Box w={['sm', 'container.sm']} textStyle="bodyText">
      <Box mb={8} color="#797979">
        <Text>
          Voce podera iniciar sua venda clicando em
          <strong> NOVA VENDA </strong>
          assim preenchendos os dados necessarios e gerando um novo pedido
        </Text>
      </Box>
      <Box>
        <Text color="#797979">
          Voce podera visualizar todas vendas criadas clicando em
          <strong> LISTA DE PEDIDOS </strong> assim podendo visualizar a
          listagem de pedidos e verificar detalhe do pedido criado.
        </Text>
      </Box>
    </Box>
  );
}
