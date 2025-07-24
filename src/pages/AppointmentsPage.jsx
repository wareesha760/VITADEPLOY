import React from 'react';

export default function AppointmentsPage({ appointments }) {
  return (
    <div className="p-30 text-center  min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-black-700">آپ کی اپوائنٹمنٹس</h1>
      {appointments.length === 0 ? (
        <p>ابھی تک کوئی اپوائنٹمنٹ نہیں کی گئی۔</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appt, i) => (
            <li key={i} className="p-4 bg-white rounded shadow text-right">
              <p><strong>ماہر:</strong> {appt.expert}</p>
              <p><strong>نام:</strong> {appt.name}</p>
              <p><strong>تاریخ و وقت:</strong> {new Date(appt.datetime).toLocaleString('ur-PK')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}