import * as React from "react"
import { cn } from "@/lib/utils"

interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function Drawer({ open, onOpenChange, children }: DrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}
      
      {/* Drawer */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800 z-50 transition-transform duration-300 lg:hidden",
          "max-h-[85vh] rounded-t-2xl overflow-hidden",
          open ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Handle */}
        <div className="flex justify-center py-3 bg-slate-950 sticky top-0 z-10">
          <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
        </div>
        
        <div className="overflow-y-auto max-h-[calc(85vh-40px)]">
          {children}
        </div>
      </div>
    </>
  )
}
