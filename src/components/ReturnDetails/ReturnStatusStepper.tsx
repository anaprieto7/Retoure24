"use client";
import {
  Box,
  Flex,
  Text,
  Circle,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Tooltip from "@/components/tooltip";
import { motion } from "framer-motion";
import {
  FiFilePlus,
  FiCheckCircle,
  FiPackage,
  FiDollarSign,
  FiXCircle,
  FiSlash,
} from "react-icons/fi";

interface ReturnStatusStepperProps {
  status: "Registered" | "Approved" | "Received" | "Refunded" | "Rejected" | "Cancelled";
}

const MotionCircle = motion(Circle);

const iconsMap: Record<string, JSX.Element> = {
  Registered: <FiFilePlus />,
  Approved: <FiCheckCircle />,
  Received: <FiPackage />,
  Refunded: <FiDollarSign />,
  Rejected: <FiXCircle />,
  Cancelled: <FiSlash />,
};

export default function ReturnStatusStepper({ status }: ReturnStatusStepperProps) {
  const { t } = useTranslation();

  const isRejected = status === "Rejected";
  const isCancelled = status === "Cancelled";

  const baseSteps = [
    {
      key: "Registered",
      label: t("status_registered"),
      tooltip: t("status_registered_tooltip")
    },
    {
      key: "Approved",
      label: t("status_approved"),
      tooltip: t("status_approved_tooltip")
    },
    {
      key: "Received",
      label: t("status_received"),
      tooltip: t("status_received_tooltip")
    },
    {
      key: "Refunded",
      label: t("status_refunded"),
      tooltip: t("status_refunded_tooltip")
    }
  ];

  const steps = isRejected
    ? [...baseSteps.slice(0, 1), {
        key: "Rejected",
        label: t("status_rejected"),
        tooltip: t("status_rejected_tooltip")
      }]
    : isCancelled
    ? [...baseSteps.slice(0, 1), {
        key: "Cancelled",
        label: t("status_cancelled"),
        tooltip: t("status_cancelled_tooltip")
      }]
    : baseSteps;

  const currentStepIndex = steps.findIndex(step => step.key === status);

  const activeColor = useColorModeValue("blue.400", "blue.300");
  const completedColor = useColorModeValue("green.400", "green.300");
  const defaultColor = useColorModeValue("gray.300", "gray.600");
  const errorColor = useColorModeValue("red.400", "red.300");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <VStack spacing={4} w="100%">
      <HStack justify="space-between" w="100%">
        {steps.map((step, idx) => {
          const isActive = idx === currentStepIndex;
          const isCompleted = idx < currentStepIndex;
          const isPending = idx > currentStepIndex;
          const isErrorStep = step.key === "Rejected" || step.key === "Cancelled";

          const bgColor = isErrorStep
            ? errorColor
            : isCompleted
            ? completedColor
            : isActive
            ? activeColor
            : defaultColor;

          const color = isCompleted || isActive || isErrorStep ? "white" : "gray.500";

          return (
            <Flex key={step.key} direction="column" align="center" flex="1">
              <Tooltip label={step.tooltip}>
                <MotionCircle
                  size="36px"
                  bg={bgColor}
                  color={color}
                  fontWeight="bold"
                  cursor="pointer"
                  animate={isActive && !isErrorStep ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  {iconsMap[step.key]}
                </MotionCircle>
              </Tooltip>
              <Text
                mt={2}
                fontSize="sm"
                fontWeight={isActive ? "bold" : "normal"}
                color={textColor}
                textAlign="center"
                w="70px"
              >
                {step.label}
              </Text>
              {idx < steps.length - 1 && (
                <Box
                  h="2px"
                  w="100%"
                  bg={isCompleted ? completedColor : defaultColor}
                  mt="-18px"
                  mb="12px"
                  zIndex={-1}
                />
              )}
            </Flex>
          );
        })}
      </HStack>

      {/* Leyenda de colores */}
      <HStack spacing={2} mt={2} wrap="wrap">
        <HStack>
          <Circle size="12px" bg={completedColor} />
          <Text fontSize="xs" color={textColor}>{t("status_legend_completed")}</Text>
        </HStack>
        <HStack>
          <Circle size="12px" bg={activeColor} />
          <Text fontSize="xs" color={textColor}>{t("status_legend_active")}</Text>
        </HStack>
        <HStack>
          <Circle size="12px" bg={defaultColor} />
          <Text fontSize="xs" color={textColor}>{t("status_legend_pending")}</Text>
        </HStack>
        <HStack>
          <Circle size="12px" bg={errorColor} />
          <Text fontSize="xs" color={textColor}>{t("status_legend_error")}</Text>
        </HStack>
      </HStack>
    </VStack>
  );
}
