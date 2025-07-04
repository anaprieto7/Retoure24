'use client';

import { Accordion, Text } from '@chakra-ui/react';
import HelpAccordion from '../HelpAccordion';
import { FiUser, FiLink, FiUsers } from 'react-icons/fi';

export default function AccountHelp() {
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <HelpAccordion title="1. Account Information" icon={FiUser}>
        <Text mb={2}>You can update the following info:</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>Name and surname</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
        </ul>
      </HelpAccordion>

      <HelpAccordion title="2. Options for accessing the returns page." icon={FiLink}>
        <Text>You can configure the access settings here.</Text>
      </HelpAccordion>

      <HelpAccordion title="3. User list" icon={FiUsers}>
        <Text>This section shows all users with access...</Text>
      </HelpAccordion>
    </Accordion>
  );
}
