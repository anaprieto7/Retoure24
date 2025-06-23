import { Box, Flex, Text, Circle, HStack, useColorModeValue } from "@chakra-ui/react";

interface ReturnStatusStepperProps {
  currentStep: number; // 0, 1, 2, 3...
}

const steps = [
  "Solicitada",
  "En tránsito",
  "Recibida",
  "Resuelta"
];

export default function ReturnStatusStepper({ currentStep }: ReturnStatusStepperProps) {
  const activeColor = useColorModeValue("orange.400", "orange.300");
  const completedColor = useColorModeValue("green.400", "green.300");
  const defaultColor = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <HStack justify="space-between" w="100%">
      {steps.map((step, idx) => (
        <Flex key={step} direction="column" align="center" flex="1">
          <Circle
            size="32px"
            bg={
              idx < currentStep
                ? completedColor
                : idx === currentStep
                ? activeColor
                : defaultColor
            }
            color={idx <= currentStep ? "white" : "gray.500"}
            fontWeight="bold"
          >
            {idx + 1}
          </Circle>
          <Text
            mt={2}
            fontSize="sm"
            fontWeight={idx === currentStep ? "bold" : "normal"}
            color={textColor}
            textAlign="center"
            w="70px"
          >
            {step}
          </Text>
          {idx < steps.length - 1 && (
            <Box
              h="2px"
              w="100%"
              bg={idx < currentStep ? completedColor : defaultColor}
              mt="-18px"
              mb="12px"
              zIndex={-1}
            />
          )}
        </Flex>
      ))}
    </HStack>
  );
}
