"use client";

import CustomizationPanel from "@/components/customization/CustomizationPanel";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { Palette, RotateCcw } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const Car3DViewer = dynamic(() => import("@/components/3d/Car3DViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-slate-300">Loading GTR R34 Model...</p>
        <p className="text-slate-500 text-sm mt-2">Please wait, loading high-quality 3D model</p>
      </div>
    </div>
  ),
});

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const viewerRef = useRef<any>(null);

  const handleResetCamera = () => {
    if (viewerRef.current) {
      viewerRef.current.resetCamera();
    }
  };

  return (
    <main className="flex flex-col h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden relative">
        {/* 3D Viewer */}
        <div className="flex-1 relative min-w-0">
          <Car3DViewer ref={viewerRef} />
          
          {/* Mobile/Tablet FAB Buttons */}
          <div className="lg:hidden absolute bottom-6 right-6 z-10 flex flex-col gap-3">
            {/* Reset Camera Button */}
            <Button
              onClick={handleResetCamera}
              size="lg"
              className="rounded-full w-14 h-14 shadow-xl bg-slate-700 hover:bg-slate-600"
              title="Reset Camera"
            >
              <RotateCcw size={22} />
            </Button>
            
            {/* Customization Button */}
            <Button
              onClick={() => setDrawerOpen(true)}
              size="lg"
              className="rounded-full w-16 h-16 shadow-2xl bg-blue-600 hover:bg-blue-700"
              title="Customize"
            >
              <Palette size={28} />
            </Button>
          </div>

          {/* Desktop: Reset Button */}
          <div className="hidden lg:block absolute bottom-6 right-6 z-10">
            <Button
              onClick={handleResetCamera}
              size="lg"
              className="rounded-full w-14 h-14 shadow-xl bg-slate-700/80 hover:bg-slate-600 backdrop-blur-sm"
              title="Reset Camera"
            >
              <RotateCcw size={22} />
            </Button>
          </div>

          {/* Instructions Overlay for Desktop */}
          <div className="hidden lg:block absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm rounded-lg p-4 border border-slate-800 max-w-xs">
            <h3 className="text-sm font-semibold text-white mb-2">
              🖱️ Controls
            </h3>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Drag to rotate</li>
              <li>• Scroll to zoom</li>
              <li>• Use panel to customize</li>
              <li>• Click 🔄 to reset camera</li>
            </ul>
          </div>
        </div>

        {/* Desktop: Customization Panel (Sidebar) */}
        <div className="hidden lg:block w-80">
          <CustomizationPanel />
        </div>

        {/* Mobile/Tablet: Drawer */}
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <CustomizationPanel />
        </Drawer>
      </div>
      <Footer />
    </main>
  );
}
