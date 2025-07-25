import { useState } from 'react';

export default function FertilizerCalculator() {
  const [cropType, setCropType] = useState('');
  const [acreArea, setAcreArea] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [soilType, setSoilType] = useState('');
  const [fertilizerType, setFertilizerType] = useState('');
  const [previousUse, setPreviousUse] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setCropType('');
    setAcreArea('');
    setGrowthStage('');
    setSoilType('');
    setFertilizerType('');
    setPreviousUse('');
    setShowResult(false);
  };

  return (
    <div className="min-h-screen  p-30 flex flex-col items-center">
      <div className="w-full max-w-md bg-white rounded shadow p-6 space-y-4">
        <h2 className="text-center text-xl font-bold text-green-800">کھاد کیلکولیٹر</h2>

        <input
          className="w-full border border-green-700 rounded p-2 text-right"
          placeholder="فصل کی قسم"
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
        />

        <input
          className="w-full border border-green-700 rounded p-2 text-right"
          placeholder="رقبہ (ایکڑ میں)"
          type="number"
          value={acreArea}
          onChange={(e) => setAcreArea(e.target.value)}
        />

        <input
          className="w-full border border-green-700 rounded p-2 text-right"
          placeholder="نشوونما کا مرحلہ"
          value={growthStage}
          onChange={(e) => setGrowthStage(e.target.value)}
        />

        <input
          className="w-full border border-green-700 rounded p-2 text-right"
          placeholder="مٹی کی قسم"
          value={soilType}
          onChange={(e) => setSoilType(e.target.value)}
        />

        <input
          className="w-full border border-green-700 rounded p-2 text-right"
          placeholder="کھاد کی قسم"
          value={fertilizerType}
          onChange={(e) => setFertilizerType(e.target.value)}
        />

        <input
          className="w-full border border-green-700 rounded p-2 text-right"
          placeholder="پچھلی کھاد کا استعمال"
          value={previousUse}
          onChange={(e) => setPreviousUse(e.target.value)}
        />

        <button
          className="bg-green-700 text-white w-full py-2 rounded font-bold"
          onClick={handleCalculate}
        >
          ✅ حساب کریں
        </button>
      </div>

      {showResult && (
        <div className="mt-10 w-full max-w-md bg-white rounded shadow p-6 space-y-2 text-right">
          <h3 className="text-green-800 font-bold text-lg">نتیجہ:</h3>
          <p>• یوریا: 3 کلوگرام فی ایکڑ</p>
          <p>• ڈی اے پی: 2.5 کلوگرام فی ایکڑ</p>
          <p>• پوٹاش: 1.7 کلوگرام فی ایکڑ</p>
          <button
            onClick={handleReset}
            className="mt-4 bg-green-700 text-white w-full py-2 rounded font-bold"
          >
            ری سیٹ کریں
          </button>
        </div>
      )}
    </div>
  );
}
