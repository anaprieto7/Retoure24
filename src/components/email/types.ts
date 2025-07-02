export interface ActivationConfigProps {
  isActive: boolean;
  onToggleActive: (active: boolean) => void;
  emailFrom: string;
  onChangeEmailFrom: (email: string) => void;
  emailCCO: string;
  onChangeEmailCCO: (email: string) => void;
}

export interface EmailTemplate {
  id: string;
  key: "returnAccepted" | "returnDelivered" | "receivedWarehouse";
  subject: string;
  content: string;
}

export interface EmailTemplatesProps {
  templates: EmailTemplate[];
  onUpdateTemplate: (updated: EmailTemplate) => void;
}

export interface PlaceholdersInfoProps {}
