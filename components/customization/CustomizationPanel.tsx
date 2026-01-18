"use client";

import { useEffect, useState } from "react";
import { useCarStore } from "@/lib/store";
import { ScrollArea } from "@/components/ui/scroll-area";
import ColorPicker from "./ColorPicker";
import { Palette } from "lucide-react";

export default function CustomizationPanel() {
  const [mounted, setMounted] = useState(false);
  
  const {
    color,
    loadFromLocalStorage,
    _hasHydrated,
  } = useCarStore();

  // Load saved customization on mount (client-side only)
  useEffect(() => {
    setMounted(true);
    if (!_hasHydrated) {
      loadFromLocalStorage();
    }
  }, [loadFromLocalStorage, _hasHydrated]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="w-full lg:w-80 bg-slate-950 border-l border-slate-800 flex flex-col h-full">
        <div className="p-4 border-b border-slate-800">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Palette size={20} className="text-blue-500" />
            Paint Color
          </h2>
          <p className="text-sm text-slate-400 mt-1">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full lg:h-screen bg-slate-950 lg:border-l border-slate-800 flex flex-col">
      <div className="p-4 sm:p-6 border-b border-slate-800">
        <h2 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
          <Palette size={24} className="text-blue-500" />
          Paint Color
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Customize your GTR R34 color
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 sm:p-6 pb-8">
          <ColorPicker />
          
          {/* Info Card */}
          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
            <h3 className="text-sm font-medium text-slate-300 mb-2">
              Current Color
            </h3>
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg border-2 border-slate-700 shadow-lg"
                style={{ backgroundColor: color }}
              />
              <div>
                <p className="text-xs text-slate-400">Hex Code</p>
                <p className="text-sm font-mono text-slate-200">
                  {color.toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-4 p-3 bg-blue-950/20 border border-blue-900/30 rounded-lg">
            <p className="text-xs text-blue-300">
              💡 <strong>Tip:</strong> Select from preset colors or use the custom picker for any color you want!
            </p>
          </div>
        </div>
      </ScrollArea>

      {/* Footer Info - Desktop only */}
      <div className="hidden lg:block p-4 border-t border-slate-800 bg-slate-900/50">
        <p className="text-[10px] text-slate-500 text-center">
          🚗 Nissan Skyline GTR R34 Customizer
        </p>
      </div>
    </div>
  );
}
