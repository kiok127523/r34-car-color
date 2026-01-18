"use client";

import { useCarStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RotateCcw, Save } from "lucide-react";

export default function Header() {
  const resetToDefault = useCarStore((state) => state.resetToDefault);
  const saveToLocalStorage = useCarStore((state) => state.saveToLocalStorage);

  const handleSave = () => {
    saveToLocalStorage();
    // Optional: Show a toast notification
    alert("Build saved successfully!");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset to default configuration?")) {
      resetToDefault();
    }
  };

  return (
    <header className="bg-slate-950 border-b border-slate-800 px-3 sm:px-4 md:px-6 py-3 md:py-4">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h1 className="text-base sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 truncate">GTR R34</span>
            <span className="text-slate-400 hidden xs:inline">Customizer</span>
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm text-slate-400 mt-0.5 sm:mt-1 hidden sm:block">
            Design your dream Nissan Skyline
          </p>
        </div>
        <TooltipProvider>
          <div className="flex gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  size="sm"
                  className="gap-1 sm:gap-2 h-8 sm:h-9 px-2 sm:px-3"
                >
                  <RotateCcw size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline text-xs sm:text-sm">Reset</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reset to original GTR R34</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={handleSave} 
                  size="sm" 
                  className="gap-1 sm:gap-2 h-8 sm:h-9 px-2 sm:px-3"
                >
                  <Save size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline text-xs sm:text-sm">Save</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save your custom color</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </header>
  );
}
