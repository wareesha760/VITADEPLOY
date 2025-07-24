import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  const deleteOrder = (id) => {
    const updated = orders.filter((order) => order.id !== id);
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">موصول شدہ آرڈرز</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">کوئی آرڈر موجود نہیں۔</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="bg-white p-4 mb-4 rounded shadow">
            <h3 className="text-green-700 font-semibold">{order.title}</h3>
            <p className="text-sm text-gray-600">جگہ: {order.location}</p>
            <p className="text-sm text-gray-600">مدت: {order.start} - {order.end}</p>
            <p className="text-sm text-gray-600">طریقہ: {order.type}</p>
            <button
              onClick={() => deleteOrder(order.id)}
              className="mt-2 text-red-600 text-sm underline"
            >
              آرڈر حذف کریں
            </button>
          </div>
        ))
      )}
    </div>
  );
}
