import {
  Box,
  VStack,
  HStack,
  Text,
  Circle,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FiEdit3, FiTruck, FiPackage, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

interface TimelineEvent {
  id: string;
  date: string;
  status: string;
  note?: string;
}

interface ReturnTimelineProps {
  events: TimelineEvent[];
}

export default function ReturnTimeline({ events }: ReturnTimelineProps) {
  const lineColor = useColorModeValue("gray.300", "gray.600");
  const activeColor = useColorModeValue("orange.400", "orange.300");

  const statusIcon = {
  Solicitada: FiEdit3,
  "En tránsito": FiTruck,
  Recibida: FiPackage,
  Resuelta: FiCheckCircle,
};

const statusColor = {
  Solicitada: "orange.400",
  "En tránsito": "blue.400",
  Recibida: "teal.400",
  Resuelta: "green.400",
};

  return (
    <Box>
      <Text fontWeight="bold" mb={3} fontSize="lg">Historial de la devolución</Text>
      <VStack  align="start" spacing={4} position="relative">
        {events.map((ev, idx) => {
          const IconComp = statusIcon[ev.status] || FiEdit3;
          const iconColor = statusColor[ev.status] || "gray.400";
          return (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.09, type: "spring", stiffness: 60 }}
              style={{ width: "100%" }}
            >
              <HStack align="start" spacing={3} w="100%" position="relative">
                <VStack position="relative" spacing={0} align="center" minW="24px">
                  {/* Línea superior */}
                  {idx > 0 && (
                    <Box
                      w="2px"
                      h="18px"
                      bg={lineColor}
                      position="absolute"
                      top={-18}
                      left="50%"
                      transform="translateX(-50%)"
                      zIndex={0}
                    />
                  )}
                  {/* Icono del evento */}
                  <Circle
                    size="28px"
                    bg={useColorModeValue("white", "gray.800")}
                    border="2px solid"
                    borderColor={iconColor}
                    color={iconColor}
                    zIndex={1}
                  >
                    <Icon as={IconComp} boxSize="18px" />
                  </Circle>
                  {/* Línea inferior */}
                  {idx < events.length - 1 && (
                    <Box
                      w="2px"
                      h="100%"
                      flex="1"
                      bg={lineColor}
                      position="absolute"
                      top="28px"
                      left="50%"
                      transform="translateX(-50%)"
                      zIndex={0}
                    />
                  )}
                </VStack>
                {/* Info del evento */}
                <Box pl={1} pb={4}>
                  <Text fontSize="sm" color="gray.500" fontWeight={idx === 0 ? "bold" : "normal"}>
                    {ev.date}
                  </Text>
                  <Text fontWeight={idx === 0 ? "bold" : "normal"} color={iconColor}>
                    {ev.status}
                    {ev.note && (
                      <Text as="span" color="gray.400" fontWeight="normal"> — {ev.note}</Text>
                    )}
                  </Text>
                </Box>
              </HStack>
            </motion.div>
          );
        })}
      </VStack>
    </Box>
  );
}
