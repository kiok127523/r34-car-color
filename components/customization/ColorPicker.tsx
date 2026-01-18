"use client";

import { useCarStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { PRESET_COLORS } from "@/lib/carConfig";

export default function ColorPicker() {
  const color = useCarStore((state) => state.color);
  const setColor = useCarStore((state) => state.setColor);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-slate-300 mb-3 block">
          Preset Colors
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
          {PRESET_COLORS.map((preset) => (
            <button
              key={preset.hex}
              onClick={() => setColor(preset.hex)}
              className={`h-14 sm:h-16 rounded-lg border-2 transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                color === preset.hex
                  ? "border-blue-500 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950 shadow-lg shadow-blue-500/50"
                  : "border-slate-700 hover:border-slate-600"
              }`}
              style={{ backgroundColor: preset.hex }}
              title={preset.name}
            >
              <span className="sr-only">{preset.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-300 mb-3 block">
          Custom Color
        </label>
        <div className="flex gap-3">
          <div className="relative">
            <Input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-14 w-14 sm:h-16 sm:w-16 cursor-pointer p-1 rounded-lg"
            />
          </div>
          <Input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#2e5f8f"
            className="flex-1 h-14 sm:h-16 text-base sm:text-lg font-mono"
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Enter any hex color code or click the color picker
        </p>
      </div>
    </div>
  );
}
