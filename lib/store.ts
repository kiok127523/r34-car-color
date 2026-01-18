import { create } from "zustand";
import {
  saveCustomization,
  loadCustomization,
  getDefaultCustomization,
  CarCustomization,
} from "./localStorage";
import type {
  BodyKitType,
  WheelType,
  SpoilerType,
  HoodType,
  LightsType,
  ExhaustType,
  WindowTintType,
} from "./carConfig";

interface CarStore extends CarCustomization {
  // Hydration flag
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  
  // Actions
  setBodyKit: (bodyKit: BodyKitType) => void;
  setWheels: (wheels: WheelType) => void;
  setSpoiler: (spoiler: SpoilerType) => void;
  setColor: (color: string) => void;
  setHood: (hood: HoodType) => void;
  setLights: (lights: LightsType) => void;
  setExhaust: (exhaust: ExhaustType) => void;
  setWindowTint: (tint: WindowTintType) => void;
  resetToDefault: () => void;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
}

export const useCarStore = create<CarStore>((set, get) => ({
  // Initial state
  ...getDefaultCustomization(),
  _hasHydrated: false,

  setHasHydrated: (state) => {
    set({ _hasHydrated: state });
  },

  // Actions
  setBodyKit: (bodyKit) => {
    set({ bodyKit });
    get().saveToLocalStorage();
  },

  setWheels: (wheels) => {
    set({ wheels });
    get().saveToLocalStorage();
  },

  setSpoiler: (spoiler) => {
    set({ spoiler });
    get().saveToLocalStorage();
  },

  setColor: (color) => {
    set({ color });
    get().saveToLocalStorage();
  },

  setHood: (hood) => {
    set({ hood });
    get().saveToLocalStorage();
  },

  setLights: (lights) => {
    set({ lights });
    get().saveToLocalStorage();
  },

  setExhaust: (exhaust) => {
    set({ exhaust });
    get().saveToLocalStorage();
  },

  setWindowTint: (windowTint) => {
    set({ windowTint });
    get().saveToLocalStorage();
  },

  resetToDefault: () => {
    const defaults = getDefaultCustomization();
    set(defaults);
    saveCustomization(defaults);
  },

  saveToLocalStorage: () => {
    if (typeof window === 'undefined') return; // Skip on server
    
    const state = get();
    saveCustomization({
      bodyKit: state.bodyKit,
      wheels: state.wheels,
      spoiler: state.spoiler,
      color: state.color,
      hood: state.hood,
      lights: state.lights,
      exhaust: state.exhaust,
      windowTint: state.windowTint,
    });
  },

  loadFromLocalStorage: () => {
    if (typeof window === 'undefined') return; // Skip on server
    
    const saved = loadCustomization();
    if (saved) {
      set({ ...saved, _hasHydrated: true });
    } else {
      set({ _hasHydrated: true });
    }
  },
}));
