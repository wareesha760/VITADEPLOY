import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    name: "پریمیم باغبانی ٹول سیٹ",
    image: "/Public/Tools.jpeg",
    price: "روپے ۲۸۰۰",
    originalPrice: "روپے ۳۰۰۰",
    isSale: true,
  },
  {
    name: "گارڈن جوٹ ٹوائن",
    image: "/Public/Twine.jpeg",
    price: "روپے ۱۰۰۰",
    originalPrice: "روپے ۱۱۰۰",
    isSale: true,
  },
  {
    name: "وال ماؤنٹڈ گرو بیگز",
    image: "/Public/WallBags.jpeg",
    price: "روپے ۲۰۰۰",
    isSale: false,
  },
  {
    name: "ورمی کمپوسٹ کھاد - ۳ کلو",
    image: "/Public/Fertilizer3kg.jpeg",
    price: "روپے ۳۰۰",
    isSale: false,
  },
  {
    name: "ورمی کمپوسٹ کھاد - ۵ کلو",
    image: "/Public/Fertilizer.jpeg",
    price: "روپے ۵۰۰",
    isSale: false,
  },
  {
    name: "منی واٹرنگ کین",
    image: "/Public/WaterCan.jpeg",
    price: "روپے ۴۵۰",
    isSale: false,
  },
  {
    name: "ہینڈ ویڈر ٹول",
    image: "/Public/Weeder.jpeg",
    price: "روپے ۷۰۰",
    originalPrice: "روپے ۹۰۰",
    isSale: true,
  },
  {
    name: "سیڈنگ ٹرے - ۱۲ سیلز",
    image: "/Public/SeedingTray.jpeg",
    price: "روپے ۳۵۰",
    isSale: false,
  },
  {
    name: "پودوں کی حفاظت کے کورز",
    image: "/Public/PlantCover.jpeg",
    price: "روپے ۵۰۰",
    isSale: false,
  },
  {
    name: "قدرتی کیڑوں سے بچاؤ اسپرے",
    image: "/Public/PestSpray.jpeg",
    price: "روپے ۷۵۰",
    originalPrice: "روپے ۹۰۰",
    isSale: true,
  },
  {
    name: "سبزیوں کے بیج پیک",
    image: "/Public/SeedPack.jpeg",
    price: "روپے ۳۰۰",
    isSale: false,
  },
  {
    name: "نمی ماپنے کا آلہ",
    image: "/Public/MoistureMeter.jpeg",
    price: "روپے ۱۲۰۰",
    originalPrice: "روپے ۱۵۰۰",
    isSale: true,
  },
];

export default function Shop() {
  return (
    <div
      style={{
        background: "#e9f5ec",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Noto Nastaliq Urdu, 'Segoe UI', sans-serif",
        direction: "rtl",
      }}
    >
      {/* Header with centered heading and left cart icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginBottom: "30px",
        }}
      >
        {/* Cart icon on far left (ltr direction needed for position) */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            direction: "ltr",
          }}
        >
          <ShoppingCart size={36} color="#1f3b1f" />
        </div>

        <h2
          style={{
            fontSize: "2.5rem",
            color: "#1f3b1f",
            textAlign: "center",
            margin: 0,
          }}
        >
          🛒 زرعی مصنوعات کی دکان
        </h2>
      </div>

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              overflow: "hidden",
              position: "relative",
              transition: "transform 0.3s ease",
            }}
          >
            {product.isSale && (
              <span
                style={{
                  position: "absolute",
                  background: "#28a745",
                  color: "#fff",
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  borderRadius: "0 0 8px 0",
                }}
              >
                رعایت
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "16px" }}>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                  color: "#333",
                }}
              >
                {product.name}
              </h3>
              <div>
                {product.originalPrice && (
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#aaa",
                      marginLeft: "10px",
                    }}
                  >
                    {product.originalPrice}
                  </span>
                )}
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#28a745",
                  }}
                >
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: "100px" }}></div> {/* Bottom spacing */}
    </div>
  );
}
