// 1. PUT YOUR WHATSAPP NUMBER HERE (Include 234, no + sign or leading zero)
const WHATSAPP_NUMBER = "2349022410960";

// 2. YOUR FULL INVENTORY
const INVENTORY = [
  {
    id: "pixels",
    title: "Google Pixels",
    items: [
      { name: "Pixel 7A 128GB", condition: "UK Used (No Box)", price: "₦330,000", image: "images/pixel7a.jpg" },
      { name: "Pixel 7 128GB", condition: "UK Used (No Box)", price: "₦350,000", image: "images/pixel7.jpg" },
      { name: "Pixel 7 Pro 128GB", condition: "UK Used (No Box)", price: "₦470,000", image: "images/pixel7pro.jpg" },
      { name: "Pixel 8 128GB", condition: "UK Used (No Box)", price: "₦420,000", image: "images/pixel8.jpg" },
      { name: "Pixel 8 256GB", condition: "UK Used (No Box)", price: "₦440,000", image: "images/pixel8.jpg" },
      { name: "Pixel 9 Pro 128GB", condition: "UK Used (No Box)", price: "₦690,000", image: "images/pixel9pro.jpg" },
      { name: "Pixel 6 Pro 128GB", condition: "Boxed (Not New)", price: "₦420,000", image: "images/pixel6.jpg" },
      { name: "Pixel 6 Pro 256GB", condition: "Boxed (Not New)", price: "₦450,000", image: "images/pixel6.jpg" },
      { name: "Pixel 7 Pro 128GB", condition: "Boxed (Not New)", price: "₦490,000", image: "images/pixel7.jpg" },
      { name: "Pixel 7 Pro 256GB", condition: "Boxed (Not New)", price: "₦570,000", image: "images/pixel7.jpg" },
      { name: "Pixel 8 Pro 128GB", condition: "Boxed (Not New)", price: "₦730,000", image: "images/pixel8.jpg" },
      { name: "Pixel 8 Pro 256GB", condition: "Boxed (Not New)", price: "₦750,000", image: "images/pixel8.jpg" },
      { name: "Pixel 8 Pro 512GB", condition: "Boxed (Not New)", price: "₦790,000", image: "images/pixel8.jpg" },
      { name: "Pixel 9 Pro 256GB", condition: "Boxed (Not New)", price: "₦940,000", image: "images/pixel9pro.jpg" },
      { name: "Pixel 9 Pro 512GB", condition: "Boxed (Not New)", price: "₦990,000", image: "images/pixel9pro.jpg" },
      { name: "Pixel 9 Pro XL 256GB", condition: "Boxed (Not New)", price: "₦990,000", image: "images/pixel9pro.jpg" },
      { name: "Pixel 9 Pro XL 512GB", condition: "Boxed (Not New)", price: "₦1,040,000", image: "images/pixel9pro.jpg" },
      { name: "Pixel 9 Pro Fold 256GB", condition: "Boxed (Not New)", price: "₦1,090,000", image: "images/pixel9profold.jpg" },
      { name: "Pixel 9 Pro Fold 512GB", condition: "Boxed (Not New)", price: "₦1,190,000", image: "images/pixel9profold.jpg" },
      { name: "Pixel 10 128GB", condition: "Brand New (Non-Active)", price: "₦1,030,000", image: "images/pixel10.jpg"},
      { name: "Pixel 10 256GB", condition: "Brand New (Non-Active)", price: "₦1,120,000", image: "images/pixel10.jpg"},
      { name: "Pixel 10 Pro 128GB", condition: "Brand New (Non-Active)", price: "₦1,340,000", image: "images/pixel10.jpg" },
      { name: "Pixel 10 Pro 256GB", condition: "Brand New (Non-Active)", price: "₦1,390,000", image: "images/pixel10.jpg" },
      { name: "Pixel 10 Pro XL 256GB", condition: "Brand New (Non-Active)", price: "₦1,440,000", image: "images/pixel10.jpg" },
      { name: "Pixel 10 Pro Fold 256GB", condition: "Brand New (Non-Active)", price: "₦1,840,000", image: "images/pixel10profold.jpg" }
    ]
  },
  {
    id: "iphones-used",
    title: "Used & Boxed iPhones",
    items: [
      { name: "iPhone XR 64GB", condition: "Foreign Used", price: "₦230,000" },
      { name: "iPhone XR 128GB", condition: "Foreign Used", price: "₦265,000" },
      { name: "iPhone XR 256GB", condition: "Foreign Used", price: "₦280,000" },
      { name: "iPhone 11 64GB", condition: "Foreign Used", price: "₦270,000" },
      { name: "iPhone 11 128GB", condition: "Foreign Used", price: "₦305,000" },
      { name: "iPhone 11 256GB", condition: "Foreign Used", price: "₦330,000" },
      { name: "iPhone 11 Pro 64GB", condition: "Foreign Used", price: "₦330,000" },
      { name: "iPhone 11 Pro 256GB", condition: "Foreign Used", price: "₦360,000" },
      { name: "iPhone 11 Pro Max 64GB", condition: "Foreign Used", price: "₦340,000" },
      { name: "iPhone 11 Pro Max 256GB", condition: "Foreign Used", price: "₦400,000" },
      { name: "iPhone 11 Pro Max 512GB", condition: "Foreign Used", price: "₦430,000" },
      { name: "iPhone 12 64GB", condition: "Foreign Used", price: "₦305,000" },
      { name: "iPhone 12 128GB", condition: "Foreign Used", price: "₦350,000" },
      { name: "iPhone 12 256GB", condition: "Foreign Used", price: "₦380,000" },
      { name: "iPhone 12 Pro 128GB", condition: "Foreign Used", price: "₦405,000" },
      { name: "iPhone 12 Pro 256GB", condition: "Foreign Used", price: "₦435,000" },
      { name: "iPhone 12 Pro 512GB", condition: "Foreign Used", price: "₦460,000" },
      { name: "iPhone 12 Pro Max 128GB", condition: "Foreign Used", price: "₦490,000" },
      { name: "iPhone 12 Pro Max 256GB", condition: "Foreign Used", price: "₦530,000" },
      { name: "iPhone 12 Pro Max 512GB", condition: "Foreign Used", price: "₦580,000" },
      { name: "iPhone 13 128GB", condition: "Foreign Used", price: "₦435,000" },
      { name: "iPhone 13 256GB", condition: "Foreign Used", price: "₦470,000" },
      { name: "iPhone 13 512GB", condition: "Foreign Used", price: "₦510,000" },
      { name: "iPhone 14 128GB", condition: "Foreign Used", price: "₦520,000" },
      { name: "iPhone 14 256GB", condition: "Foreign Used", price: "₦565,000" },
      { name: "iPhone 12 64GB", condition: "Active Stock (Boxed)", price: "₦370,000" },
      { name: "iPhone 12 128GB", condition: "Active Stock (Boxed)", price: "₦390,000" },
      { name: "iPhone 12 Pro 128GB", condition: "Active Stock (Boxed)", price: "₦470,000" },
      { name: "iPhone 12 Pro 256GB", condition: "Active Stock (Boxed)", price: "₦500,000" },
      { name: "iPhone 12 Pro 512GB", condition: "Active Stock (Boxed)", price: "₦570,000" },
      { name: "iPhone 12 Pro Max 128GB", condition: "Active Stock (Boxed)", price: "₦510,000" },
      { name: "iPhone 12 Pro Max 256GB", condition: "Active Stock (Boxed)", price: "₦560,000" },
      { name: "iPhone 12 Pro Max 512GB", condition: "Active Stock (Boxed)", price: "₦590,000" },
      { name: "iPhone 13 128GB", condition: "Active Stock (Boxed)", price: "₦490,000" },
      { name: "iPhone 13 256GB", condition: "Active Stock (Boxed)", price: "₦530,000" },
      { name: "iPhone 13 Pro 128GB", condition: "Active Stock (Boxed)", price: "₦610,000" },
      { name: "iPhone 13 Pro 256GB", condition: "Active Stock (Boxed)", price: "₦650,000" },
      { name: "iPhone 13 Pro 512GB", condition: "Active Stock (Boxed)", price: "₦690,000" },
      { name: "iPhone 14 128GB", condition: "Active Stock (Boxed)", price: "₦540,000" },
      { name: "iPhone 14 256GB", condition: "Active Stock (Boxed)", price: "₦600,000" },
      { name: "iPhone 14 Pro 128GB", condition: "LL/A Physical SIM", price: "₦660,000" },
      { name: "iPhone 14 Pro 256GB", condition: "LL/A Physical SIM", price: "₦700,000" },
      { name: "iPhone 14 Pro 512GB", condition: "LL/A Physical SIM", price: "₦760,000" },
      { name: "iPhone 14 Pro Max 128GB", condition: "LL/A Physical SIM", price: "₦740,000" },
      { name: "iPhone 14 Pro Max 256GB", condition: "LL/A Physical SIM", price: "₦790,000" },
      { name: "iPhone 14 Pro Max 512GB", condition: "LL/A Physical SIM", price: "₦840,000" },
      { name: "iPhone 14 Pro Max 1TB", condition: "LL/A Physical SIM", price: "₦890,000" },
      { name: "iPhone 15 128GB", condition: "LL/A Physical SIM", price: "₦730,000" },
      { name: "iPhone 15 256GB", condition: "LL/A Physical SIM", price: "₦800,000" },
      { name: "iPhone 15 Pro 128GB", condition: "LL/A Physical SIM", price: "₦870,000" },
      { name: "iPhone 15 Pro 256GB", condition: "LL/A Physical SIM", price: "₦920,000" },
      { name: "iPhone 15 Pro Max 256GB", condition: "LL/A Physical SIM", price: "₦990,000" },
      { name: "iPhone 15 Pro Max 512GB", condition: "LL/A Physical SIM", price: "₦1,090,000" },
      { name: "iPhone 15 Pro Max 1TB", condition: "LL/A Physical SIM", price: "₦1,390,000" },
      { name: "iPhone 16 128GB", condition: "LL/A Physical SIM", price: "₦940,000" },
      { name: "iPhone 16 256GB", condition: "LL/A Physical SIM", price: "₦1,040,000" },
      { name: "iPhone 16 Plus 128GB", condition: "LL/A Physical SIM", price: "₦1,090,000" },
      { name: "iPhone 16 Plus 256GB", condition: "LL/A Physical SIM", price: "₦1,290,000" },
      { name: "iPhone 16 Pro 128GB", condition: "LL/A Physical SIM", price: "₦1,300,000" },
      { name: "iPhone 16 Pro 256GB", condition: "LL/A Physical SIM", price: "₦1,400,000" },
      { name: "iPhone 16 Pro Max 256GB", condition: "LL/A Physical SIM", price: "₦1,490,000" },
      { name: "iPhone 16 Pro Max 512GB", condition: "LL/A Physical SIM", price: "₦1,590,000" },
      { name: "iPhone 16 Pro Max 1TB", condition: "LL/A Physical SIM", price: "₦1,890,000" }
    ]
  },
  {
    id: "iphones-new",
    title: "New iPhones",
    items: [
      { name: "iPhone 16 128GB", condition: "Brand New (Non-Active)", price: "₦1,090,000" },
      { name: "iPhone 16 256GB", condition: "Brand New (Non-Active)", price: "₦1,190,000" },
      { name: "iPhone 16 Plus 128GB", condition: "Brand New (Non-Active)", price: "₦1,190,000" },
      { name: "iPhone 16 Plus 256GB", condition: "Brand New (Non-Active)", price: "₦1,380,000" },
      { name: "iPhone 16 Pro 128GB", condition: "Brand New (Non-Active)", price: "₦1,540,000" },
      { name: "iPhone 16 Pro 256GB", condition: "Brand New (Non-Active)", price: "₦1,690,000" },
      { name: "iPhone 16 Pro Max 256GB", condition: "Brand New (Non-Active)", price: "₦1,770,000" },
      { name: "iPhone 16 Pro Max 512GB", condition: "Brand New (Non-Active)", price: "Out of Stock", soldOut: true },
      { name: "iPhone 16 Pro Max 1TB", condition: "Brand New (Non-Active)", price: "Out of Stock", soldOut: true },
      { name: "iPhone 17 256GB", condition: "Brand New (Non-Active)", price: "₦1,340,000" },
      { name: "iPhone Air 256GB", condition: "Brand New (Non-Active)", price: "₦1,340,000" },
      { name: "iPhone Air 512GB", condition: "Brand New (Non-Active)", price: "₦1,640,000" },
      { name: "iPhone 17 Pro 256GB", condition: "Brand New (Non-Active)", price: "₦1,940,000" },
      { name: "iPhone 17 Pro 512GB", condition: "Brand New (Non-Active)", price: "₦2,280,000" },
      { name: "iPhone 17 Pro Max 256GB", condition: "Brand New (Non-Active)", price: "₦2,130,000" },
      { name: "iPhone 17 Pro Max 512GB", condition: "Brand New (Non-Active)", price: "₦2,430,000" },
      { name: "iPhone 17 Pro Max 1TB", condition: "Brand New (Non-Active)", price: "₦2,890,000" },
      { name: "iPhone 17 Pro Max 2TB", condition: "Brand New (Non-Active)", price: "₦3,390,000" }
    ]
  },
  {
    id: "samsung-used",
    title: "Used Samsung",
    items: [
      { name: "Samsung S8", condition: "Boxed (Used)", price: "₦180,000" },
      { name: "Samsung S8+", condition: "Boxed (Used)", price: "₦210,000" },
      { name: "Samsung S9", condition: "Boxed (Used)", price: "₦190,000" },
      { name: "Samsung S9+", condition: "Boxed (Used)", price: "₦210,000" },
      { name: "Samsung S10e", condition: "Boxed (Used)", price: "₦215,000" },
      { name: "Samsung S10", condition: "Boxed (Used)", price: "₦260,000" },
      { name: "Samsung S10+", condition: "Boxed (Used)", price: "₦290,000" },
      { name: "Samsung S20 FE", condition: "Boxed (Used)", price: "₦260,000" },
      { name: "Samsung S20", condition: "Boxed (Used)", price: "₦275,000" },
      { name: "Samsung S20 Ultra", condition: "Boxed (Used)", price: "₦390,000" },
      { name: "Samsung S21 (256GB)", condition: "Boxed (Used)", price: "₦300,000" },
      { name: "Samsung S21 Ultra (128GB)", condition: "Boxed (Used)", price: "₦430,000" },
      { name: "Samsung S21 Ultra (256GB)", condition: "Boxed (Used)", price: "₦430,000" },
      { name: "Samsung S22 (128GB)", condition: "Boxed (Used)", price: "₦390,000" },
      { name: "Samsung S22 (256GB)", condition: "Boxed (Used)", price: "₦390,000" },
      { name: "Samsung S22 Ultra (128GB)", condition: "Boxed (Used)", price: "₦540,000" },
      { name: "Samsung S22 Ultra (256GB)", condition: "Boxed (Used)", price: "₦570,000" },
      { name: "Samsung S22 Ultra (512GB)", condition: "Boxed (Used)", price: "₦600,000" },
      { name: "Samsung S23 (128GB)", condition: "Boxed (Used)", price: "₦580,000" },
      { name: "Samsung S23 Ultra (256GB)", condition: "Boxed (Used)", price: "₦710,000" },
      { name: "Samsung S23 Ultra (512GB)", condition: "Boxed (Used)", price: "₦790,000" },
      { name: "Samsung Note 10", condition: "Boxed (Used)", price: "₦270,000" },
      { name: "Samsung Note 10+", condition: "Boxed (Used)", price: "₦340,000" },
      { name: "Samsung Note 20 (256GB)", condition: "Boxed (Used)", price: "₦320,000" },
      { name: "Samsung Note 20 Ultra", condition: "Boxed (Used)", price: "₦490,000" },
      { name: "Samsung Fold 3 (512GB)", condition: "Boxed (Used)", price: "₦660,000" },
      { name: "Samsung Fold 4 (256GB)", condition: "Boxed (Used)", price: "₦660,000" },
      { name: "Samsung Fold 4 (512GB)", condition: "Boxed (Used)", price: "₦700,000" },
      { name: "Samsung Fold 4 (1TB)", condition: "Boxed (Used)", price: "₦730,000" },
      { name: "Samsung Fold 5 (256GB)", condition: "Boxed (Used)", price: "₦770,000" },
      { name: "Samsung Fold 5 (512GB)", condition: "Boxed (Used)", price: "₦820,000" },
      { name: "Samsung Fold 6 (256GB)", condition: "Boxed (Used)", price: "₦1,140,000" }
    ]
  },
  {
    id: "samsung-new",
    title: "New Samsung",
    items: [
      { name: "Samsung A26 (128GB)", condition: "Brand New", price: "₦360,000" },
      { name: "Samsung A26 (256GB)", condition: "Brand New", price: "₦410,000" },
      { name: "Samsung A36 (128GB)", condition: "Brand New", price: "₦430,000" },
      { name: "Samsung A36 (256GB)", condition: "Brand New", price: "₦490,000" },
      { name: "Samsung A56 (256GB)", condition: "Brand New", price: "₦590,000" },
      { name: "Samsung S24 Ultra (256GB)", condition: "Brand New", price: "₦1,290,000" },
      { name: "Samsung S24 Ultra (512GB)", condition: "Brand New", price: "₦1,440,000" },
      { name: "Samsung S25 Ultra (256GB)", condition: "Brand New", price: "₦1,400,000" },
      { name: "Samsung S25 Ultra (512GB)", condition: "Brand New", price: "₦1,590,000" },
      { name: "Samsung S25 Ultra (1TB)", condition: "Brand New", price: "₦1,940,000" },
      { name: "Samsung S26 Ultra (256GB)", condition: "Brand New", price: "₦1,670,000" },
      { name: "Samsung S26 Ultra (512GB)", condition: "Brand New", price: "₦1,840,000" },
      { name: "Samsung Fold 6 (256GB)", condition: "Brand New", price: "₦1,810,000" },
      { name: "Samsung Fold 6 (512GB)", condition: "Brand New", price: "₦1,940,000" },
      { name: "Samsung Fold 7 (256GB)", condition: "Brand New", price: "₦2,030,000" },
      { name: "Samsung Fold 7 (512GB)", condition: "Brand New", price: "₦2,140,000" },
      { name: "Samsung Fold 7 (1TB)", condition: "Brand New", price: "₦2,790,000" },
      { name: "Samsung Flip 7 (256GB)", condition: "Brand New", price: "₦1,340,000" },
      { name: "Samsung Flip 7 (512GB)", condition: "Brand New", price: "₦1,440,000" }
    ]
  },
  {
    id: "tablets",
    title: "iPads & Tabs",
    items: [
      { name: "iPad 11th Gen (128GB)", condition: "Brand New", price: "₦560,000" },
      { name: "iPad 11th Gen (256GB)", condition: "Brand New", price: "₦720,000" },
      { name: "iPad Pro M5 11-inch (256GB)", condition: "Brand New", price: "₦1,490,000" },
      { name: "iPad Pro M5 13-inch (256GB)", condition: "Brand New", price: "₦1,590,000" },
      { name: "iPad Pro M5 13-inch (512GB)", condition: "Brand New", price: "₦1,940,000" },
      { name: "iPad Pro M4 13-inch (256GB)", condition: "Brand New", price: "₦1,490,000" },
      { name: "iPad Air 11-inch (128GB)", condition: "Brand New", price: "₦990,000" },
      { name: "iPad Air 13-inch (128GB)", condition: "Brand New", price: "₦1,190,000" },
      { name: "Galaxy Tab A11 (128GB)", condition: "Brand New", price: "₦270,000" },
      { name: "Galaxy Tab A11+ (128GB)", condition: "Brand New", price: "₦390,000" },
      { name: "Galaxy Tab A11+ (256GB)", condition: "Brand New", price: "₦510,000" },
      { name: "Galaxy Tab A9+ (64GB)", condition: "Brand New", price: "₦320,000" },
      { name: "Galaxy Tab S10 FE (128GB)", condition: "Brand New", price: "₦670,000" },
      { name: "Galaxy Tab S10 FE 5G (128GB)", condition: "Brand New", price: "₦860,000" },
      { name: "Galaxy Tab S10 Ultra 5G (256GB)", condition: "Brand New", price: "₦1,540,000" },
      { name: "Galaxy Tab S11 (128GB)", condition: "Brand New", price: "₦1,490,000" },
      { name: "Galaxy Tab S11 Ultra (256GB)", condition: "Brand New", price: "₦1,740,000" },
      { name: "Galaxy Tab S11 Ultra 5G (256GB)", condition: "Brand New", price: "₦1,990,000" }
    ]
  },
  {
    id: "watches",
    title: "Apple Watches",
    items: [
      { name: "Apple Watch Series 4", condition: "UK Used", price: "₦200,000" },
      { name: "Apple Watch Series 5", condition: "UK Used", price: "₦230,000" },
      { name: "Apple Watch Series 6", condition: "UK Used", price: "₦240,000" },
      { name: "Apple Watch Series 7", condition: "UK Used", price: "₦290,000" },
      { name: "Apple Watch Series 8", condition: "UK Used", price: "₦340,000" },
      { name: "Apple Watch Series 9", condition: "UK Used", price: "₦390,000" },
      { name: "Apple Watch Series 10", condition: "UK Used", price: "₦430,000" },
      { name: "Apple Watch Ultra 1", condition: "UK Used", price: "₦570,000" },
      { name: "Apple Watch Series 11", condition: "Brand New", price: "₦660,000" },
      { name: "Apple Watch Ultra 2", condition: "Brand New", price: "₦990,000" },
      { name: "Apple Watch Ultra 3", condition: "Brand New", price: "₦1,120,000" }
    ]
  },
  {
    id: "audio",
    title: "Speakers & Buds",
    items: [
      { name: "JBL Go 3", condition: "Brand New Speaker", price: "₦105,000" },
      { name: "JBL Go 4", condition: "Brand New Speaker", price: "₦120,000" },
      { name: "JBL Clip 4", condition: "Brand New Speaker", price: "₦130,000" },
      { name: "JBL Clip 5", condition: "Brand New Speaker", price: "₦135,000" },
      { name: "JBL Grip", condition: "Brand New Speaker", price: "₦190,000" },
      { name: "JBL Flip 6", condition: "Brand New Speaker", price: "₦170,000" },
      { name: "JBL Flip 7", condition: "Brand New Speaker", price: "₦205,000" },
      { name: "JBL Charge 5", condition: "Brand New Speaker", price: "₦225,000" },
      { name: "JBL Charge 6", condition: "Brand New Speaker", price: "₦250,000" },
      { name: "Harman Kardon Studio 9", condition: "Brand New Speaker", price: "₦330,000" },
      { name: "JBL Xtreme 4", condition: "Brand New Speaker", price: "₦420,000" },
      { name: "JBL Boombox 3", condition: "Brand New Speaker", price: "₦630,000" },
      { name: "JBL Boombox 4", condition: "Brand New Speaker", price: "₦730,000" },
      { name: "JBL PartyBox 310", condition: "Brand New Speaker", price: "₦790,000" },
      { name: "JBL PartyBox 320", condition: "Brand New Speaker", price: "₦830,000" },
      { name: "AirPods Max Gen 2", condition: "Brand New Audio", price: "₦760,000" },
      { name: "AirPods Pro 3", condition: "Brand New Audio", price: "₦430,000" },
      { name: "AirPods Pro 2", condition: "Brand New Audio", price: "₦310,000" },
      { name: "AirPods 4 (ANC)", condition: "Brand New Audio", price: "₦310,000" },
      { name: "AirPods 4", condition: "Brand New Audio", price: "₦230,000" },
      { name: "Samsung Buds 3 Pro", condition: "Brand New Audio", price: "₦250,000" },
      { name: "Samsung Buds 4 Pro", condition: "Brand New Audio", price: "₦340,000" }
    ]
  },
  {
    id: "starlink",
    title: "Starlink",
    items: [
      { name: "Starlink Mini", condition: "Brand New", price: "₦480,000" },
      { name: "Starlink Standard", condition: "Brand New", price: "₦580,000" }
    ]
  },
  {
    id: "laptops",
    title: "Laptops & MacBooks",
    banner: "💻 Foreign Used Laptops come with a FREE Charger 🔌 & FREE Bag (if available).<br>🎮 Brand New Gaming Laptops Available (HP Omen, Dell Alienware, HP Victus, MSI) — Just Ask!",
    items: [
      { name: "HP Stream", specs: "4GB RAM • 64GB ROM", condition: "Foreign Used", price: "₦175,000" },
      { name: "HP EliteBook 840 G3 (Core i5)", specs: "8GB RAM • 256GB ROM • Core i5", condition: "Foreign Used", price: "₦320,000" },
      { name: "HP EliteBook 840 G3 (Core i7)", specs: "8GB RAM • 256GB ROM • Core i7", condition: "Foreign Used", price: "₦335,000" },
      { name: "HP EliteBook 830 G6", specs: "8GB RAM • 256GB ROM • Core i5 8th Gen (1.9GHz)", condition: "Foreign Used", price: "₦420,000" },
      { name: "HP EliteBook 830 G8 (AMD Ryzen)", specs: "16GB RAM • 512GB ROM • AMD Ryzen 11th Gen (1.9GHz)", condition: "Foreign Used", price: "₦620,000" },
      { name: "HP EliteBook 830 G8 (Core i7)", specs: "16GB RAM • 512GB ROM • Core i7 11th Gen (3.0GHz)", condition: "Foreign Used", price: "₦640,000" },
      { name: "2020 MacBook Air M1", specs: "8GB RAM • 256GB SSD", condition: "Brand New", price: "₦1,130,000" },
      { name: "2022 MacBook Air M2", specs: "16GB RAM • 256GB SSD", condition: "Brand New", price: "₦1,390,000" },
      { name: "2025 MacBook Air M4", specs: "16GB RAM • 256GB SSD", condition: "Brand New", price: "₦1,440,000" },
      { name: "2025 MacBook Air M4 (15-inch)", specs: "16GB RAM • 256GB SSD", condition: "Brand New", price: "₦1,890,000" },
      { name: "MacBook Pro M4 Chip", specs: "16GB RAM • 512GB SSD", condition: "Brand New", price: "₦2,390,000" },
      { name: "MacBook Pro M5 Chip", specs: "16GB RAM • 512GB SSD", condition: "Brand New", price: "₦2,540,000" },
      { name: "Gaming Laptops (HP Omen / Alienware / Victus / MSI)", specs: "Message for current specs & pricing", condition: "Brand New", price: "Ask for Price" }
    ]
  }
];

// 3. RENDER NAVIGATION & PRODUCT CARDS
// Automatic Image Matcher (Matches keywords to your images/ folder)
function getDeviceImage(name) {
  const n = name.toLowerCase();
  if (n.includes("pixel 10")) return "images/pixel10.jpg";
  if (n.includes("pixel 9")) return "images/pixel9.jpg";
  if (n.includes("pixel 8")) return "images/pixel8.jpg";
  if (n.includes("pixel 7")) return "images/pixel7.jpg";
  if (n.includes("pixel 6")) return "images/pixel6.jpg";

  if (n.includes("iphone xr")) return "images/iphonexr.jpg";
  if (n.includes("iphone 11")) return "images/iphone11.jpg";
  if (n.includes("iphone 12")) return "images/iphone12.jpg";
  if (n.includes("iphone 13")) return "images/iphone13.jpg";
  if (n.includes("iphone 14")) return "images/iphone14.jpg";
  if (n.includes("iphone 15")) return "images/iphone15.jpg";
  if (n.includes("iphone 16")) return "images/iphone16.jpg";
  if (n.includes("iphone 17") || n.includes("iphone air")) return "images/iphone17.jpg";

  if (n.includes("s26")) return "images/s26.jpg";
  if (n.includes("s25")) return "images/s25.jpg";
  if (n.includes("s24")) return "images/s24.jpg";
  if (n.includes("s23")) return "images/s23.jpg";
  if (n.includes("s22")) return "images/s22.jpg";
  if (n.includes("s21")) return "images/s21.jpg";
  if (n.includes("s20")) return "images/s20.jpg";
  if (n.includes("s10")) return "images/s10.jpg";
  if (n.includes("s9")) return "images/s9.jpg";
  if (n.includes("s8")) return "images/s8.jpg";
  if (n.includes("note 20")) return "images/note20.jpg";
  if (n.includes("note 10")) return "images/note10.jpg";
  if (n.includes("fold")) return "images/fold.jpg";
  if (n.includes("flip")) return "images/flip.jpg";
  if (n.includes("samsung a")) return "images/galaxya.jpg";

  if (n.includes("ipad")) return "images/ipad.jpg";
  if (n.includes("galaxy tab")) return "images/galaxytab.jpg";
  if (n.includes("watch")) return "images/applewatch.jpg";
  if (n.includes("airpods")) return "images/airpods.jpg";
  if (n.includes("buds")) return "images/buds.jpg";
  if (n.includes("jbl") || n.includes("harman")) return "images/jbl.jpg";
  if (n.includes("starlink")) return "images/starlink.jpg";
  if (n.includes("macbook")) return "images/macbook.jpg";
  if (n.includes("hp ")) return "images/hp.jpg";
  if (n.includes("gaming")) return "images/gaming.jpg";
  return "";
}

// 3. RENDER NAVIGATION & PRODUCT CARDS
const navEl = document.getElementById("categoryNav");
const catalogEl = document.getElementById("catalog");

INVENTORY.forEach(category => {
  navEl.innerHTML += `<a href="#${category.id}">${category.title}</a>`;

  const cardsHTML = category.items.map(item => {
    const message = encodeURIComponent(
      `Hello The Gadget Vault! I'm interested in:\n*Item:* ${item.name}\n*Condition:* ${item.condition}\n*Price:* ${item.price}\nIs it still available?`
    );

    const imgPath = item.image || getDeviceImage(item.name);
    const bgStyle = imgPath
      ? `style="background-image: linear-gradient(rgba(10, 35, 66, 0.72), rgba(10, 35, 66, 0.85)), url('${imgPath}');"`
      : "";

    return `
      <div class="card" ${bgStyle} data-search="${(item.name + ' ' + item.condition + ' ' + (item.specs || '')).toLowerCase()}">
        <div>
          <span class="badge">${item.condition}</span>
          <h3>${item.name}</h3>
          ${item.specs ? `<p class="specs">${item.specs}</p>` : ''}
        </div>
        <div>
          <p class="price ${item.soldOut ? 'sold-out' : ''}">${item.price}</p>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${message}"
 
             target="_blank" 
             class="wa-btn ${item.soldOut ? 'disabled' : ''}">
             ${item.soldOut ? 'Unavailable' : 'Contact Seller on WhatsApp'}
          </a>
        </div>
      </div>
    `;
  }).join("");

  catalogEl.innerHTML += `
    <section id="${category.id}" class="category-section">
      <h2 class="category-title">${category.title}</h2>
      ${category.banner ? `<div class="note-banner">${category.banner}</div>` : ''}
      <div class="grid">${cardsHTML}</div>
    </section>
  `;
});


// 4. LIVE SEARCH FUNCTION
function filterProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".category-section").forEach(section => {
    let visibleCount = 0;
    section.querySelectorAll(".card").forEach(card => {
      if (card.dataset.search.includes(query)) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });
    section.style.display = visibleCount > 0 ? "block" : "none";
  });
}
const swapBtn = document.getElementById("swapBtn");
if (swapBtn) swapBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello The Gadget Vault, I want to sell or swap my device.")}`;
