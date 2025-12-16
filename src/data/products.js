// src/data/products.js - Comprehensive Product Database

export const productCategories = [
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'fashion', name: 'Fashion', icon: '👗' },
  { id: 'home-kitchen', name: 'Home & Kitchen', icon: '🏠' },
  { id: 'groceries', name: 'Groceries', icon: '🛒' },
  { id: 'beauty-health', name: 'Beauty & Health', icon: '💄' },
  { id: 'sports-fitness', name: 'Sports & Fitness', icon: '⚽' },
  { id: 'toys-games', name: 'Toys & Games', icon: '🎮' },
  { id: 'books-media', name: 'Books & Media', icon: '📚' }
];

export const allProducts = [
  // ===== ELECTRONICS =====
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    category: 'Electronics',
    subcategory: 'Smartphones',
    rating: 4.8,
    reviews: 1542,
    image:'src/assets/iphonepro.jpg',
    isNew: true,
    isPopular: true,
    isFeatured: true,
    brand: 'Apple',
    description: 'Latest iPhone with A17 Pro chip and titanium design.',
    features: ['6.7" Display', '256GB Storage', '48MP Camera', '5G']
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199.99,
    originalPrice: 1399.99,
    discount: 14,
    category: 'Electronics',
    subcategory: 'Smartphones',
    rating: 4.7,
    reviews: 1248,
    image: 'src/assets/samsung.jpg',
    isNew: true,
    isPopular: true,
    brand: 'Samsung',
    description: 'Advanced smartphone with S Pen and AI features.',
    features: ['6.8" Display', '512GB Storage', '200MP Camera', 'S Pen']
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Headphones',
    price: 349.99,
    originalPrice: 399.99,
    discount: 12,
    category: 'Electronics',
    subcategory: 'Audio',
    rating: 4.9,
    reviews: 892,
    image: 'src/assets/headphopne.jpg',

    isPopular: true,
    brand: 'Sony',
    description: 'Industry-leading noise cancellation headphones.',
    features: ['Noise Cancelling', '30hr Battery', 'Hi-Res Audio']
  },
  {
    id: 4,
    name: 'MacBook Air M3',
    price: 1099.99,
    originalPrice: 1299.99,
    discount: 15,
    category: 'Electronics',
    subcategory: 'Laptops',
    rating: 4.8,
    reviews: 756,
    image: 'src/assets/macbook.jpg',
    isNew: true,
    isFeatured: true,
    brand: 'Apple',
    description: 'Ultra-thin laptop with Apple Silicon M3 chip.',
    features: ['13.6" Display', '16GB RAM', '512GB SSD', '18hr Battery']
  },
  {
    id: 5,
    name: 'Samsung 4K Smart TV',
    price: 899.99,
    originalPrice: 1099.99,
    discount: 18,
    category: 'Electronics',
    subcategory: 'TVs',
    rating: 4.6,
    reviews: 543,
    image: 'src/assets/samsungtv.jpg',
    isPopular: true,
    brand: 'Samsung',
    description: '55-inch 4K UHD Smart TV with HDR.',
    features: ['55" Display', '4K UHD', 'Smart TV', 'HDR10+']
  },
  {
    id: 6,
    name: 'Apple Watch Series 9',
    price: 399.99,
    originalPrice: 429.99,
    discount: 7,
    category: 'Electronics',
    subcategory: 'Wearables',
    rating: 4.7,
    reviews: 1243,
    image: 'src/assets/watchnew.jpg',
    isNew: true,
    isPopular: true,
    brand: 'Apple',
    description: 'Advanced smartwatch with health monitoring.',
    features: ['Health Tracking', 'GPS', 'Water Resistant', 'ECG']
  },
  {
    id: 7,
    name: 'DJI Mini 3 Pro Drone',
    price: 759.99,
    originalPrice: 909.99,
    discount: 16,
    category: 'Electronics',
    subcategory: 'Drones',
    rating: 4.8,
    reviews: 412,
    image: 'src/assets/drone.jpg',
    isFeatured: true,
    brand: 'DJI',
    description: 'Compact drone with 4K camera and obstacle sensing.',
    features: ['4K Camera', '34min Flight', 'Obstacle Sensing', 'Under 249g']
  },
  {
    id: 8,
    name: 'PlayStation 5',
    price: 499.99,
    originalPrice: 549.99,
    discount: 9,
    category: 'Electronics',
    subcategory: 'Gaming',
    rating: 4.9,
    reviews: 2894,
    image:'src/assets/newplaystt.jpg',
    isPopular: true,
    brand: 'Sony',
    description: 'Next-gen gaming console with ultra-high speed SSD.',
    features: ['4K Gaming', '825GB SSD', 'Ray Tracing', 'Backward Compatible']
  },

  // ===== FASHION =====
  {
    id: 9,
    name: 'Premium Leather Jacket',
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    category: 'Fashion',
    subcategory: 'Outerwear',
    rating: 4.6,
    reviews: 342,
    image: 'src/assets/winter jacket.jpg',
    isNew: true,
    isPopular: true,
    brand: 'LeatherCraft',
    description: 'Genuine leather jacket with premium finish.',
    features: ['100% Leather', 'Water Resistant', 'Multiple Pockets']
  },
  {
    id: 10,
    name: 'Designer Winter Coat',
    price: 159.99,
    originalPrice: 229.99,
    discount: 30,
    category: 'Fashion',
    subcategory: 'Outerwear',
    rating: 4.5,
    reviews: 287,
    image: 'src/assets/winter jacket.jpg',
    isFeatured: true,
    brand: 'UrbanStyle',
    description: 'Warm winter coat with thermal insulation.',
    features: ['Thermal Insulation', 'Waterproof', 'Hood Included']
  },
  {
    id: 11,
    name: 'Nike Air Max Sneakers',
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    category: 'Fashion',
    subcategory: 'Footwear',
    rating: 4.7,
    reviews: 894,
    image: 'src/assets/shoes.jpg',
    isPopular: true,
    brand: 'Nike',
    description: 'Comfortable sneakers with Air Max technology.',
    features: ['Air Cushioning', 'Breathable', 'Multiple Colors']
  },
  {
    id: 12,
    name: 'Rolex Datejust Watch',
    price: 8999.99,
    category: 'Fashion',
    subcategory: 'Watches',
    rating: 4.9,
    reviews: 156,
    image: 'src/assets/rolex.jpg',
    isFeatured: true,
    brand: 'Rolex',
    description: 'Luxury automatic watch with date function.',
    features: ['Automatic Movement', 'Stainless Steel', 'Water Resistant']
  },

  // ===== HOME & KITCHEN =====
  {
    id: 13,
    name: 'KitchenAid Stand Mixer',
    price: 329.99,
    originalPrice: 399.99,
    discount: 17,
    category: 'Home & Kitchen',
    subcategory: 'Appliances',
    rating: 4.8,
    reviews: 1245,
    image: 'src/assets/kitchen mixer.jpg',
    isPopular: true,
    brand: 'KitchenAid',
    description: 'Professional stand mixer with multiple attachments.',
    features: ['10 Speeds', '5.5 Quart Bowl', 'Planetary Mixing']
  },
  {
    id: 14,
    name: 'modern kitchen set',
    price: 499.99,
    originalPrice: 699.99,
    discount: 28,
    category: 'Home & Kitchen',
    subcategory: 'Furniture',
    rating: 4.7,
    reviews: 892,
    image:'src/assets/newkit.jpg',
    isFeatured: true,
    brand: 'SleepWell',
    description: 'Queen size memory foam kitchen set for better .',
    features: ['Memory Foam', 'Queen Size', '10-Year Warranty']
  },
  {
    id: 15,
    name: 'Slippers',
    price: 699.99,
    originalPrice: 799.99,
    discount: 12,
    category: 'Fashion',
    subcategory: 'Fashion wear',
    rating: 4.8,
    reviews: 678,
    image: 'src/assets/slipper.webp',
    isPopular: true,
    brand: 'Dava',
    description: 'super smoothy slippers.',
    features: ['Cordless', 'soft', 'quality']
  },
  {
    id: 16,
    name: 'kitchen Set',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    category: 'Home & Kitchen',
    subcategory: 'Appliances',
    rating: 4.6,
    reviews: 2456,
    image: 'src/assets/set.jpg',
    isPopular: true,
    brand: 'Nova',
    description: '7-in-1 multi-functional pressure cooker.',
    features: ['7 Functions', '6 Quart', '14 Programs']
  },

  // ===== GROCERIES =====
  {
    id: 17,
    name: 'Organic Grocery Bundle',
    price: 49.99,
    category: 'Groceries',
    subcategory: 'Organic',
    rating: 4.5,
    reviews: 234,
    image: 'src/assets/groceries1.jpg',
    isFeatured: true,
    brand: 'FarmFresh',
    description: 'Assorted organic fruits and vegetables.',
    features: ['100% Organic', 'Fresh Daily', 'Locally Sourced']
  },
  {
    id: 18,
    name: 'juice maker',
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    category: 'Groceries',
    subcategory: 'Beverages',
    rating: 4.7,
    reviews: 567,
    image: 'src/assets/juice.jpg',
    isPopular: true,
    brand: 'juiceMasters',
    description: 'Arabica juice beans from Colombia.',
    features: ['Arabica Beans', '1kg Pack', 'Medium Roast']
  },

  // ===== BEAUTY & HEALTH =====
  {
    id: 19,
    name: 'Premium Skincare Set',
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    category: 'Beauty & Health',
    subcategory: 'Skincare',
    rating: 4.6,
    reviews: 789,
    image: 'src/assets/skincare.jpg',
    isNew: true,
    isPopular: true,
    brand: 'SkinCare+',
    description: 'Complete skincare routine set.',
    features: ['Cleanser', 'Moisturizer', 'Serum', 'Sunscreen']
  },
  {
    id: 20,
    name: 'Electric Toothbrush',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    category: 'Beauty & Health',
    subcategory: 'Oral Care',
    rating: 4.8,
    reviews: 456,
    image: 'src/assets/toothbrush.jpg',
    isPopular: true,
    brand: 'OralCare',
    description: 'Sonic electric toothbrush with multiple modes.',
    features: ['Sonic Technology', '3 Modes', '2 Week Battery']
  },

  // ===== SPORTS & FITNESS =====
  {
    id: 21,
    name: 'Yoga Mat Premium',
    price: 34.99,
    originalPrice: 49.99,
    discount: 30,
    category: 'Sports & Fitness',
    subcategory: 'Yoga',
    rating: 4.5,
    reviews: 345,
    image: 'src/assets/yoga.jpg',
    isPopular: true,
    brand: 'FlexiMat',
    description: 'Non-slip yoga mat with carrying strap.',
    features: ['Non-Slip', '6mm Thick', 'Includes Strap']
  },
  {
    id: 22,
    name: 'Dumbbell Set (20kg)',
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    category: 'Sports & Fitness',
    subcategory: 'Weight Training',
    rating: 4.7,
    reviews: 278,
    image: 'src/assets/dumbell set.jpg',
    isFeatured: true,
    brand: 'PowerGrip',
    description: 'Adjustable dumbbell set for home workouts.',
    features: ['Adjustable', 'Rubber Coated', '20kg Total']
  },

  // ===== TOYS & GAMES =====
  {
    id: 23,
    name: 'LEGO Star Wars Set',
    price: 149.99,
    originalPrice: 189.99,
    discount: 21,
    category: 'Toys & Games',
    subcategory: 'Building Sets',
    rating: 4.9,
    reviews: 892,
    image: 'src/assets/lego.jpg',
    isPopular: true,
    brand: 'LEGO',
    description: 'Detailed Star Wars Millennium Falcon set.',
    features: ['1354 Pieces', 'Display Stand', 'Collector Item']
  },

  // ===== BOOKS & MEDIA =====
  {
    id: 24,
    name: 'Kindle Paperwhite',
    price: 139.99,
    originalPrice: 159.99,
    discount: 12,
    category: 'Books & Media',
    subcategory: 'E-Readers',
    rating: 4.7,
    reviews: 1567,
    image: 'src/assets/paper.jpg',
    isPopular: true,
    brand: 'Amazon',
    description: 'Waterproof e-reader with adjustable light.',
    features: ['6.8" Display', 'Waterproof', 'Weeks of Battery']
  },

  // Add more products to reach 40+ total
  {
    id: 25,
    name: 'AirPods Pro 2',
    price: 249.99,
    originalPrice: 279.99,
    discount: 11,
    category: 'Electronics',
    subcategory: 'Audio',
    rating: 4.8,
    reviews: 2345,
    image: 'src/assets/airpods.jpg',
    isPopular: true,
    brand: 'Apple',
    description: 'Wireless earbuds with active noise cancellation.',
    features: ['Noise Cancelling', 'Spatial Audio', '6hr Battery']
  },

  {
    id: 26,
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    category: 'Electronics',
    subcategory: 'Gaming',
    rating: 4.6,
    reviews: 456,
    image: 'src/assets/gaming.jpg',
    isPopular: true,
    brand: 'Logitech',
    description: 'High-precision wireless gaming mouse.',
    features: ['Wireless', '25K DPI', 'RGB Lighting', '70hr Battery']
  },

  {
    id: 27,
    name: '4K Action Camera',
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    category: 'Electronics',
    subcategory: 'Cameras',
    rating: 4.5,
    reviews: 321,
    image: 'src/assets/camera.jpg',
    isNew: true,
    brand: 'GoPro',
    description: 'Waterproof action camera for adventures.',
    features: ['4K Video', 'Waterproof', 'Image Stabilization']
  },

  {
    id: 28,
    name: 'Smart Home Hub',
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    category: 'Electronics',
    subcategory: 'Smart Home',
    rating: 4.4,
    reviews: 234,
    image: 'src/assets/hub.jpg',
    isFeatured: true,
    brand: 'Google',
    description: 'Central hub for smart home devices.',
    features: ['Voice Control', 'Multi-room Audio', 'Works with 1000+ devices']
  },

  {
    id: 29,
    name: 'Designer Sunglasses',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    category: 'Fashion',
    subcategory: 'Accessories',
    rating: 4.7,
    reviews: 567,
    image: 'src/assets/glass.jpg',
    isPopular: true,
    brand: 'Ray-Ban',
    description: 'Classic aviator sunglasses with UV protection.',
    features: ['UV Protection', 'Polarized', 'Metal Frame']
  },

  {
    id: 30,
    name: 'Home products',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    category: 'using products',
    subcategory: 'products',
    rating: 4.6,
    reviews: 189,
    image: 'src/assets/newhome.jpg',
    isFeatured: true,
    brand: 'home products',
    description: 'products',
    features: ['uses', 'Fit', 'every products']
  },

  // Continue adding more products...
];

// Helper functions
export const getPopularProducts = () => {
  return allProducts.filter(product => product.isPopular).slice(0, 8);
};

export const getFeaturedProducts = () => {
  return allProducts.filter(product => product.isFeatured).slice(0, 8);
};

export const getNewArrivals = () => {
  return allProducts.filter(product => product.isNew).slice(0, 8);
};

export const getProductsByCategory = (category) => {
  return allProducts.filter(product => 
    category === 'all' ? true : product.category === category
  );
};

export const getProductById = (id) => {
  return allProducts.find(product => product.id === id);
};