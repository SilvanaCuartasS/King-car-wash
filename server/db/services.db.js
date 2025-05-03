let services = [
  [
    {
      "id": 1,
      "name": "Express",
      "subtitle": "100% Quality Assured",
      "price": 15,
      "description": "A fast, effective wash to keep your car looking fresh. Includes exterior wash, chamois dry, and tire gloss.",
      "extra_services": "Exterior wash with active foam, Microfiber drying, Quick window cleaning, Express tire shine"
    },
    {
      "id": 2,
      "name": "Wheel-S",
      "subtitle": "100% Quality Assured",
      "price": 25,
      "description": "Focused on your wheels! This package ensures deep cleaning, decontamination, and tire shine for a spotless look.",
      "extra_services": "Exterior wash with active foam, Deep wheel cleaning, Brake dust removal, Tire shine & protection"
    },
    {
      "id": 3,
      "name": "Full Clean",
      "subtitle": "100% Quality Assured",
      "price": 30,
      "description": "A deeper clean inside and out! Includes interior vacuuming, dashboard cleaning, and plastic protectant.",
      "extra_services": "Everything in the Express, Interior vacuuming, Dashboard and console cleaning, Plastic protectant application"
    },
    {
      "id": 4,
      "name": "Interior-R",
      "subtitle": "100% Quality Assured",
      "price": 40,
      "description": "Restore your car’s interior with a deep clean and fresh scent, perfect for everyday maintenance.",
      "extra_services": "Full interior vacuuming, Dashboard & console cleaning, Fabric or leather conditioning, Odor elimination treatment"
    },
    {
      "id": 5,
      "name": "Premium",
      "subtitle": "100% Quality Assured",
      "price": 50,
      "description": "Get a showroom shine! Includes clay bar treatment, premium wax, deep wheel cleaning, and interior fragrance.",
      "extra_services": "Everything in the Full Clean, Clay bar paint decontamination, Liquid wax for shine & protection, Deep wheel cleaning"
    },
    {
      "id": 6,
      "name": "King Wash",
      "subtitle": "100% Quality Assured",
      "price": 80,
      "description": "The ultimate car care! Includes engine steam cleaning, express ceramic coating, and headlight restoration.",
      "extra_services": "Everything in the Premium Detail, Engine steam cleaning, Express ceramic coating, Headlight polishing & sealing"
    }
  ]
];

const getAllservices = async () => {
  return services;
};

module.exports = {
    getAllservices,
  };