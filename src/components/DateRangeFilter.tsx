"use client";

import React, { useRef, useState } from "react";
import { Box, Input, InputGroup, InputRightElement, IconButton, useColorModeValue } from "@chakra-ui/react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { CloseIcon, CalendarIcon } from "@chakra-ui/icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DateRangeFilterProps {
  value: { startDate: Date | null; endDate: Date | null };
  onChange: (range: { startDate: Date | null; endDate: Date | null }) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ value, onChange }) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShow(false);
    };
    if (show) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [show]);

  let inputValue = "";
  if (value.startDate && value.endDate) {
    inputValue = `${format(value.startDate, "MMM dd, yyyy")} - ${format(value.endDate, "MMM dd, yyyy")}`;
  } else if (value.startDate) {
    inputValue = format(value.startDate, "MMM dd, yyyy");
  }

  return (
    <Box position="relative" ref={ref} maxW={{ base: "100%", sm: "120px", md: "280px", lg:"350px" }} width="100%">
      <InputGroup maxW="100%">
        <Input
          readOnly
          placeholder="Select date range"
          value={inputValue}
          onClick={() => setShow((prev) => !prev)}
          cursor="pointer"
          pr={value.startDate && value.endDate ? "2.5rem" : "2rem"}
          fontSize="sm"
          bg={useColorModeValue("white", "gray.900")}
          color={useColorModeValue("gray.800", "gray.100")}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          _placeholder={{ color: useColorModeValue("gray.400", "gray.400") }}
          _hover={{ borderColor: useColorModeValue("blue.300", "blue.600") }}
          _focus={{
            borderColor: useColorModeValue("blue.400", "blue.500"),
            boxShadow: "0 0 0 1px #FA8801",
          }}
        />
        {value.startDate && value.endDate && (
          <InputRightElement width="2.5rem">
            <IconButton
              aria-label="Clear"
              icon={<CloseIcon boxSize={3} />}
              variant="ghost"
              size="sm"
              onClick={() => onChange({ startDate: null, endDate: null })}
              tabIndex={-1}
            />
          </InputRightElement>
        )}
        {(!value.startDate || !value.endDate) && (
          <InputRightElement width="2rem">
            <CalendarIcon color="gray.400" />
          </InputRightElement>
        )}
      </InputGroup>
      {show && (
        <Box position="absolute" zIndex={20} top="44px" left={0} bg="white" boxShadow="xl" borderRadius="md">
          <DateRange
            ranges={[
              {
                startDate: value.startDate || new Date(),
                endDate: value.endDate || new Date(),
                key: "selection"
              }
            ]}
            onChange={(ranges) => {
              const sel = ranges.selection;
              onChange({ startDate: sel.startDate, endDate: sel.endDate });
            }}
            moveRangeOnFirstSelection={false}
            rangeColors={["#FA8801"]}
            showMonthAndYearPickers
            editableDateInputs
            showSelectionPreview
            showDateDisplay={false}
            direction="horizontal"
            maxDate={new Date("2100-01-01")}
          />
        </Box>
      )}
    </Box>
  );
};

export default DateRangeFilter;
// This component provides a date range filter using the react-date-range library.
// It allows users to select a start and end date, with an option to clear the selection.
// The selected date range is displayed in an input field, and the calendar popup can be toggled by clicking the input.
// The component uses Chakra UI for styling and layout, ensuring a responsive design.
// The date range is formatted using date-fns for better readability.
// The component is designed to be reusable and can be integrated into any page that requires date filtering functionality.
// It handles clicks outside the component to close the date picker, ensuring a smooth user experience.
// The date range filter is useful for filtering data based on specific date ranges, such as in a return list or transaction history.
// It can be easily customized or extended to fit specific requirements, such as changing the date format or adding additional features.
// The component is optimized for performance and usability, making it a valuable addition to any React application that requires date filtering capabilities.
// The DateRangeFilter component is a reusable date range picker built with React and Chakra UI.
// It allows users to select a date range and displays the selected dates in an input field.
// The component uses the react-date-range library for the date picker functionality and date-fns for date formatting.
// It includes features such as:
// - Click-to-toggle date picker visibility
// - Clear button to reset the selected date range
// - Responsive design with Chakra UI
// - Click outside to close the date picker
// This component can be integrated into any React application that requires date range filtering, such as in a return list or transaction history page.
// It is designed to be user-friendly and visually appealing, providing a smooth experience for selecting date ranges.