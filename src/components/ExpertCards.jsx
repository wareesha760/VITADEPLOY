import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const experts = [
  {
    id: 1,
    name: 'ڈاکٹر احمد علی',
    role: 'فصلات کے ماہر',
    experience: 15,
    clients: '850+',
    rating: 4.9,
    services: [
      'این ایس بی، ایگری ٹیکن، پیجمان یونیورسٹی',
      'کلب ویژن، مکران کے ماہر',
      'فصلات ٹیک پیکیج',
      'لاون پلاننگ & مارکیٹنگ',
    ],
    available: 'دستیابی: صبح ۹ سے شام ۶',
  },
  {
    id: 2,
    name: 'ڈاکٹر فاطمہ خان',
    role: 'مویشی پالنے کی ماہر',
    experience: 12,
    clients: '650+',
    rating: 4.8,
    services: [
      'ڈی وی ایم، ایپ لائیڈ جنرل ویٹ',
      'گائے، بھینس، بکری کے ماہر',
      'لاون پالیسی',
    ],
    available: 'دستیابی: صبح ۸ سے شام ۷',
  },
];

export default function ExpertCards({ onBookAppointment, appointments }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [form, setForm] = useState({ name: '', datetime: '' });
  const navigate = useNavigate();

  const handleAppointment = (expert) => {
    setSelectedExpert(expert);
    setShowModal(true);
  };

  const submitAppointment = () => {
    if (!form.name || !form.datetime) {
      alert('براہ کرم تمام فیلڈز پر کریں');
      return;
    }
    onBookAppointment({
      expert: selectedExpert.name,
      name: form.name,
      datetime: form.datetime,
    });
    setShowModal(false);
    setForm({ name: '', datetime: '' });
    alert('اپوائنٹمنٹ بک ہو گئی ہے');
  };

  return (
    <div className="text-white min-h-screen p-30">
      <h1 className="text-center text-black text-3xl font-bold mb-4">ماہرین زراعت سے مشورہ</h1>

      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        {experts.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white text-right rounded-lg shadow-md w-full lg:w-[500px] p-5"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-5xl">{exp.icon}</div>
              <div>
                <h2 className="text-xl font-bold text-green-700">{exp.name}</h2>
                <p className="text-gray-600">{exp.role}</p>
              </div>
            </div>

            <div className="flex justify-between bg-gray-100 p-3 rounded-md mb-4">
              <div className="text-center">
                <p className="font-bold text-green-600">{exp.experience}</p>
                <p className="text-sm text-gray-600">سال تجربہ</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-green-600">{exp.clients}</p>
                <p className="text-sm text-gray-600">کلائنٹس مشاورت</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-yellow-500">⭐ {exp.rating}</p>
                <p className="text-sm text-gray-600">رینکنگ</p>
              </div>
            </div>

            {/* Services without bullets */}
            <div className="pr-5 space-y-1 text-gray-800 text-sm mb-4">
              {exp.services.map((s, i) => (
                <div key={i}>{s}</div>
              ))}
            </div>

            <p className="text-sm text-green-800 font-medium mb-4">{exp.available}</p>

            <div className="flex justify-between gap-2">
              <button className="flex-1 border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50">
                🔥 ریویو
              </button>
              <button
                onClick={() => handleAppointment(exp)}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                🤝 مشورہ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Appointments Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => {
            if (appointments.length === 0) {
              alert('کوئی اپوائنٹمنٹ نہیں ہے ابھی تک');
            } else {
              navigate('/appointments');
            }
          }}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md shadow-md"
        >
          اپوائنٹمنٹ دیکھیں
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-right p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold text-green-700 mb-4">اپوائنٹمنٹ بک کریں</h2>

            <label className="block mb-2 text-black">نام</label>
            <input
              className="w-full border p-2 mb-4 text-black rounded text-right"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="آپ کا نام"
            />

            <label className="block mb-2 text-black">تاریخ اور وقت</label>
            <input
              className="w-full border p-2 mb-4 text-black rounded text-right"
              type="datetime-local"
              value={form.datetime}
              onChange={(e) => setForm({ ...form, datetime: e.target.value })}
            />

            <div className="flex gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded"
              >
                منسوخ کریں
              </button>
              <button
                onClick={submitAppointment}
                className="flex-1 bg-green-600 text-white py-2 rounded"
              >
                اپوائنٹمنٹ کریں
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}