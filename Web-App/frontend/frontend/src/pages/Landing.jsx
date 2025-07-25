import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const categories = [
  { name: "بیج", icon: "🌾" },
  { name: "کھاد", icon: "🧪" },
  { name: "کیڑے مار", icon: "🪲" },
  { name: "زرعی آلات", icon: "🚜" },
  { name: "ادویات", icon: "💊" },
  { name: "مشورہ", icon: "📞" },
];

const fertilizers = [
  { name: "Rice Seed Khush Haal", price: "Rs. 1155" },
  { name: "Rice Seed Fuzzy", price: "Rs. 1130" },
  { name: "Super Urea", price: "Rs. 1020" },
];

const pesticides = [
  { name: "Example1 500WP", price: "Rs. 300" },
  { name: "Fosic 85DG", price: "Rs. 290" },
  { name: "Brown 45SC", price: "Rs. 275" },
];

export default function Home() {
  return (
    <div>
      <Navbar />

      <div style={{ maxWidth: "420px", margin: "0 auto", padding: "1rem", fontFamily: "Noto Nastaliq Urdu, sans-serif" }}>
        <h2 className="text-xl font-bold text-green-700 text-right mb-2">کسان ایپ میں خوش آمدید</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="کچھ تلاش کریں..."
          className="w-full p-2 border border-gray-300 rounded mb-4 text-right"
        />

        {/* Category Icons */}
        <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center justify-center bg-green-100 p-2 rounded">
              <div className="text-2xl">{cat.icon}</div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Discount Banner */}
        <div className="bg-green-200 text-right p-3 rounded mb-4">
          <h3 className="text-md font-bold">رعایت 25%</h3>
          <p>تمام اشیاء پر</p>
        </div>

        {/* Fertilizers Section */}
        <h3 className="text-right font-bold mb-2">کھاد</h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {fertilizers.map((item, i) => (
            <div key={i} className="border p-2 rounded text-right">
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Discount Banner */}
        <div className="bg-green-200 text-right p-3 rounded mb-4">
          <h3 className="text-md font-bold">رعایت 25%</h3>
          <p>کیڑے مار ادویات پر</p>
        </div>

        {/* Pesticides Section */}
        <h3 className="text-right font-bold mb-2">ادویات</h3>
        <div className="grid grid-cols-2 gap-2 mb-20">
          {pesticides.map((item, i) => (
            <div key={i} className="border p-2 rounded text-right">
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
