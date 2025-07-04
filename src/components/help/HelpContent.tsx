'use client';

import AccountHelp from './sections/AccountHelp';
import AddressHelp from './sections/AddressHelp';
import DistpacherHelp from './sections/DistpacherHelp';
import EmailHelp from './sections/EmailHelp';
import ReturnsHelp from './sections/ReturnsHelp';

type Section =
  | 'account'
  | 'address'
  | 'dispatchers'
  | 'email'
  | 'returns';

export default function HelpContent({ section }: { section: string }) {
  switch (section) {
    case 'account':
      return <AccountHelp />;
    case 'address':
      return <AddressHelp />;
    case 'dispatchers':
      return <DistpacherHelp />;
    case 'email':
      return <EmailHelp />;
    case 'returns':
      return <ReturnsHelp />;
    default:
      return <AccountHelp />;
  }
}
