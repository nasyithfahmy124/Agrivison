export const products = [
  {
    id: 1,
    name: "Benih Inpari 32 Premium",
    category: "Benih",
    subCategory: "Padi",
    brand: "AgroVision Seed",
    description:
      "Benih padi unggul dengan produktivitas tinggi dan ketahanan terhadap penyakit utama.",
    image:
      "/images/marketplace/inpari32.png",
    price: 125000,
    unit: "5 Kg",
    stock: 124,
    rating: 4.9,
    reviews: 284,
    badge: "AI Recommended",
    aiScore: 92,
    yieldImpact: "+15%",
    revenueImpact: "+Rp 4.2 Juta",
    tags: [
      "Padi",
      "Produktivitas Tinggi",
      "Tahan Penyakit",
    ],
    recommended: true,
    bestseller: true,
    organic: false,
  },

  {
    id: 2,
    name: "Pupuk NPK Mutiara 16-16-16",
    category: "Pupuk",
    subCategory: "Makro",
    brand: "AgroVision Nutrient",
    description:
      "Nutrisi seimbang untuk fase vegetatif dan generatif tanaman.",
    image:
      "/images/marketplace/npk.png",
    price: 450000,
    unit: "50 Kg",
    stock: 82,
    rating: 4.8,
    reviews: 167,
    badge: "Best Seller",
    aiScore: 88,
    yieldImpact: "+10%",
    revenueImpact: "+Rp 2.7 Juta",
    tags: [
      "Pupuk",
      "NPK",
      "Pertumbuhan",
    ],
    recommended: true,
    bestseller: true,
    organic: false,
  },

  {
    id: 3,
    name: "Blast-Off 500EC",
    category: "Pestisida",
    subCategory: "Insektisida",
    brand: "AgroVision Protect",
    description:
      "Efektif mengendalikan hama penggerek batang dan wereng.",
    image:
      "/images/marketplace/blastoff.png",
    price: 85000,
    unit: "250 ml",
    stock: 45,
    rating: 4.7,
    reviews: 132,
    badge: "Popular",
    aiScore: 81,
    yieldImpact: "+5%",
    revenueImpact: "+Rp 1.1 Juta",
    tags: [
      "Wereng",
      "Penggerek Batang",
      "Proteksi",
    ],
    recommended: false,
    bestseller: false,
    organic: false,
  },
  {
    id: 4,
    name: "GreenBoost Liquid",
    category: "Pupuk",
    subCategory: "Daun",
    brand: "AgroVision Nutrient",
    description:
      "Pupuk daun premium untuk meningkatkan kualitas hasil panen.",
    image:
      "/images/marketplace/greenboost.png",
    price: 65000,
    unit: "1 Liter",
    stock: 61,
    rating: 4.8,
    reviews: 95,
    badge: "AI Recommended",
    aiScore: 90,
    yieldImpact: "+12%",
    revenueImpact: "+Rp 2.4 Juta",
    tags: [
      "Pupuk Daun",
      "Premium",
      "Panen",
    ],
    recommended: true,
    bestseller: false,
    organic: true,
  },

  {
    id: 5,
    name: "Benih Jagung Hibrida MaxGrow",
    category: "Benih",
    subCategory: "Jagung",
    brand: "AgroVision Seed",
    description:
      "Benih jagung hibrida dengan tongkol besar dan tahan kekeringan.",
    image:
      "/images/marketplace/jagung.png",
    price: 175000,
    unit: "5 Kg",
    stock: 90,
    rating: 4.9,
    reviews: 218,
    badge: "Premium",
    aiScore: 89,
    yieldImpact: "+18%",
    revenueImpact: "+Rp 5.6 Juta",
    tags: [
      "Jagung",
      "Hibrida",
      "Kekeringan",
    ],
    recommended: true,
    bestseller: false,
    organic: false,
  },

  {
    id: 6,
    name: "BioGrow Organik",
    category: "Pupuk",
    subCategory: "Organik",
    brand: "AgroVision Organic",
    description:
      "Pupuk organik ramah lingkungan untuk meningkatkan kesuburan tanah.",
    image:
      "/images/marketplace/biogrow.png",
    price: 98000,
    unit: "25 Kg",
    stock: 72,
    rating: 4.9,
    reviews: 143,
    badge: "Organic",
    aiScore: 91,
    yieldImpact: "+11%",
    revenueImpact: "+Rp 2.1 Juta",
    tags: [
      "Organik",
      "Tanah",
      "Ramah Lingkungan",
    ],
    recommended: true,
    bestseller: false,
    organic: true,
  },
];

export const categories = [
  "Semua",
  "Benih",
  "Pupuk",
  "Pestisida",
];

export const recommendation = {
  title:
    "Rekomendasi AI untuk Lahan Anda",
  product:
    "Benih Inpari 32 Premium",
  reason:
    "Berdasarkan kondisi lahan dan prediksi cuaca 7 hari ke depan.",
  aiScore: 92,
  expectedYield: "+15%",
  expectedRevenue:
    "+Rp 4.2 Juta",
};