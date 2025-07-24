import TractorCard from "./Tractorcard";


export default function TractorList() {
  const tractors = [
    {
      title: "65-75 HP ٹریکٹر",
      catClass: "050-0006",
      specs: [
        "طاقتور زمین ہموار کرنے کی صلاحیت",
        "4WD آپریشنل",
        "3 پوائنٹ ہچ فار اٹیچمنٹس"
      ]
    },
    {
      title: "35-39 HP ٹریکٹر",
      catClass: "050-0003",
      specs: [
        "طاقتور زمین ہموار کرنے کی صلاحیت",
        "3 پوائنٹ ہچ فار اٹیچمنٹس",
        "4WD آپریشنل"
      ]
    },
    {
      title: "40-49 HP ٹریکٹر",
      catClass: "050-0004",
      specs: [
        "طاقتور زمین ہموار کرنے کی صلاحیت",
        "4WD آپریشنل",
        "3 پوائنٹ ہچ فار اٹیچمنٹس"
      ]
    }
  ];

   return (
    <div className="max-w-4xl mx-auto space-y-6 py-6 px-4">
      {tractors.map((tractor, i) => (
        <TractorCard key={i} {...tractor} />
      ))}

      {/* ✅ This is your "آرڈر دیکھیں" button at the end */}
      <div className="text-center pt-4">
        <button
          onClick={() => window.location.href = "/orders"}
          className="bg-white text-green-700 border border-green-600 px-6 py-2 text-sm rounded shadow hover:bg-green-50"
        >
          آرڈر دیکھیں
        </button>
      </div>
    </div>
  );
}