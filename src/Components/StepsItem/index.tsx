import { Flex, Text } from '@chakra-ui/react';
import { StepItemProps } from './Types/StepsItemProps';

export default function StepsItem({
  stepName,
  stepPosition,
  currentStep,
}: StepItemProps) {
  return (
    <Flex
      key={stepName}
      direction="column"
      alignItems="center"
      textAlign="center"
      w="sm"
    >
      <Flex
        w="3em"
        direction="column"
        alignItems="center"
        zIndex={1}
        backgroundColor="lightGray"
        _after={
          stepPosition === currentStep + 1 && currentStep === 1
            ? {
                content: `""`,
                width: 'sm',
                backgroundColor: '#00297B',
                height: '1px',
                position: 'absolute',
                top: 3,
                zIndex: 0,
              }
            : {}
        }
      >
        <Flex
          w="3em"
          direction="column"
          alignItems="center"
          zIndex={2}
          backgroundColor="lightGray"
          _before={
            stepPosition === currentStep + 1 && currentStep === 2
              ? {
                  content: `""`,
                  width: '200px',
                  backgroundColor: '#00297B',
                  height: '1px',
                  position: 'absolute',
                  top: 3,
                  right: 190,
                }
              : {}
          }
        >
          <Text
            color={stepPosition === currentStep + 1 ? 'white' : 'gray'}
            bg={stepPosition === currentStep + 1 ? 'primary' : '#A3A3A3'}
            borderRadius="50%"
            w="1.6em"
          >
            {stepPosition}
          </Text>
          <Text
            color={stepPosition === currentStep + 1 ? 'primary' : '#A3A3A3'}
          >
            {stepName}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
