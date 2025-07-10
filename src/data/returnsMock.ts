const returnsMock = [
  {
    id: "12345",
    status: "Registered",
    shopId: "shop-1",
    date: "2025-06-06",
    trackingNumber: "TRK-123456789",
    products: [
      {
        id: "1",
        name: "Samsung Galaxy S21",
        sku: "SGS21-128BL",
        quantity: 1,
        reason: "Defective item",
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
    shopId: "shop-2",
    trackingNumber: "TRK-987654321",
    date: "2025-06-02",
    products: [
      {
        id: "2",
        name: "Xiaomi Redmi Note 10",
        sku: "REDMI10-64GB",
        quantity: 2,
        reason: "Not as described",
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
     shopId: "shop-3",
    date: "2025-06-05",
    products: [
      {
        id: "3",
        name: "Apple AirPods Pro",
        sku: "APPRO-2025",
        quantity: 1,
        reason: "Defective item",
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
      reason: "Wrong size",
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
        note: "Changed mind, no oppened package",
        user: "Sven Konrad",
        userAvatar: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  },
  {
    id: "45678",
    status: "Refunded",
    shopId: "shop-4",
    trackingNumber: "TRK-5566778899",
    date: "2025-06-03",
    products: [
      {
        id: "4",
        name: "Logitech MX Master 3",
        sku: "LOGI-MX3",
        quantity: 1,
        reason: "Not as described",
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
        reason: "Defective item",
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
        reason: "Defective item",
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
      reason: "Wrong size",
      imageUrl: "https://dummyimage.com/64x64/eee/fff&text=ZP",
      price: 59.99,
    },
    {
        id: "5",
        name: "Samsung Galaxy S21",
        sku: "SGS21-128BL",
        quantity: 1,
        reason: "Defective item",
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
        reason: "Not as described",
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
  },
  {
  id: "56789",
  status: "Received",
  shopId: "shop-1",
  trackingNumber: "TRK-121212121",
  date: "2025-06-07",
  products: [
    {
      id: "7",
      name: "Kindle Paperwhite",
      sku: "KND-PW2025",
      quantity: 1,
      reason: "Defective item",
      imageUrl: "https://dummyimage.com/64x64/abc/fff&text=KP",
      price: 149.99,
      comments: [],
      history: []
    }
  ],
  client: {
    name: "Erika Schmid",
    email: "erika@email.com",
    phone: "+49 888 777 666",
    address: "Marktstraße 12, 24103 Kiel, Deutschland",
    avatarUrl: "https://randomuser.me/api/portraits/women/41.jpg",
    customerId: "KUNDE-2025-005"
  },
  subtotal: 149.99,
  deductions: 0,
  total: 149.99,
  events: [
    {
      id: "1",
      date: "2025-06-05 09:30",
      status: "Registered",
      note: "Cliente solicitó la devolución",
      user: "Erika Schmid",
      userAvatar: "https://randomuser.me/api/portraits/women/41.jpg"
    },
    {
      id: "2",
      date: "2025-06-06 10:10",
      status: "Approved",
      note: "Aprobada por el equipo",
      user: "Soporte",
      userAvatar: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: "3",
      date: "2025-06-07 13:15",
      status: "Received",
      note: "Producto recibido y validado",
      user: "Soporte",
      userAvatar: "https://randomuser.me/api/portraits/men/5.jpg"
    }
  ]
},
{
  id: "67890",
  status: "Cancelled",
  shopId: "shop-2",
  date: "2025-06-08",
  products: [
    {
      id: "8",
      name: "Smartwatch Galaxy Watch",
      sku: "GWATCH-BL2025",
      quantity: 1,
      reason: "Wrong size",
      imageUrl: "https://dummyimage.com/64x64/333/fff&text=GW",
      price: 199.99,
      comments: [],
      history: []
    }
  ],
  client: {
    name: "Daniel Braun",
    email: "daniel@email.com",
    phone: "+49 666 444 333",
    address: "Bahnhofstraße 9, 24103 Kiel, Deutschland",
    avatarUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    customerId: "KUNDE-2025-006"
  },
  subtotal: 199.99,
  deductions: 0,
  total: 199.99,
  events: [
    {
      id: "1",
      date: "2025-06-07 11:00",
      status: "Registered",
      note: "Cliente envió la solicitud",
      user: "Daniel Braun",
      userAvatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      id: "2",
      date: "2025-06-08 08:45",
      status: "Cancelled",
      note: "Cliente canceló la solicitud",
      user: "Daniel Braun",
      userAvatar: "https://randomuser.me/api/portraits/men/41.jpg"
    }
  ]
},
{
  id: "678890",
  status: "Cancelled",
  shopId: "shop-2",
  date: "2025-06-08",
  products: [
    {
      id: "8",
      name: "Smartwatch Galaxy Watch",
      sku: "GWATCH-BL2025",
      quantity: 1,
      reason: "Changed mind",
      imageUrl: "https://dummyimage.com/64x64/333/fff&text=GW",
      price: 199.99,
      comments: [],
      history: []
    }
  ],
  client: {
    name: "Karla Schmid",
    email: "karla@email.com",
    phone: "+49 666 444 333",
    address: "Bahnhofstraße 83, 24103 Kiel, Deutschland",
    avatarUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    customerId: "KUNDE-2025-007"
  },
  subtotal: 199.99,
  deductions: 0,
  total: 199.99,
  events: [
    {
      id: "1",
      date: "2025-06-07 11:00",
      status: "Registered",
      note: "Cliente envió la solicitud",
      user: "Karla Schmid",
      userAvatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      id: "2",
      date: "2025-06-08 08:45",
      status: "Cancelled",
      note: "Cliente canceló la solicitud",
      user: "Karla Schmid",
      userAvatar: "https://randomuser.me/api/portraits/men/41.jpg"
    }
  ]
},
{
  id: "89012",
  status: "Cancelled",
  shopId: "shop-4",
  date: "2025-06-10",
  trackingNumber: "TRK-890123456",
  products: [
    {
      id: "10",
      name: "Smartwatch Garmin Venu 2",
      sku: "GARMIN-V2",
      quantity: 1,
      reason: "Not as described",
      imageUrl: "https://dummyimage.com/64x64/ccc/fff&text=GV",
      price: 379.00,
      comments: [],
      history: []
    }
  ],
  client: {
    name: "Kevin Roth",
    email: "kevin@email.com",
    phone: "+49 111 222 555",
    address: "Am Markt 77, 24103 Kiel",
    avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    customerId: "KUNDE-2025-008"
  },
  subtotal: 379.0,
  deductions: 0,
  total: 0,
  events: [
    {
      id: "1",
      date: "2025-06-09 12:30",
      status: "Registered",
      note: "Cliente abrió solicitud de devolución",
      user: "Kevin Roth",
      userAvatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: "2",
      date: "2025-06-10 09:10",
      status: "Cancelled",
      note: "Cliente canceló porque decidió quedarse el producto",
      user: "Kevin Roth",
      userAvatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ]
},

{
    "id": "9cf2a26091879",
    "status": "Rejected",
    "shopId": "shop-3",
    "date": "2025-06-13",
    "trackingNumber": "TRK-889917825",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Wenzel Schacht",
      "email": "cetin50@adler.de",
      "phone": "+49(0)2443 964686",
      "address": "Isa-Hermann-Gasse 8/1, 52077 Eisleben",
      "avatarUrl": "https://randomuser.me/api/portraits/men/7.jpg",
      "customerId": "KUNDE-2025-100"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "1f9d086c04",
    "status": "Refunded",
    "shopId": "shop-1",
    "date": "2025-06-14",
    "trackingNumber": "TRK-972091066",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Janette Metz",
      "email": "jmies@web.de",
      "phone": "09490 733600",
      "address": "Freia-Henck-Weg 25, 82325 Grimmen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/55.jpg",
      "customerId": "KUNDE-2025-101"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "bb6d80e4",
    "status": "Registered",
    "shopId": "shop-1",
    "date": "2025-06-12",
    "trackingNumber": "TRK-854343047",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Prof. Herwig Henck B.Sc.",
      "email": "ernst-dieterpatberg@loewer.org",
      "phone": "05681148878",
      "address": "Stahrring 1, 70835 Mainburg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/1.jpg",
      "customerId": "KUNDE-2025-102"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "3eeaebea",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-13",
    "trackingNumber": "TRK-358963136",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Thorsten L\u00f6chel B.Sc.",
      "email": "andrea28@googlemail.com",
      "phone": "08845487483",
      "address": "Sorgatzweg 469, 67688 F\u00fcssen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/22.jpg",
      "customerId": "KUNDE-2025-103"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "941a6edf076",
    "status": "Received",
    "shopId": "shop-2",
    "date": "2025-06-18",
    "trackingNumber": "TRK-711688782",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "G\u00fclsen Trupp-Seifert",
      "email": "ebolander@web.de",
      "phone": "+49(0) 827902842",
      "address": "Sandor-Rose-Allee 895, 06969 L\u00fcdinghausen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/5.jpg",
      "customerId": "KUNDE-2025-104"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "e40587492",
    "status": "Rejected",
    "shopId": "shop-1",
    "date": "2025-06-28",
    "trackingNumber": "TRK-246756656",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Hans-Ludwig Kensy",
      "email": "giessulrike@yahoo.de",
      "phone": "+49(0) 725344677",
      "address": "Langestr. 76, 91901 Lippstadt",
      "avatarUrl": "https://randomuser.me/api/portraits/men/6.jpg",
      "customerId": "KUNDE-2025-105"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "c55d0b85765",
    "status": "Refunded",
    "shopId": "shop-1",
    "date": "2025-06-17",
    "trackingNumber": "TRK-231830513",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Jakob Drub MBA.",
      "email": "nwilmsen@schmidt.de",
      "phone": "+49(0) 597278794",
      "address": "Vogtweg 2/9, 56523 Grafenau",
      "avatarUrl": "https://randomuser.me/api/portraits/men/26.jpg",
      "customerId": "KUNDE-2025-106"
    },
    "subtotal": 597.0,
    "deductions": 0,
    "total": 597.0
  },
  {
    "id": "7e5d653bbda",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-07-06",
    "trackingNumber": "TRK-408571421",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Friedrich-Wilhelm Bohlander",
      "email": "christopher50@aol.de",
      "phone": "+49(0) 311780902",
      "address": "Hannelore-Pechel-Weg 3, 10522 Merseburg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/21.jpg",
      "customerId": "KUNDE-2025-107"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "39d71b8e29",
    "status": "Rejected",
    "shopId": "shop-3",
    "date": "2025-07-08",
    "trackingNumber": "TRK-574591779",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Herr Dietmar Ullrich",
      "email": "zscheibe@aol.de",
      "phone": "+49 (0) 2599 013568",
      "address": "Gunther-Kensy-Allee 5, 09196 Calw",
      "avatarUrl": "https://randomuser.me/api/portraits/men/9.jpg",
      "customerId": "KUNDE-2025-108"
    },
    "subtotal": 329.969,
    "deductions": 0,
    "total": 329.969
  },
  {
    "id": "24d18c821cef",
    "status": "Rejected",
    "shopId": "shop-1",
    "date": "2025-06-19",
    "trackingNumber": "TRK-599167300",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Siegrid Prei\u00df",
      "email": "romanzobel@mangold.com",
      "phone": "(07048) 543456",
      "address": "Margot-Finke-Gasse 6, 84125 Schleiz",
      "avatarUrl": "https://randomuser.me/api/portraits/men/22.jpg",
      "customerId": "KUNDE-2025-109"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "5e588765789",
    "status": "Registered",
    "shopId": "shop-4",
    "date": "2025-06-28",
    "trackingNumber": "TRK-837133253",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Vladimir Mielcarek",
      "email": "christa-mariaebert@gmail.com",
      "phone": "+49(0)5356710308",
      "address": "D\u00f6hngasse 10, 30749 Hohenm\u00f6lsen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/12.jpg",
      "customerId": "KUNDE-2025-110"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "fcbc456789",
    "status": "Approved",
    "shopId": "shop-1",
    "date": "2025-06-29",
    "trackingNumber": "TRK-868148719",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Hasan Pohl",
      "email": "ludger82@gmx.de",
      "phone": "01452 26595",
      "address": "Hans-Hermann-Kitzmann-Ring 06, 35819 Bamberg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/1.jpg",
      "customerId": "KUNDE-2025-111"
    },
    "subtotal": 398.0,
    "deductions": 0,
    "total": 398.0
  },
  {
    "id": "e585f9be46",
    "status": "Approved",
    "shopId": "shop-1",
    "date": "2025-06-10",
    "trackingNumber": "TRK-810062224",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Nikola Prei\u00df",
      "email": "christel63@gmx.de",
      "phone": "(05045) 110183",
      "address": "Cordula-Scheibe-Weg 9/2, 73637 Hannoversch M\u00fcnden",
      "avatarUrl": "https://randomuser.me/api/portraits/women/52.jpg",
      "customerId": "KUNDE-2025-112"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "74e230bd6dc",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-26",
    "trackingNumber": "TRK-260029798",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Aleksandr Rose",
      "email": "srust@gmx.de",
      "phone": "+49(0)1244 88013",
      "address": "Vadim-Faust-Stra\u00dfe 9/2, 31276 M\u00fchlhausen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/28.jpg",
      "customerId": "KUNDE-2025-113"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "072cd5fa831",
    "status": "Received",
    "shopId": "shop-1",
    "date": "2025-06-24",
    "trackingNumber": "TRK-257004851",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Silva Junck",
      "email": "rullmann@hotmail.de",
      "phone": "00402 19930",
      "address": "Eggert-Gertz-Allee 958, 36244 Moers",
      "avatarUrl": "https://randomuser.me/api/portraits/men/56.jpg",
      "customerId": "KUNDE-2025-114"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "4aeed430-099fb",
    "status": "Approved",
    "shopId": "shop-3",
    "date": "2025-06-27",
    "trackingNumber": "TRK-914970315",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dittmar Gei\u00dfler",
      "email": "fjuettner@aol.de",
      "phone": "0628401540",
      "address": "Heidelinde-Bl\u00fcmel-Gasse 238, 06603 Cuxhaven",
      "avatarUrl": "https://randomuser.me/api/portraits/men/54.jpg",
      "customerId": "KUNDE-2025-115"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "a9f1e40ec872",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-06-22",
    "trackingNumber": "TRK-279591689",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Elisabet Schmidtke",
      "email": "athanel@weihmann.com",
      "phone": "+49(0)8484 677794",
      "address": "Thekla-Schuster-Stra\u00dfe 0/5, 09356 Ludwigslust",
      "avatarUrl": "https://randomuser.me/api/portraits/men/12.jpg",
      "customerId": "KUNDE-2025-116"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "ef71f1",
    "status": "Approved",
    "shopId": "shop-3",
    "date": "2025-07-03",
    "trackingNumber": "TRK-324276331",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Belinda Renner",
      "email": "klemmagata@aol.de",
      "phone": "06998 117399",
      "address": "Denny-Ullmann-Gasse 7/8, 77252 Genthin",
      "avatarUrl": "https://randomuser.me/api/portraits/men/4.jpg",
      "customerId": "KUNDE-2025-117"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "38e2046a6",
    "status": "Registered",
    "shopId": "shop-2",
    "date": "2025-06-26",
    "trackingNumber": "TRK-715729255",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ekkehard K\u00e4ster",
      "email": "ilhan08@gmail.com",
      "phone": "(04082) 999642",
      "address": "Haufferstr. 935, 20996 Wolfratshausen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/12.jpg",
      "customerId": "KUNDE-2025-118"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "a239be75c",
    "status": "Approved",
    "shopId": "shop-1",
    "date": "2025-06-17",
    "trackingNumber": "TRK-885918059",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Winfried L\u00f6wer",
      "email": "ulrikedavids@yahoo.de",
      "phone": "+49(0)6298 917089",
      "address": "Hans-Otto-Bien-Ring 2, 46849 Vohenstrau\u00df",
      "avatarUrl": "https://randomuser.me/api/portraits/women/44.jpg",
      "customerId": "KUNDE-2025-119"
    },
    "subtotal": 519.98,
    "deductions": 0,
    "total": 519.98
  },
  {
    "id": "fc6fff847f9",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-06-23",
    "trackingNumber": "TRK-443664934",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Ramona Eberhardt B.Sc.",
      "email": "dagobertweller@biggen.de",
      "phone": "04832 938763",
      "address": "Lissi-H\u00f6rle-Gasse 3, 70144 Sternberg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/38.jpg",
      "customerId": "KUNDE-2025-120"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "45a6e2bada",
    "status": "Refunded",
    "shopId": "shop-3",
    "date": "2025-06-29",
    "trackingNumber": "TRK-458749282",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dipl.-Ing. Babette Matth\u00e4i",
      "email": "thorstenwohlgemut@roht.de",
      "phone": "+49(0)2288832044",
      "address": "Tobias-Scheel-Ring 90, 18433 Eichst\u00e4tt",
      "avatarUrl": "https://randomuser.me/api/portraits/women/49.jpg",
      "customerId": "KUNDE-2025-121"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "53662d2c",
    "status": "Approved",
    "shopId": "shop-4",
    "date": "2025-06-10",
    "trackingNumber": "TRK-548147386",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Anika Eigenwillig",
      "email": "ansgarnette@googlemail.com",
      "phone": "(08009) 59993",
      "address": "Kenneth-Hellwig-Allee 2/4, 52896 Iserlohn",
      "avatarUrl": "https://randomuser.me/api/portraits/women/5.jpg",
      "customerId": "KUNDE-2025-122"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "05ed61ee",
    "status": "Approved",
    "shopId": "shop-1",
    "date": "2025-06-09",
    "trackingNumber": "TRK-334588061",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 2,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Prof. Juliana Hellwig B.Sc.",
      "email": "hassan30@heser.com",
      "phone": "0313354197",
      "address": "Brunhild-R\u00f6rricht-Allee 758, 98342 Aurich",
      "avatarUrl": "https://randomuser.me/api/portraits/men/24.jpg",
      "customerId": "KUNDE-2025-123"
    },
    "subtotal": 519.98,
    "deductions": 0,
    "total": 519.98
  },
  {
    "id": "97d683e9",
    "status": "Rejected",
    "shopId": "shop-2",
    "date": "2025-06-12",
    "trackingNumber": "TRK-640473469",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Georg Schweitzer B.Eng.",
      "email": "losekannmilan@taesche.com",
      "phone": "+49(0)9771 26660",
      "address": "Sch\u00f6nlandweg 1/7, 32050 Hainichen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/25.jpg",
      "customerId": "KUNDE-2025-124"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "84d1e476660",
    "status": "Refunded",
    "shopId": "shop-4",
    "date": "2025-06-22",
    "trackingNumber": "TRK-766091179",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Petra Tr\u00f6st MBA.",
      "email": "aennekobelt@weiss.com",
      "phone": "04433 44716",
      "address": "Mareile-Scholz-Weg 2, 09159 Kemnath",
      "avatarUrl": "https://randomuser.me/api/portraits/women/5.jpg",
      "customerId": "KUNDE-2025-125"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "1022c04e",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-13",
    "trackingNumber": "TRK-391279212",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dipl.-Ing. Senol Sorgatz",
      "email": "dorina51@hotmail.de",
      "phone": "+49(0) 733233193",
      "address": "Scheelweg 770, 22068 Kassel",
      "avatarUrl": "https://randomuser.me/api/portraits/women/40.jpg",
      "customerId": "KUNDE-2025-126"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "e5157a02c",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-06-23",
    "trackingNumber": "TRK-908739342",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Siegmund S\u00e4uberlich",
      "email": "simonevollbrecht@gmail.com",
      "phone": "05128 531715",
      "address": "Dippelplatz 18, 19223 Fulda",
      "avatarUrl": "https://randomuser.me/api/portraits/men/17.jpg",
      "customerId": "KUNDE-2025-127"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "d2507aae28",
    "status": "Cancelled",
    "shopId": "shop-2",
    "date": "2025-06-12",
    "trackingNumber": "TRK-126121496",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Niko Stiffel",
      "email": "rosajohann@aol.de",
      "phone": "04335397130",
      "address": "Zdenka-Albers-Gasse 0, 81628 Stade",
      "avatarUrl": "https://randomuser.me/api/portraits/women/26.jpg",
      "customerId": "KUNDE-2025-128"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "95562c94",
    "status": "Approved",
    "shopId": "shop-4",
    "date": "2025-06-15",
    "trackingNumber": "TRK-468583041",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "John Kreusel MBA.",
      "email": "delia68@binner.de",
      "phone": "08729672473",
      "address": "Jacobstr. 880, 32903 Meppen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/30.jpg",
      "customerId": "KUNDE-2025-129"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "b9e00165d",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-07-01",
    "trackingNumber": "TRK-639554079",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Alicia Killer B.A.",
      "email": "kkohl@adler.com",
      "phone": "+49(0)3518597465",
      "address": "Atzlerstra\u00dfe 5/6, 57842 Ochsenfurt",
      "avatarUrl": "https://randomuser.me/api/portraits/women/12.jpg",
      "customerId": "KUNDE-2025-130"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "b9828c89",
    "status": "Refunded",
    "shopId": "shop-4",
    "date": "2025-06-24",
    "trackingNumber": "TRK-204020834",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Stefan Gutknecht-Müller",
      "email": "domenicohettner@gmx.de",
      "phone": "(06772) 193047",
      "address": "Franz-Josef-Sager-Platz 43, 50302 Saarlouis",
      "avatarUrl": "https://randomuser.me/api/portraits/men/43.jpg",
      "customerId": "KUNDE-2025-131"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "2dd57ea9",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-07-06",
    "trackingNumber": "TRK-309497266",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Goran Cichorius B.Sc.",
      "email": "conradikurt@conradi.de",
      "phone": "+49(0)4312719894",
      "address": "Rosita-Trüst-Allee 6/3, 43916 Diepholz",
      "avatarUrl": "https://randomuser.me/api/portraits/men/24.jpg",
      "customerId": "KUNDE-2025-132"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "32ff87",
    "status": "Rejected",
    "shopId": "shop-3",
    "date": "2025-06-27",
    "trackingNumber": "TRK-860565216",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. \u00c4nne Weinhold MBA.",
      "email": "rustsandor@langern.com",
      "phone": "(01013) 49879",
      "address": "Stiebitzstra\u00dfe 024, 55836 Dieburg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/35.jpg",
      "customerId": "KUNDE-2025-133"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "720dab3cea",
    "status": "Rejected",
    "shopId": "shop-4",
    "date": "2025-06-13",
    "trackingNumber": "TRK-139125568",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Wigbert Fischer",
      "email": "kpatberg@googlemail.com",
      "phone": "+49(0) 113044183",
      "address": "Sauerallee 998, 49378 Illertissen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/29.jpg",
      "customerId": "KUNDE-2025-134"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "bdcee34507",
    "status": "Registered",
    "shopId": "shop-1",
    "date": "2025-07-07",
    "trackingNumber": "TRK-372605691",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 2,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Hans-Friedrich Reinhardt",
      "email": "emmawiek@web.de",
      "phone": "+49(0)8442241676",
      "address": "Roseallee 575, 32860 Germersheim",
      "avatarUrl": "https://randomuser.me/api/portraits/women/31.jpg",
      "customerId": "KUNDE-2025-135"
    },
    "subtotal": 398.0,
    "deductions": 0,
    "total": 398.0
  },
  {
    "id": "89d6dddf",
    "status": "Received",
    "shopId": "shop-1",
    "date": "2025-06-18",
    "trackingNumber": "TRK-678243753",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ernst-Dieter Rogner B.A.",
      "email": "denny37@jaehn.de",
      "phone": "+49(0)3927 566318",
      "address": "Toni-Wieloch-Allee 331, 49295 Hersbruck",
      "avatarUrl": "https://randomuser.me/api/portraits/men/17.jpg",
      "customerId": "KUNDE-2025-136"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "4fc6f52555",
    "status": "Rejected",
    "shopId": "shop-3",
    "date": "2025-06-18",
    "trackingNumber": "TRK-417763674",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Andrzej Johann-Kroker",
      "email": "janinekarge@weiss.com",
      "phone": "01954 88996",
      "address": "Daniel-Heinz-Allee 72, 72466 Deggendorf",
      "avatarUrl": "https://randomuser.me/api/portraits/women/58.jpg",
      "customerId": "KUNDE-2025-137"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "e3a111822396d",
    "status": "Rejected",
    "shopId": "shop-1",
    "date": "2025-07-07",
    "trackingNumber": "TRK-297424606",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Felicia Hettner",
      "email": "hubert83@yahoo.de",
      "phone": "(06521) 31433",
      "address": "Zahngasse 73, 39522 Coburg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/31.jpg",
      "customerId": "KUNDE-2025-138"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "671557d3a9e0",
    "status": "Received",
    "shopId": "shop-2",
    "date": "2025-07-02",
    "trackingNumber": "TRK-213596399",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Lissi M\u00f6chlichen",
      "email": "cristinaseifert@binner.de",
      "phone": "01778 815600",
      "address": "Junckallee 01, 39561 N\u00f6rdlingen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/49.jpg",
      "customerId": "KUNDE-2025-139"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "890ffffe9",
    "status": "Received",
    "shopId": "shop-4",
    "date": "2025-07-04",
    "trackingNumber": "TRK-613164723",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Friedhold Oderwald",
      "email": "elisementzel@hofmann.de",
      "phone": "(04771) 81808",
      "address": "Hillerplatz 74, 44373 Melsungen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/17.jpg",
      "customerId": "KUNDE-2025-140"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "468be452d8",
    "status": "Refunded",
    "shopId": "shop-1",
    "date": "2025-07-05",
    "trackingNumber": "TRK-568540310",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Melitta Klemt",
      "email": "hertrampfklothilde@googlemail.com",
      "phone": "02067 745193",
      "address": "Hermighausenstra\u00dfe 736, 18964 Hettstedt",
      "avatarUrl": "https://randomuser.me/api/portraits/men/8.jpg",
      "customerId": "KUNDE-2025-141"
    },
    "subtotal": 398.0,
    "deductions": 0,
    "total": 398.0
  },
  {
    "id": "f11f86496e9",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-17",
    "trackingNumber": "TRK-215547848",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Annie Heuser",
      "email": "zhering@gmx.de",
      "phone": "(01505) 679758",
      "address": "Aline-Hande-Platz 34, 83460 Staffelstein",
      "avatarUrl": "https://randomuser.me/api/portraits/women/52.jpg",
      "customerId": "KUNDE-2025-142"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "060660c567",
    "status": "Registered",
    "shopId": "shop-1",
    "date": "2025-06-29",
    "trackingNumber": "TRK-243512404",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Lena Trubin-Junken",
      "email": "gunpftatjana@web.de",
      "phone": "+49 (0) 6808 480496",
      "address": "Ferenc-Schlosser-Ring 501, 96340 Emmendingen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/2.jpg",
      "customerId": "KUNDE-2025-143"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "87edbb77d9e1",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-15",
    "trackingNumber": "TRK-731560966",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Istvan Ring MBA.",
      "email": "adolphhalil@stiffel.de",
      "phone": "(04207) 060211",
      "address": "Nelli-Schacht-Stra\u00dfe 8, 95492 Vechta",
      "avatarUrl": "https://randomuser.me/api/portraits/women/14.jpg",
      "customerId": "KUNDE-2025-144"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "2151783c1010",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-06-11",
    "trackingNumber": "TRK-955155214",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Janina Spie\u00df",
      "email": "hermann86@gumprich.net",
      "phone": "0909836232",
      "address": "Heuserstr. 0/5, 01773 Kronach",
      "avatarUrl": "https://randomuser.me/api/portraits/women/33.jpg",
      "customerId": "KUNDE-2025-145"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "5914e029c3bfe",
    "status": "Approved",
    "shopId": "shop-1",
    "date": "2025-06-11",
    "trackingNumber": "TRK-803522959",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Carola Adolph",
      "email": "klotzheinz-gerd@seidel.org",
      "phone": "(06293) 05391",
      "address": "Cord-Lindner-Ring 039, 96846 Dieburg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/52.jpg",
      "customerId": "KUNDE-2025-146"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "a10a9f6fa6",
    "status": "Cancelled",
    "shopId": "shop-3",
    "date": "2025-06-28",
    "trackingNumber": "TRK-233698468",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Arno Wiek",
      "email": "agathe44@mohaupt.net",
      "phone": "+49(0)2262 91810",
      "address": "Adalbert-Scheel-Ring 69, 82338 Lobenstein",
      "avatarUrl": "https://randomuser.me/api/portraits/men/18.jpg",
      "customerId": "KUNDE-2025-147"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "d52f99c5-e55ab5e0c",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-06-14",
    "trackingNumber": "TRK-220800052",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Prof. Ingmar Henck B.Sc.",
      "email": "mendeannette@hotmail.de",
      "phone": "05192 430381",
      "address": "Textorgasse 863, 70004 Hamburg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/3.jpg",
      "customerId": "KUNDE-2025-148"
    },
    "subtotal": 329,
    "deductions": 0,
    "total": 329
  },
  {
    "id": "30a24567",
    "status": "Received",
    "shopId": "shop-2",
    "date": "2025-06-26",
    "trackingNumber": "TRK-811595521",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Lieselotte Gr\u00f6ttner MBA.",
      "email": "ortrun98@finke.de",
      "phone": "02742 094001",
      "address": "H\u00f6lzenbecherring 0, 49450 Rosenheim",
      "avatarUrl": "https://randomuser.me/api/portraits/women/18.jpg",
      "customerId": "KUNDE-2025-149"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "4b2df138-",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-06-11",
    "trackingNumber": "TRK-846684858",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Lissy Henschel",
      "email": "yvonne17@yahoo.de",
      "phone": "+49(0)2663878938",
      "address": "Roswitha-Henschel-Stra\u00dfe 5/9, 83316 Grafenau",
      "avatarUrl": "https://randomuser.me/api/portraits/women/12.jpg",
      "customerId": "KUNDE-2025-150"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "a97305c",
    "status": "Rejected",
    "shopId": "shop-4",
    "date": "2025-06-18",
    "trackingNumber": "TRK-677848559",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dr. Violetta F\u00f6rster MBA.",
      "email": "erika22@foerster.org",
      "phone": "06124 995441",
      "address": "Kochstra\u00dfe 477, 96127 Malchin",
      "avatarUrl": "https://randomuser.me/api/portraits/women/4.jpg",
      "customerId": "KUNDE-2025-151"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "270104cba36f",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-10",
    "trackingNumber": "TRK-682320323",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Hans-Albert Drubin",
      "email": "werner64@aumann.com",
      "phone": "+49(0) 204356775",
      "address": "Ullrichstra\u00dfe 8, 89682 Hohenstein-Ernstthal",
      "avatarUrl": "https://randomuser.me/api/portraits/men/48.jpg",
      "customerId": "KUNDE-2025-152"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "3e5a6f699",
    "status": "Registered",
    "shopId": "shop-4",
    "date": "2025-07-04",
    "trackingNumber": "TRK-305954913",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Anni Stroh B.Sc.",
      "email": "taumann@yahoo.de",
      "phone": "03957844030",
      "address": "Ferdi-Klotz-Weg 4/3, 88147 Bad Kissingen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/35.jpg",
      "customerId": "KUNDE-2025-153"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "9fc17092ccfa0",
    "status": "Refunded",
    "shopId": "shop-4",
    "date": "2025-06-13",
    "trackingNumber": "TRK-979800100",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Johannes Jungfer",
      "email": "heringjan-peter@schinke.com",
      "phone": "(08540) 61023",
      "address": "Hanne-Lore-Barth-Allee 0/8, 11230 Calau",
      "avatarUrl": "https://randomuser.me/api/portraits/men/40.jpg",
      "customerId": "KUNDE-2025-154"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "2dd8c1d6937e75",
    "status": "Refunded",
    "shopId": "shop-1",
    "date": "2025-06-26",
    "trackingNumber": "TRK-693934001",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Doreen Trub MBA.",
      "email": "antewesack@aol.de",
      "phone": "+49(0) 106493653",
      "address": "Hans-Hinrich-Gie\u00df-Allee 99, 92351 Bautzen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/57.jpg",
      "customerId": "KUNDE-2025-155"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "6d5aba76c5cf214",
    "status": "Received",
    "shopId": "shop-2",
    "date": "2025-06-17",
    "trackingNumber": "TRK-745041830",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Gotthilf Etzler",
      "email": "scheuermannandrey@mans.com",
      "phone": "+49(0)5271 85009",
      "address": "Slavko-Seip-Stra\u00dfe 66, 90824 Beilngries",
      "avatarUrl": "https://randomuser.me/api/portraits/women/60.jpg",
      "customerId": "KUNDE-2025-156"
    },
    "subtotal": 597.0,
    "deductions": 0,
    "total": 597.0
  },
  {
    "id": "29509890",
    "status": "Cancelled",
    "shopId": "shop-3",
    "date": "2025-06-11",
    "trackingNumber": "TRK-355304956",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Herr Angelo Ortmann",
      "email": "ditschlerinmariusz@gutknecht.de",
      "phone": "00493 083429",
      "address": "Hans J\u00fcrgen-Hentschel-Weg 6/8, 28715 Oberviechtach",
      "avatarUrl": "https://randomuser.me/api/portraits/women/53.jpg",
      "customerId": "KUNDE-2025-157"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "4e63d6208046",
    "status": "Rejected",
    "shopId": "shop-4",
    "date": "2025-07-06",
    "trackingNumber": "TRK-402456782",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Felicia Hentschel B.A.",
      "email": "nancy78@yahoo.de",
      "phone": "(00536) 36953",
      "address": "Mentzelstra\u00dfe 3/8, 43503 Wernigerode",
      "avatarUrl": "https://randomuser.me/api/portraits/men/25.jpg",
      "customerId": "KUNDE-2025-158"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "f7872ecb",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-11",
    "trackingNumber": "TRK-543266226",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Benita Boucsein",
      "email": "sibilla33@hotmail.de",
      "phone": "02961 943137",
      "address": "Reisinggasse 6, 14845 Spremberg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/57.jpg",
      "customerId": "KUNDE-2025-159"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "725aa957",
    "status": "Rejected",
    "shopId": "shop-1",
    "date": "2025-06-11",
    "trackingNumber": "TRK-897012596",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Otfried H\u00f6lzenbecher",
      "email": "annygeisel@yahoo.de",
      "phone": "07304161609",
      "address": "Anna-Luise-Kostolzin-Allee 154, 38327 Stendal",
      "avatarUrl": "https://randomuser.me/api/portraits/men/35.jpg",
      "customerId": "KUNDE-2025-160"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "2f3840d0e3c0",
    "status": "Cancelled",
    "shopId": "shop-3",
    "date": "2025-06-10",
    "trackingNumber": "TRK-106743404",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Krystyna R\u00e4del",
      "email": "matteo83@gmx.de",
      "phone": "03674 680533",
      "address": "Alfonso-Vollbrecht-Gasse 4, 25241 Wolfratshausen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/59.jpg",
      "customerId": "KUNDE-2025-161"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "4e9f5363ff9",
    "status": "Refunded",
    "shopId": "shop-3",
    "date": "2025-07-04",
    "trackingNumber": "TRK-788950098",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Frau Irmela Hartmann B.Eng.",
      "email": "mzirme@mohaupt.de",
      "phone": "(03236) 75245",
      "address": "Ruststra\u00dfe 64, 89001 Werdau",
      "avatarUrl": "https://randomuser.me/api/portraits/women/15.jpg",
      "customerId": "KUNDE-2025-162"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "5debe62de51",
    "status": "Received",
    "shopId": "shop-3",
    "date": "2025-06-29",
    "trackingNumber": "TRK-366356021",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Corinna Mielcarek",
      "email": "cilligunpf@yahoo.de",
      "phone": "06805 182060",
      "address": "Stollring 6/0, 72079 Soltau",
      "avatarUrl": "https://randomuser.me/api/portraits/women/35.jpg",
      "customerId": "KUNDE-2025-163"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "683cf10040b",
    "status": "Rejected",
    "shopId": "shop-1",
    "date": "2025-07-01",
    "trackingNumber": "TRK-636673020",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Wiebke Ditschlerin",
      "email": "khofmann@boucsein.de",
      "phone": "+49(0) 832557872",
      "address": "Hans-Jochen-Krebs-Ring 5/1, 88791 Artern",
      "avatarUrl": "https://randomuser.me/api/portraits/women/3.jpg",
      "customerId": "KUNDE-2025-164"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "1954e219f3f0",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-06-29",
    "trackingNumber": "TRK-601146937",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Herr Rudi Rosenow",
      "email": "wolfram93@beier.com",
      "phone": "05360 095554",
      "address": "Metzstr. 0, 14189 Gro\u00dfenhain",
      "avatarUrl": "https://randomuser.me/api/portraits/men/13.jpg",
      "customerId": "KUNDE-2025-165"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "41e9a98b7cb6",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-15",
    "trackingNumber": "TRK-202239023",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Willibert Grein Groth",
      "email": "leopoldinemosemann@foerster.de",
      "phone": "+49(0)4494 54180",
      "address": "Gie\u00dfgasse 4, 68361 Neuss",
      "avatarUrl": "https://randomuser.me/api/portraits/women/8.jpg",
      "customerId": "KUNDE-2025-166"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "50f111867c97",
    "status": "Approved",
    "shopId": "shop-3",
    "date": "2025-07-07",
    "trackingNumber": "TRK-613234952",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Jasmin Dietz",
      "email": "petzler@hoefig.de",
      "phone": "(08297) 260774",
      "address": "D\u00f6hnring 612, 47827 Saarbr\u00fccken",
      "avatarUrl": "https://randomuser.me/api/portraits/men/20.jpg",
      "customerId": "KUNDE-2025-167"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "a72035cf6c",
    "status": "Received",
    "shopId": "shop-2",
    "date": "2025-06-23",
    "trackingNumber": "TRK-381698200",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Prof. Ingelore Hofmann MBA.",
      "email": "efranke@googlemail.com",
      "phone": "+49(0)4528 324409",
      "address": "Bonbachallee 986, 12337 Griesbach Rottal",
      "avatarUrl": "https://randomuser.me/api/portraits/women/54.jpg",
      "customerId": "KUNDE-2025-168"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "5474db4f7a",
    "status": "Approved",
    "shopId": "shop-4",
    "date": "2025-06-30",
    "trackingNumber": "TRK-446577613",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Jacek Beckmann",
      "email": "gorlitzhansjoerg@web.de",
      "phone": "0266128500",
      "address": "Klappweg 7, 59929 Feuchtwangen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/50.jpg",
      "customerId": "KUNDE-2025-169"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "6e9924b3676",
    "status": "Refunded",
    "shopId": "shop-4",
    "date": "2025-06-26",
    "trackingNumber": "TRK-588229576",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dr. Mara Mans MBA.",
      "email": "emmahaase@googlemail.com",
      "phone": "01980019602",
      "address": "Eckhardt-Schaaf-Stra\u00dfe 743, 66433 G\u00fcnzburg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/48.jpg",
      "customerId": "KUNDE-2025-170"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "e744f0c629",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-06-27",
    "trackingNumber": "TRK-494326216",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ansgar Rudolph",
      "email": "nadingeisler@googlemail.com",
      "phone": "07874726178",
      "address": "Scholtzstra\u00dfe 1, 41524 Euskirchen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/40.jpg",
      "customerId": "KUNDE-2025-171"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "2bbb5cc8",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-06-30",
    "trackingNumber": "TRK-964440710",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Gabor Ullrich",
      "email": "dehmelhartwig@yahoo.de",
      "phone": "07594 761759",
      "address": "Inka-Peukert-Platz 79, 48757 Zerbst",
      "avatarUrl": "https://randomuser.me/api/portraits/women/52.jpg",
      "customerId": "KUNDE-2025-172"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "37a56085e",
    "status": "Approved",
    "shopId": "shop-3",
    "date": "2025-06-11",
    "trackingNumber": "TRK-345877649",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dorina Barkholz",
      "email": "vesna85@gmx.de",
      "phone": "09837887630",
      "address": "Zahnring 8/6, 24877 Zeulenroda",
      "avatarUrl": "https://randomuser.me/api/portraits/men/34.jpg",
      "customerId": "KUNDE-2025-173"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "9972d35c1",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-07-05",
    "trackingNumber": "TRK-475374900",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Bastian Stumpf",
      "email": "marliese16@yahoo.de",
      "phone": "00157675424",
      "address": "Liliana-H\u00f6fig-Weg 060, 59643 H\u00f6xter",
      "avatarUrl": "https://randomuser.me/api/portraits/women/20.jpg",
      "customerId": "KUNDE-2025-174"
    },
    "subtotal": 519.98,
    "deductions": 0,
    "total": 519.98
  },
  {
    "id": "8c0b9bacaf",
    "status": "Approved",
    "shopId": "shop-3",
    "date": "2025-06-10",
    "trackingNumber": "TRK-359308731",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Kai-Uwe Vogt",
      "email": "fred41@schomber.com",
      "phone": "+49(0)8763 899382",
      "address": "Putzweg 8/5, 14426 Hohenm\u00f6lsen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/45.jpg",
      "customerId": "KUNDE-2025-175"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "302d2413",
    "status": "Received",
    "shopId": "shop-2",
    "date": "2025-06-14",
    "trackingNumber": "TRK-769521396",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Angelika Scheuermann-Koch",
      "email": "jacobpawel@gertz.com",
      "phone": "+49(0)6532642396",
      "address": "auch Schlauchinring 1/0, 08390 Malchin",
      "avatarUrl": "https://randomuser.me/api/portraits/women/32.jpg",
      "customerId": "KUNDE-2025-176"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "c7fb684ccf9",
    "status": "Received",
    "shopId": "shop-4",
    "date": "2025-06-17",
    "trackingNumber": "TRK-184341398",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Dennis Heinrich",
      "email": "hgumprich@hendriks.de",
      "phone": "01323 08616",
      "address": "Kemal-Bolander-Stra\u00dfe 350, 14042 Haldensleben",
      "avatarUrl": "https://randomuser.me/api/portraits/men/40.jpg",
      "customerId": "KUNDE-2025-177"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "476463cf1",
    "status": "Refunded",
    "shopId": "shop-3",
    "date": "2025-07-06",
    "trackingNumber": "TRK-573970175",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dipl.-Ing. Dagmar T\u00e4sche",
      "email": "wmaelzer@gmx.de",
      "phone": "+49(0)9047 88205",
      "address": "Emmerich-Kraushaar-Stra\u00dfe 72, 76296 L\u00fcneburg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/16.jpg",
      "customerId": "KUNDE-2025-178"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "b7a7fe12a",
    "status": "Approved",
    "shopId": "shop-4",
    "date": "2025-06-15",
    "trackingNumber": "TRK-812888369",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dr. Maxim Ziegert",
      "email": "tjacob@web.de",
      "phone": "08159 14165",
      "address": "Rudolphgasse 7/1, 07383 Oranienburg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/41.jpg",
      "customerId": "KUNDE-2025-179"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "0494ede7b",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-07-04",
    "trackingNumber": "TRK-742461480",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Francoise Pechel",
      "email": "oroehricht@klapp.com",
      "phone": "04127 64080",
      "address": "Hertrampfstra\u00dfe 9, 33924 Illertissen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/34.jpg",
      "customerId": "KUNDE-2025-180"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "cedf6cd13",
    "status": "Registered",
    "shopId": "shop-1",
    "date": "2025-06-22",
    "trackingNumber": "TRK-182000520",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Birgid Zobel B.A.",
      "email": "ruedigeraustermuehle@hotmail.de",
      "phone": "(07689) 950496",
      "address": "Justine-Hendriks-Allee 9/3, 07316 Oberviechtach",
      "avatarUrl": "https://randomuser.me/api/portraits/men/27.jpg",
      "customerId": "KUNDE-2025-181"
    },
    "subtotal": 398.0,
    "deductions": 0,
    "total": 398.0
  },
  {
    "id": "a57194168",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-07-01",
    "trackingNumber": "TRK-877003450",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Gunter Trupp B.Eng.",
      "email": "langemelita@googlemail.com",
      "phone": "+49(0)5178583973",
      "address": "Matth\u00e4igasse 67, 26668 Gera",
      "avatarUrl": "https://randomuser.me/api/portraits/men/53.jpg",
      "customerId": "KUNDE-2025-182"
    },
    "subtotal": 398.0,
    "deductions": 0,
    "total": 398.0
  },
  {
    "id": "204eb23950",
    "status": "Cancelled",
    "shopId": "shop-3",
    "date": "2025-06-19",
    "trackingNumber": "TRK-769564976",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Lilo Jopich",
      "email": "christinabluemel@geisler.com",
      "phone": "00358992626",
      "address": "Dippelplatz 24, 05863 Ilmenau",
      "avatarUrl": "https://randomuser.me/api/portraits/men/1.jpg",
      "customerId": "KUNDE-2025-183"
    },
    "subtotal": 519.98,
    "deductions": 0,
    "total": 519.98
  },
  {
    "id": "eba66b59",
    "status": "Registered",
    "shopId": "shop-3",
    "date": "2025-07-05",
    "trackingNumber": "TRK-789620968",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Zoran D\u00f6rschner",
      "email": "bauerzehra@eckbauer.com",
      "phone": "+49(0)7886940565",
      "address": "L\u00fcbsstra\u00dfe 97, 28424 Hansestadttralsund",
      "avatarUrl": "https://randomuser.me/api/portraits/women/31.jpg",
      "customerId": "KUNDE-2025-184"
    },
    "subtotal": 597.0,
    "deductions": 0,
    "total": 597.0
  },
  {
    "id": "466008dd",
    "status": "Received",
    "shopId": "shop-1",
    "date": "2025-06-27",
    "trackingNumber": "TRK-580452962",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Hanna Seip",
      "email": "jseifert@jaehn.de",
      "phone": "01499 842931",
      "address": "Charlotte-Stahr-Allee 451, 58159 Goslar",
      "avatarUrl": "https://randomuser.me/api/portraits/women/27.jpg",
      "customerId": "KUNDE-2025-185"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "aff69e6a0",
    "status": "Registered",
    "shopId": "shop-2",
    "date": "2025-06-25",
    "trackingNumber": "TRK-853688774",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Gundolf Haase",
      "email": "warmerbela@gmx.de",
      "phone": "08270 056828",
      "address": "Margrafstr. 49, 38028 Nordhausen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/55.jpg",
      "customerId": "KUNDE-2025-186"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "d38277798f5",
    "status": "Received",
    "shopId": "shop-3",
    "date": "2025-06-11",
    "trackingNumber": "TRK-537165612",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Heribert Thanel",
      "email": "carl-heinzeberth@gmx.de",
      "phone": "07505943640",
      "address": "Buttestra\u00dfe 886, 23533 Deggendorf",
      "avatarUrl": "https://randomuser.me/api/portraits/women/4.jpg",
      "customerId": "KUNDE-2025-187"
    },
    "subtotal": 398.0,
    "deductions": 0,
    "total": 398.0
  },
  {
    "id": "7bac997fb5",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-28",
    "trackingNumber": "TRK-572222336",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Henriette Putz",
      "email": "muharrem03@maelzer.com",
      "phone": "00911 588189",
      "address": "Henschelring 3/5, 79413 Rottweil",
      "avatarUrl": "https://randomuser.me/api/portraits/men/37.jpg",
      "customerId": "KUNDE-2025-188"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "cce0a26",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-07-07",
    "trackingNumber": "TRK-413313430",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 3,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Lilian Bl\u00fcmel B.A.",
      "email": "marga31@heydrich.org",
      "phone": "+49(0) 757045953",
      "address": "Cemil-Heinz-Stra\u00dfe 5/8, 19517 Zschopau",
      "avatarUrl": "https://randomuser.me/api/portraits/men/49.jpg",
      "customerId": "KUNDE-2025-189"
    },
    "subtotal": 329.96999999999997,
    "deductions": 0,
    "total": 329.96999999999997
  },
  {
    "id": "d460a24",
    "status": "Rejected",
    "shopId": "shop-2",
    "date": "2025-07-01",
    "trackingNumber": "TRK-947862103",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Kirstin Hornig B.A.",
      "email": "spiessraik@saeuberlich.de",
      "phone": "05693 91320",
      "address": "Volkhard-Ladeck-Allee 56, 88877 Gro\u00dfenhain",
      "avatarUrl": "https://randomuser.me/api/portraits/men/52.jpg",
      "customerId": "KUNDE-2025-190"
    },
    "subtotal": 597.0,
    "deductions": 0,
    "total": 597.0
  },
  {
    "id": "047294e9",
    "status": "Refunded",
    "shopId": "shop-3",
    "date": "2025-06-30",
    "trackingNumber": "TRK-175438937",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dipl.-Ing. Nikolaos S\u00f6lzer B.A.",
      "email": "pheinz@lange.com",
      "phone": "+49(0)1278 703078",
      "address": "Heinrichstr. 8, 45686 Garmisch-Partenkirchen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/16.jpg",
      "customerId": "KUNDE-2025-191"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "f5dd2fdf",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-06-21",
    "trackingNumber": "TRK-711311339",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dipl.-Ing. Anne-Rose Hermighausen MBA.",
      "email": "ptlustek@yahoo.de",
      "phone": "+49 (0) 0712 001546",
      "address": "Heuserallee 0/7, 30646 Magdeburg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/57.jpg",
      "customerId": "KUNDE-2025-192"
    },
    "subtotal": 597.0,
    "deductions": 0,
    "total": 597.0
  },
  {
    "id": "1732bdfd308",
    "status": "Received",
    "shopId": "shop-4",
    "date": "2025-06-24",
    "trackingNumber": "TRK-605038973",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Nurten Krein B.Eng.",
      "email": "speukert@ernst.com",
      "phone": "+49(0) 865370009",
      "address": "Zobelgasse 636, 33377 B\u00fctzow",
      "avatarUrl": "https://randomuser.me/api/portraits/men/12.jpg",
      "customerId": "KUNDE-2025-193"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "dcc05a9",
    "status": "Refunded",
    "shopId": "shop-3",
    "date": "2025-06-21",
    "trackingNumber": "TRK-909134841",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Prof. Oskar Huhn",
      "email": "jenstrueb@aol.de",
      "phone": "09105388598",
      "address": "Annie-Ullrich-Ring 59, 16624 Pegnitz",
      "avatarUrl": "https://randomuser.me/api/portraits/women/26.jpg",
      "customerId": "KUNDE-2025-194"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "b8aaf15139",
    "status": "Cancelled",
    "shopId": "shop-2",
    "date": "2025-07-02",
    "trackingNumber": "TRK-943606889",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Mathilde Gute",
      "email": "cindyberger@stadelmann.com",
      "phone": "+49 (0) 0851 023902",
      "address": "Kranzstra\u00dfe 16, 99776 Delitzsch",
      "avatarUrl": "https://randomuser.me/api/portraits/men/31.jpg",
      "customerId": "KUNDE-2025-195"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "0c69018b494",
    "status": "Rejected",
    "shopId": "shop-3",
    "date": "2025-06-15",
    "trackingNumber": "TRK-292520434",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Diethard Schenk",
      "email": "alinawalter@gmx.de",
      "phone": "+49(0)7320 528503",
      "address": "Ann-Kathrin-Kramer-Allee 573, 37688 Heiligenstadt",
      "avatarUrl": "https://randomuser.me/api/portraits/women/31.jpg",
      "customerId": "KUNDE-2025-196"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "a994aaf9fa669e",
    "status": "Refunded",
    "shopId": "shop-4",
    "date": "2025-06-14",
    "trackingNumber": "TRK-773875554",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Sofie Birnbaum",
      "email": "jweinhold@hecker.de",
      "phone": "+49(0) 941685925",
      "address": "M\u00fcllerweg 8/8, 98913 Grevenbroich",
      "avatarUrl": "https://randomuser.me/api/portraits/women/13.jpg",
      "customerId": "KUNDE-2025-197"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "b43951d7",
    "status": "Received",
    "shopId": "shop-1",
    "date": "2025-07-05",
    "trackingNumber": "TRK-698541323",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 3,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Heinz-J\u00fcrgen Wende",
      "email": "ariehl@web.de",
      "phone": "+49(0)0813345310",
      "address": "Milos-Caspar-Platz 780, 43658 Sankt Goar",
      "avatarUrl": "https://randomuser.me/api/portraits/women/49.jpg",
      "customerId": "KUNDE-2025-198"
    },
    "subtotal": 329,
    "deductions": 0,
    "total": 329
  },
  {
    "id": "7defe40f1e5e",
    "status": "Registered",
    "shopId": "shop-1",
    "date": "2025-07-02",
    "trackingNumber": "TRK-202007024",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Prof. Margita Tlustek",
      "email": "ujopich@gorlitz.de",
      "phone": "+49 (0) 6748 242430",
      "address": "Ronny-Johann-Gasse 3/0, 49754 Schl\u00fcchtern",
      "avatarUrl": "https://randomuser.me/api/portraits/women/34.jpg",
      "customerId": "KUNDE-2025-199"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "064c9",
    "status": "Refunded",
    "shopId": "shop-1",
    "date": "2025-06-16",
    "trackingNumber": "TRK-656881478",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Carsten Warmer",
      "email": "schulzelisabeth@yahoo.de",
      "phone": "05765 84410",
      "address": "Olena-Stiebitz-Allee 6/1, 38002 Fallingbostel",
      "avatarUrl": "https://randomuser.me/api/portraits/men/20.jpg",
      "customerId": "KUNDE-2025-200"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "445ec53ea1",
    "status": "Rejected",
    "shopId": "shop-2",
    "date": "2025-06-12",
    "trackingNumber": "TRK-209247523",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dorothe Oestrovsky",
      "email": "kraushaarmagdalena@googlemail.com",
      "phone": "+49(0)8125 884720",
      "address": "Ditschlerinplatz 6/8, 33588 Mei\u00dfen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/13.jpg",
      "customerId": "KUNDE-2025-201"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "f7993ea03171",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-07-07",
    "trackingNumber": "TRK-685536968",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dr. Fatima S\u00fc\u00dfebier",
      "email": "hessealbina@johann.com",
      "phone": "+49(0)8731234247",
      "address": "Junitzstra\u00dfe 6, 39931 Bamberg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/31.jpg",
      "customerId": "KUNDE-2025-202"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "b5a2b23f7c9",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-06-28",
    "trackingNumber": "TRK-170838712",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Slobodan Krause B.Eng.",
      "email": "galina28@karz.com",
      "phone": "03421802699",
      "address": "Kati-Ladeck-Gasse 0/9, 34087 Zeulenroda",
      "avatarUrl": "https://randomuser.me/api/portraits/men/54.jpg",
      "customerId": "KUNDE-2025-203"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "a3924310b26",
    "status": "Received",
    "shopId": "shop-4",
    "date": "2025-07-05",
    "trackingNumber": "TRK-631082880",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Balthasar Biggen B.Sc.",
      "email": "dmentzel@neureuther.com",
      "phone": "+49 (0) 4724 505494",
      "address": "Siglinde-Bien-Gasse 3, 53665 Calau",
      "avatarUrl": "https://randomuser.me/api/portraits/women/43.jpg",
      "customerId": "KUNDE-2025-204"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "70b015cc236d",
    "status": "Registered",
    "shopId": "shop-4",
    "date": "2025-06-15",
    "trackingNumber": "TRK-855359915",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "David Nette",
      "email": "sibel72@gmail.com",
      "phone": "+49 (0) 9224 552897",
      "address": "Willibald-Lehmann-Gasse 5, 65804 Freudenstadt",
      "avatarUrl": "https://randomuser.me/api/portraits/women/24.jpg",
      "customerId": "KUNDE-2025-205"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "e012a3195c42",
    "status": "Refunded",
    "shopId": "shop-3",
    "date": "2025-06-12",
    "trackingNumber": "TRK-118792233",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Gundi Heidrich",
      "email": "qstriebitz@kitzmann.net",
      "phone": "0468712581",
      "address": "Rustweg 05, 68256 Mettmann",
      "avatarUrl": "https://randomuser.me/api/portraits/women/60.jpg",
      "customerId": "KUNDE-2025-206"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "b7aed6eb",
    "status": "Rejected",
    "shopId": "shop-1",
    "date": "2025-06-11",
    "trackingNumber": "TRK-378435596",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Arthur Schomber MBA.",
      "email": "calogero30@baum.com",
      "phone": "05851 960452",
      "address": "Engelbert-Wohlgemut-Stra\u00dfe 7, 33928 Holzminden",
      "avatarUrl": "https://randomuser.me/api/portraits/men/45.jpg",
      "customerId": "KUNDE-2025-207"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "3b25b7c",
    "status": "Rejected",
    "shopId": "shop-1",
    "date": "2025-07-02",
    "trackingNumber": "TRK-921029493",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ljubica Nohlmans",
      "email": "trudel79@kohl.de",
      "phone": "+49(0) 564500354",
      "address": "Beierplatz 99, 90557 N\u00fcrtingen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/20.jpg",
      "customerId": "KUNDE-2025-208"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "312936",
    "status": "Refunded",
    "shopId": "shop-3",
    "date": "2025-06-23",
    "trackingNumber": "TRK-523992366",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Tania Hartmann",
      "email": "marinaschuchhardt@geisel.com",
      "phone": "01594 869495",
      "address": "Hans-Hinrich-Reinhardt-Ring 7/7, 49908 Celle",
      "avatarUrl": "https://randomuser.me/api/portraits/men/56.jpg",
      "customerId": "KUNDE-2025-209"
    },
    "subtotal": 329.96999999999997,
    "deductions": 0,
    "total": 329.96999999999997
  },
  {
    "id": "dd1e721",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-14",
    "trackingNumber": "TRK-848575049",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Eberhard Heinz-Hein",
      "email": "ubruder@keudel.de",
      "phone": "+49(0)8267 70665",
      "address": "L\u00fcbsplatz 9/2, 54436 Stade",
      "avatarUrl": "https://randomuser.me/api/portraits/men/19.jpg",
      "customerId": "KUNDE-2025-210"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "7f65a3c",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-06-26",
    "trackingNumber": "TRK-867344075",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Karl-Georg L\u00f6wer",
      "email": "blochfadime@staude.com",
      "phone": "00416 060592",
      "address": "Karl-Werner-Trupp-Platz 469, 13885 S\u00e4ckingen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/46.jpg",
      "customerId": "KUNDE-2025-211"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "bfb1b766",
    "status": "Cancelled",
    "shopId": "shop-2",
    "date": "2025-07-06",
    "trackingNumber": "TRK-353811783",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Tomislav Fiebig B.Eng.",
      "email": "wilmacichorius@gmail.com",
      "phone": "(07584) 80590",
      "address": "Engelbert-Mohaupt-Gasse 3/6, 70322 L\u00f6rrach",
      "avatarUrl": "https://randomuser.me/api/portraits/women/14.jpg",
      "customerId": "KUNDE-2025-212"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "3d5e5c3",
    "status": "Registered",
    "shopId": "shop-4",
    "date": "2025-06-26",
    "trackingNumber": "TRK-531884837",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Maya Bohnbach-Wohlgemut",
      "email": "sliebelt@metz.de",
      "phone": "06245 978915",
      "address": "Zahnplatz 708, 21816 Kelheim",
      "avatarUrl": "https://randomuser.me/api/portraits/men/51.jpg",
      "customerId": "KUNDE-2025-213"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "40968fe9",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-18",
    "trackingNumber": "TRK-122882556",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "S\u00f6nke K\u00e4ster",
      "email": "zhenck@yahoo.de",
      "phone": "01052680461",
      "address": "Bekir-Putz-Allee 648, 85542 Grevesm\u00fchlen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/14.jpg",
      "customerId": "KUNDE-2025-214"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "b63583a72",
    "status": "Registered",
    "shopId": "shop-4",
    "date": "2025-06-17",
    "trackingNumber": "TRK-561348905",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Mareen Scheel",
      "email": "ykiller@misicher.de",
      "phone": "+49(0)1107720355",
      "address": "Ivanka-Bachmann-Gasse 01, 29664 Sangerhausen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/31.jpg",
      "customerId": "KUNDE-2025-215"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "bf71a6f5fe",
    "status": "Registered",
    "shopId": "shop-3",
    "date": "2025-06-15",
    "trackingNumber": "TRK-354293218",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Ingetraud K\u00f6hler",
      "email": "qsoeding@aol.de",
      "phone": "+49(0)3353 163305",
      "address": "Aloys-Seip-Platz 3/1, 43035 Kleve",
      "avatarUrl": "https://randomuser.me/api/portraits/men/46.jpg",
      "customerId": "KUNDE-2025-216"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "1b4f25e76",
    "status": "Registered",
    "shopId": "shop-1",
    "date": "2025-06-09",
    "trackingNumber": "TRK-432141714",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Hans-H. Haase",
      "email": "hasan45@seifert.org",
      "phone": "+49(0)2495844081",
      "address": "Alwine-Seip-Gasse 37, 08214 Badibling",
      "avatarUrl": "https://randomuser.me/api/portraits/men/1.jpg",
      "customerId": "KUNDE-2025-217"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "ff5efc4",
    "status": "Received",
    "shopId": "shop-3",
    "date": "2025-06-17",
    "trackingNumber": "TRK-762156893",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dipl.-Ing. Helmut Wernecke",
      "email": "harald04@aol.de",
      "phone": "+49(0) 535791275",
      "address": "Franca-Textor-Stra\u00dfe 5, 70795 Soest",
      "avatarUrl": "https://randomuser.me/api/portraits/men/53.jpg",
      "customerId": "KUNDE-2025-218"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "35efc8b",
    "status": "Registered",
    "shopId": "shop-1",
    "date": "2025-07-04",
    "trackingNumber": "TRK-878651145",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Meinhard Schuster",
      "email": "gstahr@wende.com",
      "phone": "(04751) 82303",
      "address": "Hedda-Fritsch-Gasse 5, 15584 Rottweil",
      "avatarUrl": "https://randomuser.me/api/portraits/women/54.jpg",
      "customerId": "KUNDE-2025-219"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "406e1e9d",
    "status": "Registered",
    "shopId": "shop-1",
    "date": "2025-06-20",
    "trackingNumber": "TRK-695775396",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Daniele Trupp",
      "email": "fridolin27@holsten.de",
      "phone": "06294531612",
      "address": "Ramazan-Heinz-Weg 168, 04087 Regensburg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/58.jpg",
      "customerId": "KUNDE-2025-220"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "1d8aca7",
    "status": "Registered",
    "shopId": "shop-1",
    "date": "2025-06-20",
    "trackingNumber": "TRK-268073176",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Chantal Weimer B.A.",
      "email": "fbeyer@soelzer.com",
      "phone": "+49 (0) 7215 709864",
      "address": "L\u00f6chelplatz 13, 29723 Fulda",
      "avatarUrl": "https://randomuser.me/api/portraits/men/32.jpg",
      "customerId": "KUNDE-2025-221"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "edd530",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-06-09",
    "trackingNumber": "TRK-826459203",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dr. Wolfhard M\u00f6chlichen",
      "email": "nergerselim@yahoo.de",
      "phone": "03325 39350",
      "address": "Hellwigweg 615, 72132 Bischofswerda",
      "avatarUrl": "https://randomuser.me/api/portraits/women/32.jpg",
      "customerId": "KUNDE-2025-222"
    },
    "subtotal": 398.0,
    "deductions": 0,
    "total": 398.0
  },
  {
    "id": "fb925a6",
    "status": "Rejected",
    "shopId": "shop-3",
    "date": "2025-06-12",
    "trackingNumber": "TRK-728927419",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Aline Bl\u00fcmel",
      "email": "vheinrich@aol.de",
      "phone": "+49(0)9544 82431",
      "address": "Cornelius-Holsten-Stra\u00dfe 661, 55197 Wolfach",
      "avatarUrl": "https://randomuser.me/api/portraits/men/60.jpg",
      "customerId": "KUNDE-2025-223"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "5ebb4e41",
    "status": "Registered",
    "shopId": "shop-3",
    "date": "2025-07-06",
    "trackingNumber": "TRK-191460572",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Prof. Barbara Renner",
      "email": "thoralfhecker@killer.net",
      "phone": "+49(0)3024 09156",
      "address": "Francoise-Roskoth-Gasse 031, 31510 Mayen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/55.jpg",
      "customerId": "KUNDE-2025-224"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "5198c2324de",
    "status": "Registered",
    "shopId": "shop-4",
    "date": "2025-06-20",
    "trackingNumber": "TRK-973353909",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Prof. Ulrich S\u00e4uberlich MBA.",
      "email": "bergersylvio@aol.de",
      "phone": "08739 18627",
      "address": "Etzoldallee 12, 43042 Seelow",
      "avatarUrl": "https://randomuser.me/api/portraits/men/45.jpg",
      "customerId": "KUNDE-2025-225"
    },
    "subtotal": 251.0,
    "deductions": 0,
    "total": 251.0
  },
  {
    "id": "8a874e181",
    "status": "Received",
    "shopId": "shop-3",
    "date": "2025-06-20",
    "trackingNumber": "TRK-495140968",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Hansj\u00fcrgen Carsten B.Eng.",
      "email": "almuth06@stolze.de",
      "phone": "06126 887680",
      "address": "J\u00e4ntschstra\u00dfe 5, 19495 Rothenburg ob der Tauber",
      "avatarUrl": "https://randomuser.me/api/portraits/women/4.jpg",
      "customerId": "KUNDE-2025-226"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "3130a20",
    "status": "Approved",
    "shopId": "shop-1",
    "date": "2025-07-04",
    "trackingNumber": "TRK-950184360",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dipl.-Ing. Carlos auch Schlauchin B.A.",
      "email": "claus28@yahoo.de",
      "phone": "+49(0) 863391917",
      "address": "Hans-Martin-Gude-Gasse 480, 07663 Gro\u00df-Gerau",
      "avatarUrl": "https://randomuser.me/api/portraits/men/13.jpg",
      "customerId": "KUNDE-2025-227"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "549c801",
    "status": "Received",
    "shopId": "shop-3",
    "date": "2025-06-24",
    "trackingNumber": "TRK-873725538",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Aynur Jungfer-Losekann",
      "email": "nnerger@gmx.de",
      "phone": "(03000) 26619",
      "address": "Pechelstra\u00dfe 0/0, 76444 Strausberg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/2.jpg",
      "customerId": "KUNDE-2025-228"
    },
    "subtotal": 329.96999999999997,
    "deductions": 0,
    "total": 329.96999999999997
  },
  {
    "id": "707234567b",
    "status": "Received",
    "shopId": "shop-3",
    "date": "2025-06-20",
    "trackingNumber": "TRK-183531122",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Rafael Hettner",
      "email": "andrzej55@aol.de",
      "phone": "+49(0) 175514983",
      "address": "Carl-Heinz-Scheibe-Gasse 39, 20104 Demmin",
      "avatarUrl": "https://randomuser.me/api/portraits/women/21.jpg",
      "customerId": "KUNDE-2025-229"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "d6c9a5d6",
    "status": "Cancelled",
    "shopId": "shop-2",
    "date": "2025-07-01",
    "trackingNumber": "TRK-605374229",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ing. Telse Haering B.A.",
      "email": "hans-dieter28@rohleder.de",
      "phone": "+49 (0) 9896 847057",
      "address": "Hans-Erich-Fr\u00f6hlich-Weg 35, 12118 Quedlinburg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/9.jpg",
      "customerId": "KUNDE-2025-230"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "b5a626814c",
    "status": "Received",
    "shopId": "shop-2",
    "date": "2025-07-06",
    "trackingNumber": "TRK-691101660",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Elly H\u00e4nel",
      "email": "kitzmannnorman@hartmann.com",
      "phone": "01471 364094",
      "address": "Bonbachring 8, 80057 Kassel",
      "avatarUrl": "https://randomuser.me/api/portraits/women/1.jpg",
      "customerId": "KUNDE-2025-231"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "d21c069679",
    "status": "Registered",
    "shopId": "shop-2",
    "date": "2025-07-06",
    "trackingNumber": "TRK-926845559",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Bernhardine Gerlach",
      "email": "okroker@mies.com",
      "phone": "04206 99423",
      "address": "Linkestr. 3, 35188 Ebermannstadt",
      "avatarUrl": "https://randomuser.me/api/portraits/women/53.jpg",
      "customerId": "KUNDE-2025-232"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "595373c05",
    "status": "Rejected",
    "shopId": "shop-3",
    "date": "2025-06-10",
    "trackingNumber": "TRK-946177481",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Prof. Jasmina Sch\u00fcler MBA.",
      "email": "gabriele51@gmail.com",
      "phone": "+49(0)5308 467457",
      "address": "Bachmannstr. 2/5, 60677 Sankt Goar",
      "avatarUrl": "https://randomuser.me/api/portraits/men/11.jpg",
      "customerId": "KUNDE-2025-233"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "e0fce93db",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-06-11",
    "trackingNumber": "TRK-145710256",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Cetin Kallert",
      "email": "ackermannheino@aol.de",
      "phone": "+49(0) 821780932",
      "address": "Andres-Schweitzer-Weg 1/7, 02566 Main-H\u00f6chst",
      "avatarUrl": "https://randomuser.me/api/portraits/women/24.jpg",
      "customerId": "KUNDE-2025-234"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "8ff4aec1ab2",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-07-01",
    "trackingNumber": "TRK-231984334",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Louis Kade B.Sc.",
      "email": "heinz-walterebert@gmx.de",
      "phone": "05754060556",
      "address": "Dimitrios-Pruschke-Weg 2, 68912 Perleberg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/4.jpg",
      "customerId": "KUNDE-2025-235"
    },
    "subtotal": 329.96999999999997,
    "deductions": 0,
    "total": 329.96999999999997
  },
  {
    "id": "077ae56",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-06-09",
    "trackingNumber": "TRK-607167941",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ingolf Wei\u00df MBA.",
      "email": "schweitzeredmund@paertzelt.com",
      "phone": "+49(0)8909872409",
      "address": "Lindauplatz 46, 96778 Germersheim",
      "avatarUrl": "https://randomuser.me/api/portraits/men/38.jpg",
      "customerId": "KUNDE-2025-236"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "64d6557",
    "status": "Received",
    "shopId": "shop-3",
    "date": "2025-07-03",
    "trackingNumber": "TRK-518572964",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Svea Oderwald",
      "email": "gsteckel@bohnbach.de",
      "phone": "+49(0)7561 111965",
      "address": "Seipring 659, 19041 Schwandorf",
      "avatarUrl": "https://randomuser.me/api/portraits/men/6.jpg",
      "customerId": "KUNDE-2025-237"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "a2144190",
    "status": "Registered",
    "shopId": "shop-2",
    "date": "2025-06-15",
    "trackingNumber": "TRK-155331944",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Wolfhard Misicher",
      "email": "isabel95@aol.de",
      "phone": "03782 877599",
      "address": "Strohstra\u00dfe 7/0, 00641 Schwandorf",
      "avatarUrl": "https://randomuser.me/api/portraits/women/40.jpg",
      "customerId": "KUNDE-2025-238"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "298d677",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-06-12",
    "trackingNumber": "TRK-843501391",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Semra Lange",
      "email": "ukostolzin@riehl.de",
      "phone": "0588388576",
      "address": "Gunther-Bloch-Allee 1/6, 81982 L\u00fcbeck",
      "avatarUrl": "https://randomuser.me/api/portraits/men/30.jpg",
      "customerId": "KUNDE-2025-239"
    },
    "subtotal": 779.97,
    "deductions": 0,
    "total": 779.97
  },
  {
    "id": "55a5df",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-07-03",
    "trackingNumber": "TRK-813999790",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Bogdan Kobelt",
      "email": "keudellea@hartung.de",
      "phone": "02932 619604",
      "address": "Dowergweg 414, 86430 Borna",
      "avatarUrl": "https://randomuser.me/api/portraits/men/23.jpg",
      "customerId": "KUNDE-2025-240"
    },
    "subtotal": 597.0,
    "deductions": 0,
    "total": 597.0
  },
  {
    "id": "f63c7934",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-15",
    "trackingNumber": "TRK-850475688",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Emanuel Gude",
      "email": "nscheel@koch.org",
      "phone": "04612 16727",
      "address": "Miriam-Hesse-Stra\u00dfe 498, 85145 Lemgo",
      "avatarUrl": "https://randomuser.me/api/portraits/men/28.jpg",
      "customerId": "KUNDE-2025-241"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "1dad461d2b",
    "status": "Cancelled",
    "shopId": "shop-2",
    "date": "2025-06-30",
    "trackingNumber": "TRK-894393949",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Kristine Boucsein",
      "email": "elenaknappe@sontag.com",
      "phone": "(01743) 50679",
      "address": "Ansgar-Girschner-Allee 2, 54470 Borken",
      "avatarUrl": "https://randomuser.me/api/portraits/women/31.jpg",
      "customerId": "KUNDE-2025-242"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "63e87d0",
    "status": "Cancelled",
    "shopId": "shop-3",
    "date": "2025-06-22",
    "trackingNumber": "TRK-709604112",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Inna Ruppert-Nerger",
      "email": "beckmannjosefine@johann.de",
      "phone": "04307759675",
      "address": "Linkeplatz 363, 89663 Mainburg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/53.jpg",
      "customerId": "KUNDE-2025-243"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "0d83730d",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-06-30",
    "trackingNumber": "TRK-268238173",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "G\u00f6n\u00fcl B\u00e4hr",
      "email": "laszlo52@gierschner.com",
      "phone": "+49(0)3073 99692",
      "address": "Jockelring 3, 12748 Spremberg",
      "avatarUrl": "https://randomuser.me/api/portraits/women/44.jpg",
      "customerId": "KUNDE-2025-244"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "65531b84",
    "status": "Cancelled",
    "shopId": "shop-3",
    "date": "2025-06-20",
    "trackingNumber": "TRK-185944642",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ria Zahn",
      "email": "renateschweitzer@gmail.com",
      "phone": "+49(0)3856 31947",
      "address": "Fiebigstra\u00dfe 11, 02276 Meppen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/36.jpg",
      "customerId": "KUNDE-2025-245"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "ad1e1b",
    "status": "Registered",
    "shopId": "shop-3",
    "date": "2025-06-24",
    "trackingNumber": "TRK-900749787",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Hans-Wolfgang Schenk",
      "email": "bernhard83@preiss.com",
      "phone": "(04530) 18038",
      "address": "Dietzgasse 7, 40108 Bayreuth",
      "avatarUrl": "https://randomuser.me/api/portraits/men/29.jpg",
      "customerId": "KUNDE-2025-246"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "0f19b0",
    "status": "Rejected",
    "shopId": "shop-1",
    "date": "2025-06-30",
    "trackingNumber": "TRK-533980865",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Reza Textor-Rogner",
      "email": "raphaelladeck@yahoo.de",
      "phone": "09767776703",
      "address": "Hubert-Kostolzin-Weg 777, 07452 Iserlohn",
      "avatarUrl": "https://randomuser.me/api/portraits/women/22.jpg",
      "customerId": "KUNDE-2025-247"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "8c83bd86",
    "status": "Rejected",
    "shopId": "shop-4",
    "date": "2025-06-27",
    "trackingNumber": "TRK-167635775",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Friedrich Roskoth B.A.",
      "email": "spiesshans-guenter@gmail.com",
      "phone": "(05495) 942919",
      "address": "Johann-Klemt-Gasse 85, 16489 Ebermannstadt",
      "avatarUrl": "https://randomuser.me/api/portraits/women/30.jpg",
      "customerId": "KUNDE-2025-248"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "225c744",
    "status": "Registered",
    "shopId": "shop-2",
    "date": "2025-06-30",
    "trackingNumber": "TRK-507116515",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Cornelia Heintze",
      "email": "hoffmannirina@giess.com",
      "phone": "+49(0)1492872255",
      "address": "Etzoldweg 675, 59331 Rothenburg ob der Tauber",
      "avatarUrl": "https://randomuser.me/api/portraits/men/24.jpg",
      "customerId": "KUNDE-2025-249"
    },
    "subtotal": 398.0,
    "deductions": 0,
    "total": 398.0
  },
  {
    "id": "7f0f0e7d",
    "status": "Rejected",
    "shopId": "shop-2",
    "date": "2025-07-08",
    "trackingNumber": "TRK-727411996",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Aysel J\u00e4hn",
      "email": "hschulz@gmail.com",
      "phone": "+49(0)8526 763418",
      "address": "Schusterstr. 50, 01171 Deggendorf",
      "avatarUrl": "https://randomuser.me/api/portraits/men/46.jpg",
      "customerId": "KUNDE-2025-250"
    },
    "subtotal": 519.98,
    "deductions": 0,
    "total": 519.98
  },
  {
    "id": "2f402d1",
    "status": "Refunded",
    "shopId": "shop-4",
    "date": "2025-06-20",
    "trackingNumber": "TRK-433483255",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Heinz-Wilhelm Henschel",
      "email": "jolanta27@gmail.com",
      "phone": "+49(0)7293 417995",
      "address": "Hendriksstra\u00dfe 6/2, 72990 Schwarzenberg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/55.jpg",
      "customerId": "KUNDE-2025-251"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "87d82d79a7a3b4",
    "status": "Approved",
    "shopId": "shop-1",
    "date": "2025-07-01",
    "trackingNumber": "TRK-148937643",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Univ.Prof. Johann Kruschwitz",
      "email": "ole27@lindner.de",
      "phone": "+49(0)5107 95316",
      "address": "Severin-Kraushaar-Weg 394, 05933 Berlin",
      "avatarUrl": "https://randomuser.me/api/portraits/men/28.jpg",
      "customerId": "KUNDE-2025-252"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "5df43c14b",
    "status": "Received",
    "shopId": "shop-4",
    "date": "2025-06-11",
    "trackingNumber": "TRK-870090948",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Friedhelm Siering",
      "email": "leonardotrommler@gmx.de",
      "phone": "+49(0)8966 151922",
      "address": "Freudenbergerstra\u00dfe 0, 28255 Sondershausen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/18.jpg",
      "customerId": "KUNDE-2025-253"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "29e49494f",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-06-23",
    "trackingNumber": "TRK-485277984",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Herr Falk Briemer",
      "email": "ibauer@gmx.de",
      "phone": "+49 (0) 9125 753679",
      "address": "Mitschkering 60, 77834 Deggendorf",
      "avatarUrl": "https://randomuser.me/api/portraits/women/46.jpg",
      "customerId": "KUNDE-2025-254"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "8072573",
    "status": "Registered",
    "shopId": "shop-4",
    "date": "2025-06-24",
    "trackingNumber": "TRK-688223163",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Freya R\u00f6mer B.A.",
      "email": "haeringsinaida@gmx.de",
      "phone": "(05975) 69863",
      "address": "Seifertstr. 8/7, 33193 Diepholz",
      "avatarUrl": "https://randomuser.me/api/portraits/men/49.jpg",
      "customerId": "KUNDE-2025-255"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "87f2346d8b5d6",
    "status": "Approved",
    "shopId": "shop-4",
    "date": "2025-06-13",
    "trackingNumber": "TRK-341316007",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Steffen Siering",
      "email": "roderichmude@wirth.com",
      "phone": "(04212) 01667",
      "address": "Haufferstra\u00dfe 210, 52516 Backnang",
      "avatarUrl": "https://randomuser.me/api/portraits/women/43.jpg",
      "customerId": "KUNDE-2025-256"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "b6ae63",
    "status": "Received",
    "shopId": "shop-3",
    "date": "2025-06-10",
    "trackingNumber": "TRK-914507171",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Sigrid Vogt",
      "email": "haraldloechel@jockel.com",
      "phone": "00033089702",
      "address": "J\u00fcttnerweg 85, 80651 Guben",
      "avatarUrl": "https://randomuser.me/api/portraits/men/20.jpg",
      "customerId": "KUNDE-2025-257"
    },
    "subtotal": 109.99,
    "deductions": 0,
    "total": 109.99
  },
  {
    "id": "82823a8",
    "status": "Received",
    "shopId": "shop-1",
    "date": "2025-06-20",
    "trackingNumber": "TRK-213262540",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Ullrich Kambs",
      "email": "qritter@gmail.com",
      "phone": "+49(0)1309 866376",
      "address": "Willibert-Trapp-Stra\u00dfe 14, 65347 Lemgo",
      "avatarUrl": "https://randomuser.me/api/portraits/men/25.jpg",
      "customerId": "KUNDE-2025-258"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "be2a3152a3cc4",
    "status": "Rejected",
    "shopId": "shop-3",
    "date": "2025-06-23",
    "trackingNumber": "TRK-746649472",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Sabri R\u00e4del",
      "email": "jaroslawcichorius@gmx.de",
      "phone": "+49 (0) 9213 617503",
      "address": "L\u00f6werstra\u00dfe 99, 68000 G\u00fcnzburg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/11.jpg",
      "customerId": "KUNDE-2025-259"
    },
    "subtotal": 597.0,
    "deductions": 0,
    "total": 597.0
  },
  {
    "id": "498d",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-06-15",
    "trackingNumber": "TRK-197419369",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Krystyna Trapp",
      "email": "gretewirth@web.de",
      "phone": "+49 (0) 8833 113541",
      "address": "Gr\u00f6ttnerstra\u00dfe 71, 83918 Schw\u00e4bisch Hall",
      "avatarUrl": "https://randomuser.me/api/portraits/women/14.jpg",
      "customerId": "KUNDE-2025-260"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "36e7b58dc9a9",
    "status": "Received",
    "shopId": "shop-3",
    "date": "2025-07-08",
    "trackingNumber": "TRK-922802982",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Steve Heinrich B.A.",
      "email": "isaeuberlich@yahoo.de",
      "phone": "+49(0) 847489168",
      "address": "Thiesring 673, 74437 D\u00f6beln",
      "avatarUrl": "https://randomuser.me/api/portraits/men/32.jpg",
      "customerId": "KUNDE-2025-261"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "cda667bd28ed",
    "status": "Rejected",
    "shopId": "shop-1",
    "date": "2025-07-07",
    "trackingNumber": "TRK-878358806",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Gerard Bolander-Hermann",
      "email": "sorgatzsandra@web.de",
      "phone": "+49(0)6813 70306",
      "address": "Drewesstr. 26, 17546 Roth",
      "avatarUrl": "https://randomuser.me/api/portraits/men/19.jpg",
      "customerId": "KUNDE-2025-262"
    },
    "subtotal": 519.98,
    "deductions": 0,
    "total": 519.98
  },
  {
    "id": "a79df725cd1",
    "status": "Cancelled",
    "shopId": "shop-1",
    "date": "2025-06-27",
    "trackingNumber": "TRK-415614722",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Hans-Albert Lachmann B.A.",
      "email": "jolandastriebitz@stolze.net",
      "phone": "00725244861",
      "address": "Lorchstr. 64, 07169 N\u00f6rdlingen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/2.jpg",
      "customerId": "KUNDE-2025-263"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "404d9734eb",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-06-17",
    "trackingNumber": "TRK-231862189",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Natalia Plath B.A.",
      "email": "diethercarsten@aol.de",
      "phone": "(07422) 52657",
      "address": "Isa-Freudenberger-Gasse 4, 41237 Ebermannstadt",
      "avatarUrl": "https://randomuser.me/api/portraits/women/36.jpg",
      "customerId": "KUNDE-2025-264"
    },
    "subtotal": 125.5,
    "deductions": 0,
    "total": 125.5
  },
  {
    "id": "fbf152032ec",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-07-03",
    "trackingNumber": "TRK-673335939",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Herr Wolfhard H\u00e4nel MBA.",
      "email": "philipphoelzenbecher@ditschlerin.com",
      "phone": "+49(0)1335826322",
      "address": "Albertine-Zirme-Platz 8/3, 07126 Neustadtner Waldnaab",
      "avatarUrl": "https://randomuser.me/api/portraits/women/39.jpg",
      "customerId": "KUNDE-2025-265"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "dd42b8a9661a",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-06-23",
    "trackingNumber": "TRK-299995760",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Irmtraut Rohleder-Beier",
      "email": "schlosserbranko@aol.de",
      "phone": "+49(0)7371 297751",
      "address": "Oliver-Patberg-Platz 7, 72018 Gerolzhofen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/57.jpg",
      "customerId": "KUNDE-2025-266"
    },
    "subtotal": 519.98,
    "deductions": 0,
    "total": 519.98
  },
  {
    "id": "78649be7e",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-06-25",
    "trackingNumber": "TRK-984885377",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Diethard Hande",
      "email": "bdowerg@baum.net",
      "phone": "0872755085",
      "address": "Nohlmansweg 09, 85222 Burg",
      "avatarUrl": "https://randomuser.me/api/portraits/men/26.jpg",
      "customerId": "KUNDE-2025-267"
    },
    "subtotal": 398.0,
    "deductions": 0,
    "total": 398.0
  },
  {
    "id": "4376397f2",
    "status": "Cancelled",
    "shopId": "shop-4",
    "date": "2025-06-11",
    "trackingNumber": "TRK-309506818",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Sigmund Niemeier",
      "email": "troeststefania@aol.de",
      "phone": "09408 778051",
      "address": "Valentine-Rudolph-Ring 00, 13703 M\u00fcnchen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/38.jpg",
      "customerId": "KUNDE-2025-268"
    },
    "subtotal": 179.97,
    "deductions": 0,
    "total": 179.97
  },
  {
    "id": "03be2e15",
    "status": "Refunded",
    "shopId": "shop-4",
    "date": "2025-06-18",
    "trackingNumber": "TRK-487842510",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Corinna R\u00f6rricht",
      "email": "schuelerreimar@wagenknecht.com",
      "phone": "0707065258",
      "address": "Nohlmansstr. 83, 37235 Bogen",
      "avatarUrl": "https://randomuser.me/api/portraits/women/8.jpg",
      "customerId": "KUNDE-2025-269"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "e9aedfd",
    "status": "Approved",
    "shopId": "shop-4",
    "date": "2025-06-10",
    "trackingNumber": "TRK-555227798",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 2,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dipl.-Ing. Anneliese Heuser MBA.",
      "email": "gorlitzsigurd@gmail.com",
      "phone": "+49(0)9444 065438",
      "address": "L\u00f6chelstra\u00dfe 70, 60977 Rothenburg ob der Tauber",
      "avatarUrl": "https://randomuser.me/api/portraits/women/56.jpg",
      "customerId": "KUNDE-2025-270"
    },
    "subtotal": 519.98,
    "deductions": 0,
    "total": 519.98
  },
  {
    "id": "e294644507",
    "status": "Rejected",
    "shopId": "shop-3",
    "date": "2025-07-01",
    "trackingNumber": "TRK-535468204",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 3,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Dirk Radisch",
      "email": "oderwaldrene@seidel.net",
      "phone": "+49(0)7318 192588",
      "address": "Barthgasse 20, 79570 Scheinfeld",
      "avatarUrl": "https://randomuser.me/api/portraits/men/49.jpg",
      "customerId": "KUNDE-2025-271"
    },
    "subtotal": 327,
    "deductions": 0,
    "total": 327
  },
  {
    "id": "e99681ae-90d6-497e-97f0-0a33c5fc0bf6",
    "status": "Refunded",
    "shopId": "shop-2",
    "date": "2025-07-01",
    "trackingNumber": "TRK-279508675",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 2,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Heimo Kostolzin",
      "email": "hans-peterjunk@kreusel.com",
      "phone": "+49 (0) 6097 406945",
      "address": "Almut-Ladeck-Stra\u00dfe 56, 25047 S\u00f6mmerda",
      "avatarUrl": "https://randomuser.me/api/portraits/men/9.jpg",
      "customerId": "KUNDE-2025-272"
    },
    "subtotal": 219.98,
    "deductions": 0,
    "total": 219.98
  },
  {
    "id": "3f29340e",
    "status": "Approved",
    "shopId": "shop-4",
    "date": "2025-07-07",
    "trackingNumber": "TRK-491271086",
    "products": [
      {
        "id": "2",
        "name": "Xiaomi Redmi Note 10",
        "sku": "REDMI10-64GB",
        "quantity": 1,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/aaa/fff&text=XR",
        "price": 199.0,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Sigfried S\u00fc\u00dfebier",
      "email": "mareikerosenow@loewer.com",
      "phone": "+49(0)3077080495",
      "address": "Jockelstr. 6/7, 94985 G\u00f6rlitz",
      "avatarUrl": "https://randomuser.me/api/portraits/men/32.jpg",
      "customerId": "KUNDE-2025-273"
    },
    "subtotal": 199.0,
    "deductions": 0,
    "total": 199.0
  },
  {
    "id": "b438fd",
    "status": "Approved",
    "shopId": "shop-3",
    "date": "2025-06-22",
    "trackingNumber": "TRK-312723131",
    "products": [
      {
        "id": "3",
        "name": "Apple AirPods Pro",
        "sku": "APPRO-2025",
        "quantity": 1,
        "reason": "Defective item",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=AP",
        "price": 259.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Amir Schottin-Hornig",
      "email": "michelkabus@margraf.org",
      "phone": "(00127) 084769",
      "address": "Riehlgasse 7, 14564 Ilmenau",
      "avatarUrl": "https://randomuser.me/api/portraits/women/30.jpg",
      "customerId": "KUNDE-2025-274"
    },
    "subtotal": 259.99,
    "deductions": 0,
    "total": 259.99
  },
  {
    "id": "07965",
    "status": "Approved",
    "shopId": "shop-3",
    "date": "2025-06-28",
    "trackingNumber": "TRK-949373509",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Changed mind",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Valentine Berger",
      "email": "cordknappe@wirth.com",
      "phone": "09706 859059",
      "address": "Mercedes-van der Dussen-Gasse 1/2, 81788 Deggendorf",
      "avatarUrl": "https://randomuser.me/api/portraits/men/60.jpg",
      "customerId": "KUNDE-2025-275"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "87c9307",
    "status": "Refunded",
    "shopId": "shop-4",
    "date": "2025-07-04",
    "trackingNumber": "TRK-925503070",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 1,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Lili Naser",
      "email": "htschentscher@yahoo.de",
      "phone": "(09274) 615210",
      "address": "Rico-Hein-Gasse 00, 73495 Bad Kreuznach",
      "avatarUrl": "https://randomuser.me/api/portraits/men/16.jpg",
      "customerId": "KUNDE-2025-276"
    },
    "subtotal": 59.99,
    "deductions": 0,
    "total": 59.99
  },
  {
    "id": "705a7e64946",
    "status": "Received",
    "shopId": "shop-4",
    "date": "2025-06-15",
    "trackingNumber": "TRK-482058029",
    "products": [
      {
        "id": "1",
        "name": "Samsung Galaxy S21",
        "sku": "SGS21-128BL",
        "quantity": 3,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/ccc/fff&text=SG",
        "price": 125.5,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Veli Warmer",
      "email": "hans-uwebarth@juettner.de",
      "phone": "(02437) 980468",
      "address": "Lisa-Riehl-Allee 6/5, 48368 Mayen",
      "avatarUrl": "https://randomuser.me/api/portraits/men/49.jpg",
      "customerId": "KUNDE-2025-277"
    },
    "subtotal": 376.5,
    "deductions": 0,
    "total": 376.5
  },
  {
    "id": "0ff38efd2",
    "status": "Approved",
    "shopId": "shop-2",
    "date": "2025-06-20",
    "trackingNumber": "TRK-193566883",
    "products": [
      {
        "id": "5",
        "name": "Zapatos deportivos",
        "sku": "ZAP-123",
        "quantity": 2,
        "reason": "Not as described",
        "imageUrl": "https://dummyimage.com/64x64/eee/fff&text=ZP",
        "price": 59.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Christine Weller",
      "email": "janus54@googlemail.com",
      "phone": "+49(0)8176 74408",
      "address": "Danielle-Junck-Platz 3, 92928 Ueckerm\u00fcnde",
      "avatarUrl": "https://randomuser.me/api/portraits/men/36.jpg",
      "customerId": "KUNDE-2025-278"
    },
    "subtotal": 119.98,
    "deductions": 0,
    "total": 119.98
  },
  {
    "id": "d13a1b9a3",
    "status": "Registered",
    "shopId": "shop-2",
    "date": "2025-06-15", 
    "trackingNumber": "TRK-793323484",
    "products": [
      {
        "id": "4",
        "name": "Logitech MX Master 3",
        "sku": "LOGI-MX3",
        "quantity": 3,
        "reason": "Wrong size",
        "imageUrl": "https://dummyimage.com/64x64/bbb/fff&text=MX",
        "price": 109.99,
        "comments": [],
        "history": []
      }
    ],
    "client": {
      "name": "Meinrad Beyer-Rosenow",
      "email": "senol01@yahoo.de",
      "phone": "+49(0)0898 160044",
      "address": "Jurij-Haase-Ring 2/3, 14271 Biedenkopf",
      "avatarUrl": "https://randomuser.me/api/portraits/men/37.jpg",
      "customerId": "KUNDE-2025-279"
    },
    "subtotal": 329,
    "deductions": 0,
    "total": 329
  }

];

export default returnsMock;
