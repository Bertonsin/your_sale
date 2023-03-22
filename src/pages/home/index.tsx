import { Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';
import Header from '../../Components/Header';
import TutorialTexts from './Components/tutorialTexts';

export default function Home() {
  return (
    <Stack
      height="100svh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      backgroundColor="#F2F2F2"
    >
      <Header />
      <Stack
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        width="80%"
      >
        <TutorialTexts />
        <Stack
          spacing={5}
          justifyContent="space-between"
          alignItems="center"
          width="40%"
          flexWrap="wrap"
          pr={20}
        >
          <Card
            src="/newOrder.png"
            title="Nova Venda"
            info="Inicie uma nova venda"
            to="/newOrder"
          />

          <Card
            src="/orderList.png"
            title="Nova Venda"
            info="Inicie uma nova venda"
            to="/orderList"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
