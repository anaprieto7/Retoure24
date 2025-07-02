// Simula cargar y guardar datos

export interface EmailTrackingConfig {
  isActive: boolean;
  emailFrom: string;
  emailCCO: string;
  templates: {
    id: string;
    key: string;
    subject: string;
    content: string;
  }[];
}

const mockData: EmailTrackingConfig = {
  isActive: true,
  emailFrom: "no-reply@empresa.com",
  emailCCO: "supervisor@empresa.com",
  templates: [
    {
      id: "1",
      key: "returnAccepted",
      subject: "Tu devolución ha sido aceptada",
      content: "Hola [[customer.name]], tu devolución [[order.id]] ha sido aceptada.",
    },
    {
      id: "2",
      key: "returnDelivered",
      subject: "Devolución entregada al courier",
      content: "Tu devolución está en camino al courier.",
    },
    {
      id: "3",
      key: "receivedWarehouse",
      subject: "Producto recibido en almacén",
      content: "Hemos recibido tu devolución en nuestro almacén.",
    },
  ],
};

export function fetchEmailTrackingConfig(): Promise<EmailTrackingConfig> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 1000);
  });
}

export function saveEmailTrackingConfig(data: EmailTrackingConfig): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      Object.assign(mockData, data); // Actualiza mock con nuevos datos
      resolve();
    }, 1000);
  });
}
