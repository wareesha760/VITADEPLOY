// src/pages/TractorsPage.jsx
import TractorList from '../components/TractorList';

export default function TractorsPage() {
  return (
    <div className="pt-40 pb-10 px-4">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        ٹریکٹر کرایہ پر دستیاب ہیں
      </h1>
      <TractorList />
    </div>
  );
}
