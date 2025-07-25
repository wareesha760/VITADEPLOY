import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TractorCard({ title, catClass, specs }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [type, setType] = useState("Self Pickup");

  const handleOrder = () => {
    const newOrder = {
      title,
      catClass,
      location,
      start,
      end,
      type,
      id: Date.now(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([newOrder, ...existingOrders]));

    toast.success("ایک آرڈر موصول ہو گیا ہے");

    setIsModalOpen(false);
    setLocation("");
    setStart("");
    setEnd("");
    setType("Self Pickup");
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-6">
        <img src="/tractor.png" alt={title} className="w-40 h-28 object-contain mx-auto md:mx-0" />
        <div className="flex-1 space-y-2">
          <p className="text-sm text-gray-500">CAT CLASS: {catClass}</p>
          <h3 className="text-xl font-bold text-green-700">{title}</h3>
          <ul className="list-disc ml-5 text-sm text-gray-600">
            {specs.map((spec, i) => <li key={i}>{spec}</li>)}
          </ul>
          <button onClick={() => setIsModalOpen(true)} className="text-green-600 mt-2 text-sm underline">
            کرایہ اور دستیابی دیکھیں
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg space-y-4 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg">
              ✖
            </button>
            <h2 className="text-lg font-bold text-green-700">{title} - کرایہ کی تفصیل</h2>

            <div>
              <label className="block text-sm font-medium mb-1">کرایہ کی جگہ</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border px-3 py-2 rounded text-sm" />
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">شروع ہونے کی تاریخ</label>
                <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="w-full border px-3 py-2 rounded text-sm" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">ختم ہونے کی تاریخ</label>
                <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="w-full border px-3 py-2 rounded text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">فراہم کرنے کا طریقہ</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className="w-full border px-3 py-2 rounded text-sm">
                <option>Self Pickup</option>
                <option>Home Delivery</option>
              </select>
            </div>

            <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm p-4 rounded">
              آپ کے علاقے میں کوئی Sunbelt اسٹور دستیاب نہیں۔ <br />
              براہ کرم ہمیں <strong>866-296-4214</strong> پر کال کریں۔
            </div>

            <div className="text-right">
              <button onClick={handleOrder} className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700">
                آرڈر کریں
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
