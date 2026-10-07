import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Vehicle from "./model/Vehicle.js";

dotenv.config();

const srilankanVehicles = [
  {
    brand: "Suzuki",
    model: "Alto 800",
    engine: "796cc Petrol",
    topSpeed: 140,
    acceleration: 19.0,
    price: 4500,
    booked: false,
    type: "Hatchback",
    transmission: "Manual",
    seats: 4,
    rentalType: "Per Day",
    securityDeposit: 15000,
    availability: "available",
    primaryImage: "/cars/suzuki_alto.jpg",
    thumbnails: ["/cars/suzuki_alto.jpg"],
    description: "Sri Lanka's most economical and popular city car. Excellent fuel economy (20+ km/l), easy parking, and perfect for tight city traffic or daily budget commutes."
  },
  {
    brand: "Suzuki",
    model: "Wagon R Stingray",
    engine: "660cc Mild Hybrid",
    topSpeed: 140,
    acceleration: 14.0,
    price: 6500,
    booked: false,
    type: "Hatchback",
    transmission: "Automatic",
    seats: 4,
    rentalType: "Per Day",
    securityDeposit: 20000,
    availability: "available",
    primaryImage: "/cars/suzuki_wagon_r.jpg",
    thumbnails: ["/cars/suzuki_wagon_r.jpg"],
    description: "The #1 favorite rental car in Sri Lanka. Exceptional hybrid fuel economy, spacious head-room, smooth automatic transmission, and great AC."
  },
  {
    brand: "Toyota",
    model: "Vitz",
    engine: "1.0L VVT-i",
    topSpeed: 160,
    acceleration: 12.5,
    price: 7500,
    booked: false,
    type: "Hatchback",
    transmission: "Automatic",
    seats: 5,
    rentalType: "Per Day",
    securityDeposit: 20000,
    availability: "available",
    primaryImage: "/cars/toyota_vitz.jpg",
    thumbnails: ["/cars/toyota_vitz.jpg"],
    description: "A stylish, reliable 5-seater hatchback with legendary Toyota durability. Perfect for couple getaways and comfortable daily town driving."
  },
  {
    brand: "Toyota",
    model: "Corolla Axio Hybrid",
    engine: "1.5L Hybrid Synergy Drive",
    topSpeed: 180,
    acceleration: 10.5,
    price: 9500,
    booked: false,
    type: "Sedan",
    transmission: "Automatic",
    seats: 5,
    rentalType: "Per Day",
    securityDeposit: 25000,
    availability: "available",
    primaryImage: "/cars/toyota_axio.jpg",
    thumbnails: ["/cars/toyota_axio.jpg"],
    description: "The staple sedan of Sri Lanka. Outstanding hybrid fuel efficiency, smooth highway ride, generous boot space, and unbeatable reliability for long journeys."
  },
  {
    brand: "Toyota",
    model: "Prius",
    engine: "1.8L Hybrid",
    topSpeed: 180,
    acceleration: 9.8,
    price: 11000,
    booked: false,
    type: "Sedan",
    transmission: "Automatic",
    seats: 5,
    rentalType: "Per Day",
    securityDeposit: 30000,
    availability: "available",
    primaryImage: "/cars/toyota_prius.jpg",
    thumbnails: ["/cars/toyota_prius.jpg"],
    description: "Futuristic comfort and eco-friendly hybrid power. Features plush interiors, smooth cruise control, and whisper-quiet EV mode for executive trips."
  },
  {
    brand: "Toyota",
    model: "Premio",
    engine: "1.5L VVT-i",
    topSpeed: 185,
    acceleration: 11.0,
    price: 12500,
    booked: false,
    type: "Sedan",
    transmission: "Automatic",
    seats: 5,
    rentalType: "Per Day",
    securityDeposit: 30000,
    availability: "available",
    primaryImage: "/cars/toyota_premio.jpg",
    thumbnails: ["/cars/toyota_premio.jpg"],
    description: "Sri Lanka's premier executive sedan with teak trims, ultra-plush seating, spacious legroom, and refined prestige suitable for weddings, business, and family VIP travel."
  },
  {
    brand: "Toyota",
    model: "Raize",
    engine: "1.0L Turbo",
    topSpeed: 170,
    acceleration: 10.2,
    price: 13500,
    booked: false,
    type: "SUV",
    transmission: "Automatic",
    seats: 5,
    rentalType: "Per Day",
    securityDeposit: 30000,
    availability: "available",
    primaryImage: "/cars/toyota_raize.jpg",
    thumbnails: ["/cars/toyota_raize.jpg"],
    description: "Modern, elevated compact SUV with high ground clearance, turbo acceleration, and cutting-edge safety features. Ideal for Sri Lanka's varied road conditions."
  },
  {
    brand: "Honda",
    model: "Vezel",
    engine: "1.5L i-DCD Hybrid",
    topSpeed: 180,
    acceleration: 8.8,
    price: 14000,
    booked: false,
    type: "SUV",
    transmission: "Automatic",
    seats: 5,
    rentalType: "Per Day",
    securityDeposit: 35000,
    availability: "available",
    primaryImage: "/cars/honda_vezel.jpg",
    thumbnails: ["/cars/honda_vezel.jpg"],
    description: "The beloved crossover SUV in Sri Lanka with sporty styling, Magic Seats, panoramic view, paddle shifters, and punchy hybrid power."
  },
  {
    brand: "Toyota",
    model: "HiAce KDH",
    engine: "3.0L D-4D Turbo Diesel",
    topSpeed: 160,
    acceleration: 13.0,
    price: 18500,
    booked: false,
    type: "Van",
    transmission: "Automatic",
    seats: 10,
    rentalType: "Per Day",
    securityDeposit: 40000,
    availability: "available",
    primaryImage: "/cars/toyota_hiace_kdh.jpg",
    thumbnails: ["/cars/toyota_hiace_kdh.jpg"],
    description: "The undisputed king of group travel and island tours in Sri Lanka. Dual AC, plush passenger seats, and immense luggage space for up to 10 passengers."
  }
];

const seedVehicles = async () => {
  try {
    await connectDB();
    await Vehicle.deleteMany({});
    console.log("Existing vehicles cleared.");
    const inserted = await Vehicle.insertMany(srilankanVehicles);
    console.log(`Successfully seeded ${inserted.length} Sri Lankan vehicles!`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding vehicles:", error);
    process.exit(1);
  }
};

seedVehicles();
