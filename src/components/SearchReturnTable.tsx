"use client";

import React, { useState } from "react";
import { Input, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import ReturnTable, { ReturnItem } from "@/components/ReturnTable";

interface SearchReturnTableProps {
  returns: ReturnItem[];
  heading?: string;
}

const SearchReturnTable: React.FC<SearchReturnTableProps> = ({ returns }) => {
  const [search, setSearch] = useState("");

  const filteredReturns = returns.filter(item =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box maxW="100%" px={{ base: 2, md: 8 }} py={4}>
      <Input
        fontSize="sm"
        placeholder="Search by any field..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        w={{ base: "100%", sm: "350px" }}
        maxW="100%"
        mb={6}
        size="md"
        borderRadius="md"
        boxShadow="sm"
        
      />

      <ReturnTable returns={filteredReturns} />
    </Box>
  );
};

export default SearchReturnTable;
// export default SearchReturnTable;