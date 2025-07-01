const addressMock = [
  {
    id: 1,
    type: "sender",
    company: "Retoure24 GmbH",
    street: "Hauptstraße 123",
    postalCode: "10115",
    city: "Berlin",
    country: "Alemania",
    isMain: true,
    isActive: true,
  },
  {
    id: 2,
    type: "receiver",
    company: "Bodega Digital",
    street: "Bahnhofstraße 88",
    postalCode: "20095",
    city: "Hamburgo",
    country: "Alemania",
    isMain: false,
    isActive: true,
  },
  {
    id: 3,
    type: "notification",
    company: "Soporte Retoure24",
    street: "Serviceweg 5",
    postalCode: "40210",
    city: "Düsseldorf",
    country: "Alemania",
    isMain: false,
    isActive: false,
  },
];

export default addressMock;
// This mock data is used to simulate address information in the application.
// It includes different types of addresses (sender, receiver, notification) with details such as company name, street, postal code, city, and country.
// The `isMain` property indicates if the address is the main address, and `isActive` indicates if the address is currently active.
// This data can be used for testing components that display or manage addresses in the application.