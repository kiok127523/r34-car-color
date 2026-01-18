"use client";

interface PartOption {
  id: string;
  name: string;
  description: string;
}

interface PartSelectorProps {
  title: string;
  options: PartOption[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function PartSelector({
  title,
  options,
  selected,
  onSelect,
}: PartSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-slate-300">{title}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`w-full text-left p-3 rounded-lg border transition-all duration-200 transform hover:scale-[1.02] ${
              selected === option.id
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-750"
            }`}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <div className="font-medium">{option.name}</div>
            <div
              className={`text-xs mt-1 ${
                selected === option.id ? "text-blue-100" : "text-slate-500"
              }`}
            >
              {option.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
