import { useEffect, useState } from "react";

const Pipeline = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-6 justify-center mb-6">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
          ${
            i < step
              ? "bg-green-500 border-green-500 text-white"
              : "border-slate-400 text-slate-400"
          }`}
        >
          {i < step ? "✓" : ""}
        </div>
      ))}
    </div>
  );
};

export default Pipeline;