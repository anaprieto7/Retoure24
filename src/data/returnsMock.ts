const returnsMock = [
  {
    id: "12345",
    status: "Offen",
    date: "2025-06-06",
    products: [
      {
        id: "1",
        name: "Samsung Galaxy S21",
        sku: "SGS21-128BL",
        quantity: 1,
        reason: "Mikrofon funktioniert nicht",
        status: "Offen",
        imageUrl: "https://dummyimage.com/64x64/ccc/fff&text=SG",
        comments: [],
        price: 125.5,
        history: []
      }
    ],
    client: {
      name: "Ana Prieto",
      email: "ana@email.com",
      phone: "+49 123 456 789",
      address: "Musterweg 1, 24103 Kiel, Deutschland",
      avatarUrl: "https://randomuser.me/api/portraits/women/43.jpg",
      customerId: "KUNDE-2025-001"
    },
    subtotal: 500,
    deductions: 20,
    total: 480
  },
  {
    id: "23456",
    status: "Approved",
    date: "2025-06-02",
    products: [
      {
        id: "2",
        name: "Xiaomi Redmi Note 10",
        sku: "REDMI10-64GB",
        quantity: 2,
        reason: "Falsches Modell geliefert",
        imageUrl: "https://dummyimage.com/64x64/aaa/fff&text=XR",
        comments: [],
        price: 125.5,
        history: []
      }
    ],
    client: {
      name: "Kalle Junge",
      email: "kalle@email.com",
      phone: "+49 987 654 321",
      address: "Anderer Weg 2, 24103 Kiel, Deutschland",
      avatarUrl: "https://randomuser.me/api/portraits/men/44.jpg",
      customerId: "KUNDE-2025-002"
    },
    subtotal: 200,
    deductions: 0,
    total: 200,
    events: [
      {
        id: "1",
        date: "2025-06-01 08:23",
        status: "Registered",
        note: "Cliente envió la solicitud de devolución",
        user: "Bruce Willies",
        userAvatar: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
        id: "2",
        date: "2025-06-02 11:15",
        status: "Approved",
        note: "Solicitud aprobada, esperando recepción",
        user: "Bruce Willies",
        userAvatar: "https://randomuser.me/api/portraits/men/1.jpg"
      }
    ]
  },
  {
    id: "34567",
    status: "Rejected",
    date: "2025-06-05",
    products: [
      {
        id: "3",
        name: "Apple AirPods Pro",
        sku: "APPRO-2025",
        quantity: 1,
        reason: "Producto abierto y usado",
        imageUrl: "https://dummyimage.com/64x64/eee/fff&text=AP",
        comments: [],
        history: [],
        price: 259.99,
      },
      {
      id: "1",
      name: "Zapatos deportivos",
      sku: "ZAP-123",
      quantity: 2,
      reason: "Talla incorrecta",
      imageUrl: "https://dummyimage.com/64x64/eee/fff&text=ZP",
      price: 59.99,
    }
    ],
    client: {
      name: "Laura Meier",
      email: "laura@email.com",
      phone: "+49 111 222 333",
      address: "Ringstraße 10, 24103 Kiel, Deutschland",
      avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg",
      customerId: "KUNDE-2025-003"
    },
    subtotal: 150,
    deductions: 0,
    total: 150,
    events: [
      {
        id: "1",
        date: "2025-06-04 09:00",
        status: "Registered",
        note: "Cliente registró la devolución",
        user: "Laura Meier",
        userAvatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      {
        id: "2",
        date: "2025-06-05 12:30",
        status: "Rejected",
        note: "Producto usado, no cumple con condiciones",
        user: "Sven Konrad",
        userAvatar: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  },
  {
    id: "45678",
    status: "Refunded",
    date: "2025-06-03",
    products: [
      {
        id: "4",
        name: "Logitech MX Master 3",
        sku: "LOGI-MX3",
        quantity: 1,
        reason: "No es compatible con mi sistema",
        imageUrl: "https://dummyimage.com/64x64/bbb/fff&text=MX",
        price: 109.99,
        comments: [],
        history: []
      },
       {
        id: "2",
        name: "Xiaomi Redmi Note 10",
        sku: "REDMI10-64GB",
        quantity: 2,
        reason: "Falsches Modell geliefert",
        imageUrl: "https://dummyimage.com/64x64/aaa/fff&text=XR",
        price: 1250.99,
        comments: [],
        history: []
      },
       {
        id: "3",
        name: "Apple AirPods Pro",
        sku: "APPRO-2025",
        quantity: 1,
        reason: "Producto abierto y usado",
        imageUrl: "https://dummyimage.com/64x64/eee/fff&text=AP",
        comments: [],
        history: [],
        price: 259.99,
      },
      {
      id: "1",
      name: "Zapatos deportivos",
      sku: "ZAP-123",
      quantity: 2,
      reason: "Talla incorrecta",
      imageUrl: "https://dummyimage.com/64x64/eee/fff&text=ZP",
      price: 59.99,
    },
    {
        id: "5",
        name: "Samsung Galaxy S21",
        sku: "SGS21-128BL",
        quantity: 1,
        reason: "Mikrofon funktioniert nicht",
        status: "Offen",
        imageUrl: "https://dummyimage.com/64x64/ccc/fff&text=SG",
        price: 987.99,
        comments: [],
        history: []
      },
      {
        id: "6",
        name: "Iphone 16 ",
        sku: "apple-64GB",
        quantity: 2,
        reason: "Falsches Modell geliefert",
        imageUrl: "https://dummyimage.com/64x64/aaa/fff&text=XR",
        price: 1200.99,
        comments: [],
        history: []
      }
    ],
    client: {
      name: "Jonas Berger",
      email: "jonas@email.com",
      phone: "+49 555 666 777",
      address: "Hauptstraße 77, 24103 Kiel, Deutschland",
      avatarUrl: "https://randomuser.me/api/portraits/men/25.jpg",
      customerId: "KUNDE-2025-004"
    },
  
    events: [
      {
        id: "1",
        date: "2025-06-01 10:10",
        status: "Registered",
        note: "Solicitud iniciada por el cliente",
        user: "Jonas Berger",
        userAvatar: "https://randomuser.me/api/portraits/men/25.jpg"
      },
      {
        id: "2",
        date: "2025-06-02 09:00",
        status: "Approved",
        note: "Autorizada por soporte",
        user: "Support Team",
        userAvatar: "https://randomuser.me/api/portraits/men/21.jpg"
      },
      {
        id: "3",
        date: "2025-06-03 13:45",
        status: "Received",
        note: "Producto recibido y verificado",
        user: "Lisa Krüger",
        userAvatar: "https://randomuser.me/api/portraits/women/12.jpg"
      },
      {
        id: "4",
        date: "2025-06-04 08:00",
        status: "Refunded",
        note: "Reembolso procesado correctamente",
        user: "Lisa Krüger",
        userAvatar: "https://randomuser.me/api/portraits/women/12.jpg"
      },
    ]
  }
];

export default returnsMock;
