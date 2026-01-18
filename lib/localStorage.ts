// Local storage utilities for persisting car customization

const STORAGE_KEY = "gtr-r34-customization";

export interface CarCustomization {
  bodyKit: string;
  wheels: string;
  spoiler: string;
  color: string;
  hood: string;
  lights: string;
  exhaust: string;
  windowTint: string;
}

export const saveCustomization = (customization: CarCustomization): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customization));
  } catch (error) {
    console.error("Failed to save customization:", error);
  }
};

export const loadCustomization = (): CarCustomization | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Failed to load customization:", error);
  }
  return null;
};

export const clearCustomization = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear customization:", error);
  }
};

export const getDefaultCustomization = (): CarCustomization => ({
  bodyKit: "stock",
  wheels: "stock",
  spoiler: "stock",
  color: "#2e5f8f", // Bayside Blue
  hood: "stock",
  lights: "stock",
  exhaust: "stock",
  windowTint: "clear",
});
