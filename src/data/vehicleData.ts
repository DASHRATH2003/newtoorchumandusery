// Vehicle data store

export interface Vehicle {
  id: number;
  name: string;
  image: string;
  category: string;
  location: string;
  price: string;
  perDay: string;
  features?: {
    icon: string;
    text: string;
  }[];
  priceList?: {
    hours: string;
    price: string;
  }[];
}

export const vehicles: Vehicle[] = [
  // Buses
  {
    id: 1,
    name: 'Bus 49 Seater',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/LV/SG/LU/11542059/34-seater-tata-transport-bus-500x500.png',
    category: 'Bus',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 5,000' },
      { hours: '8hrs 800kms', price: '₹ 5,500' },
      { hours: '12hrs 1000kms', price: '₹ 6,500' },
      { hours: 'Out Station / KMs', price: '₹ 20' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  },
  {
    id: 2,
    name: 'Bus 33 Seater',
    image: 'https://www.volvobuses.com/content/dam/volvo-buses/markets/india/1860x1050-volvo-9600.jpg',
    category: 'Bus',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 4,500' },
      { hours: '8hrs 800kms', price: '₹ 5,000' },
      { hours: '12hrs 1000kms', price: '₹ 6,000' },
      { hours: 'Out Station / KMs', price: '₹ 18' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  },
  {
    id: 3,
    name: 'AC Bus 45 Seater',
    image: 'https://ik.imagekit.io/wx5dqb8qkk/vehicle/vehicle-1715843479996.jpg?tr=w-500,h-333',
    category: 'Bus',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 4,800' },
      { hours: '8hrs 800kms', price: '₹ 5,300' },
      { hours: '12hrs 1000kms', price: '₹ 6,300' },
      { hours: 'Out Station / KMs', price: '₹ 19' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  },
  // Mini Buses
  {
    id: 4,
    name: 'Minibus 21 Seater',
    image: 'https://www.delhitempotraveller.com/assets/images/18-seater-mini-bus.jpg',
    category: 'Mini Bus',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 4,000' },
      { hours: '8hrs 800kms', price: '₹ 4,500' },
      { hours: '12hrs 1000kms', price: '₹ 5,500' },
      { hours: 'Out Station / KMs', price: '₹ 16' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  },
  {
    id: 5,
    name: 'Mini Bus 15 Seater',
    image: 'https://5.imimg.com/data5/XU/UQ/EP/SELLER-2036047/15-seater-luxury-mini-bus.jpg',
    category: 'Mini Bus',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 3,800' },
      { hours: '8hrs 800kms', price: '₹ 4,300' },
      { hours: '12hrs 1000kms', price: '₹ 5,300' },
      { hours: 'Out Station / KMs', price: '₹ 15' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  },
  // Cars
  {
    id: 6,
    name: 'Innova Crysta 7+1',
    image: 'https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg',
    category: 'Cars',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 5,000' },
      { hours: '8hrs 800kms', price: '₹ 5,500' },
      { hours: '12hrs 1000kms', price: '₹ 6,500' },
      { hours: 'Out Station / KMs', price: '₹ 20' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  },
  {
    id: 7,
    name: 'Toyota Etios',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/315633413/XO/UT/SU/28947164/toyota-etios-car-rental-service-500x500.jpg',
    category: 'Cars',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 3,500' },
      { hours: '8hrs 800kms', price: '₹ 4,000' },
      { hours: '12hrs 1000kms', price: '₹ 5,000' },
      { hours: 'Out Station / KMs', price: '₹ 15' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  },
  {
    id: 8,
    name: 'Hyundai Aura',
    image: 'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Aura/gallery/pc/auragallerypc_1.jpg',
    category: 'Cars',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 3,300' },
      { hours: '8hrs 800kms', price: '₹ 3,800' },
      { hours: '12hrs 1000kms', price: '₹ 4,800' },
      { hours: 'Out Station / KMs', price: '₹ 14' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  },
  {
    id: 9,
    name: 'Maruti Swift Dzire',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/swift-dzire-exterior-right-front-three-quarter-71.jpeg',
    category: 'Cars',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 3,200' },
      { hours: '8hrs 800kms', price: '₹ 3,700' },
      { hours: '12hrs 1000kms', price: '₹ 4,700' },
      { hours: 'Out Station / KMs', price: '₹ 13' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  },
  // Vans
  {
    id: 10,
    name: 'Tempo Traveller 12 + 1',
    image: 'https://rkvtravels.com/rkv-images-1/tempo-traveller-12-seater-rental-chennai.png',
    category: 'Van',
    location: 'Bangalore',
    price: 'Call for Price',
    perDay: '/ Day',
    features: [
      {
        icon: 'seat',
        text: "AC Seats"
      },
      {
        icon: 'clock',
        text: "24/7 Day Rate"
      },
      {
        icon: 'luggage',
        text: "Luggage Rate"
      }
    ],
    priceList: [
      { hours: '8hrs 400kms', price: '₹ 4,200' },
      { hours: '8hrs 800kms', price: '₹ 4,700' },
      { hours: '12hrs 1000kms', price: '₹ 5,700' },
      { hours: 'Out Station / KMs', price: '₹ 17' },
      { hours: 'Driver Rate', price: '₹ 450' },
      { hours: 'After Per Driver Rate', price: '₹ 450' },
      { hours: 'Extra Per Hours', price: '₹ 250' }
    ]
  }
];

// Function to get vehicle by ID
export const getVehicleById = (id: number): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};

// Function to get similar vehicles (same category, different ID)
export const getSimilarVehicles = (id: number, limit: number = 3): Vehicle[] => {
  const vehicle = getVehicleById(id);
  if (!vehicle) return [];
  
  return vehicles
    .filter(v => v.category === vehicle.category && v.id !== id)
    .slice(0, limit);
};