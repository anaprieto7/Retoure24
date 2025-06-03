"use client";

import { Button, ButtonProps } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import { ReactNode } from "react";
import Tooltip from "@/components/tooltip";

interface ViewDetailsButtonProps extends ButtonProps {
  children?: ReactNode;
  tooltip?: string;
}

const ViewDetailsButton = ({ children = "Details", ...props }: ViewDetailsButtonProps) => {
  return (
    <Tooltip label="View Deatls of this Return">
        <Button
        size="xs"
        colorScheme="blue"
        variant="outline"
        _hover={{ bg: "blue.50" }}
        _active={{ bg: "blue.100" }}
        _focus={{ boxShadow: "outline" }}
        leftIcon={<FiEye />}
        borderRadius="md"
        fontWeight="medium"
        {...props}
        >
        {children}
        </Button>
    </Tooltip> 
  );
};

export default ViewDetailsButton;
