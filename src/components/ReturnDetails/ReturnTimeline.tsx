"use client";

import {
  Box,
  VStack,
  HStack,
  Text,
  Circle,
  useColorModeValue,
  Icon,
  Button,
  Input,
  Avatar,
} from "@chakra-ui/react";
import {
  FiEdit3,
  FiCheck,
  FiTruck,
  FiPackage,
  FiXCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useReturnContext } from "@/context/useReturnContext";

export default function ReturnTimeline() {
  const { t } = useTranslation("return");
  const { returnData, currentStatus } = useReturnContext();
  const events = returnData.events || [];

  const [editedNotes, setEditedNotes] = useState<{ [key: string]: string }>({});
  const [editing, setEditing] = useState<{ [key: string]: boolean }>({});

  const lineColor = useColorModeValue("gray.300", "gray.600");
  const bgColor = useColorModeValue("white", "gray.800");

  const statusIcon = {
    Registered: FiEdit3,
    Approved: FiCheck,
    "in Transit": FiTruck,
    Received: FiPackage,
    Refunded: FiCheck,
    Rejected: FiXCircle,
    Cancelled: FiXCircle,
  };

  const statusColor = {
    Registered: "orange.500",
    Approved: "blue.500",
    "in Transit": "teal.500",
    Received: "teal.500",
    Refunded: "green.500",
    Rejected: "red.500",
    Cancelled: "gray.500",
  };

  const alreadyExists = events.some((e) => e.status === currentStatus);

  const generatedEvent = {
    id: "generated",
    date: new Date().toISOString(),
    status: currentStatus,
    note: t("timeline.status_changed_to", {
      status: t(`status_${currentStatus.replace(" ", "_").toLowerCase()}`),
    }),
    user: t("timeline.system_user"),
    userAvatar: "/user-icon.png",
  };

  const fullEvents = alreadyExists ? events : [...events, generatedEvent];

  const sortedEvents = [...fullEvents].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleSaveNote = (id: string) => {
    const updatedNote = editedNotes[id] || "";
    console.log("Guardar nota para", id, ":", updatedNote);
    setEditing((prev) => ({ ...prev, [id]: false }));
    // TODO: llamada a API para guardar nota
  };

  return (
    <Box>
      <Text fontWeight="bold" mb={3} fontSize="lg">
        {t("return_history")}
      </Text>
      <VStack align="start" spacing={4} position="relative">
        <Box
          position="absolute"
          top="14px"
          bottom="0"
          left="15px"
          width="2px"
          bg={lineColor}
          zIndex={0}
        />
        {sortedEvents.map((ev, idx) => {
          const IconComp = statusIcon[ev.status] || FiEdit3;
          const iconColor = statusColor[ev.status] || "gray.400";
          const label = t(`status_${ev.status.replace(" ", "_").toLowerCase()}`);
          const isLatest = idx === 0;

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
                  <Circle
                    size="28px"
                    bg={bgColor}
                    border="2px solid"
                    borderColor={iconColor}
                    color={iconColor}
                    zIndex={1}
                    aria-label={label}
                  >
                    <Icon as={IconComp} boxSize="18px" aria-hidden />
                  </Circle>
                </VStack>

                <Box pl={1} pb={4} w="100%">
                  <HStack justifyContent="space-between" w="100%">
                    <Text fontSize="sm" color="gray.500" fontWeight={isLatest ? "bold" : "normal"}>
                      {new Date(ev.date).toLocaleString()}
                    </Text>
                    {isLatest && (
                      <Text
                        fontSize="xs"
                        color="white"
                        bg="orange.400"
                        px={2}
                        py={0.5}
                        rounded="full"
                        fontWeight="bold"
                      >
                        {t("latest_update")}
                      </Text>
                    )}
                  </HStack>

                  <Text fontWeight={isLatest ? "bold" : "normal"} color={iconColor}>
                    {label}
                  </Text>

                  {!editing[ev.id] && (
                    <>
                      <Text fontSize="sm" color="gray.400" mt={1}>
                        {ev.note || t("no_note")}
                      </Text>

                      {ev.note && ev.user && (
                        <VStack align="start" spacing={1} mt={2}>
                          <Avatar name={ev.user} src={ev.userAvatar} size="xs" bg="gray.200" />
                          <Text fontSize="xs" color="gray.500">
                            {t("note_by")}: <strong>{ev.user}</strong>
                          </Text>
                        </VStack>
                      )}
                    </>
                  )}

                  {editing[ev.id] && (
                    <HStack mt={2}>
                      <Input
                        size="sm"
                        rounded="full"
                        value={editedNotes[ev.id] || ""}
                        onChange={(e) =>
                          setEditedNotes((prev) => ({
                            ...prev,
                            [ev.id]: e.target.value,
                          }))
                        }
                        placeholder={t("write_note")}
                        aria-label={t("write_note")}
                      />
                      <Button
                        size="sm"
                        colorScheme="orange"
                        onClick={() => handleSaveNote(ev.id)}
                        aria-label={t("save")}
                      >
                        {t("save")}
                      </Button>
                    </HStack>
                  )}

                  <Button
                    size="xs"
                    variant="link"
                    colorScheme="orange"
                    mt={1}
                    onClick={() => {
                      setEditing((prev) => ({ ...prev, [ev.id]: true }));
                      setEditedNotes((prev) => ({ ...prev, [ev.id]: ev.note || "" }));
                    }}
                    aria-label={t("add_note")}
                  >
                    {t("add_note")}
                  </Button>
                </Box>
              </HStack>
            </motion.div>
          );
        })}
      </VStack>
    </Box>
  );
}
// This component displays a timeline of events related to a return.
// It shows the status changes, notes, and user information for each event.
// The timeline is animated using Framer Motion and styled with Chakra UI.
// Users can add notes to each event, and the latest event is highlighted.