// Car configuration types and data

export type BodyKitType = "stock" | "nismo" | "veilside" | "topSecret";
export type WheelType = "stock" | "te37" | "bbsLm" | "meisterS1" | "advanGt";
export type SpoilerType = "stock" | "nismoGt" | "carbonDuckTail" | "minesWing";
export type HoodType = "stock" | "carbonVented" | "aluminumVented";
export type LightsType = "stock" | "clearLens" | "smokedLens" | "ledConversion";
export type ExhaustType = "stock" | "titaniumDual" | "hksPower" | "topSecretExhaust";
export type WindowTintType = "clear" | "light" | "medium" | "dark";

export interface CarColor {
  name: string;
  hex: string;
}

export const PRESET_COLORS: CarColor[] = [
  { name: "Bayside Blue", hex: "#2e5f8f" },
  { name: "Millennium Jade", hex: "#1a4d2e" },
  { name: "Midnight Purple II", hex: "#2b1b3d" },
  { name: "White Pearl", hex: "#f8f9fa" },
  { name: "Black Pearl", hex: "#1a1a1a" },
  { name: "Sonic Silver", hex: "#8c8c8c" },
  { name: "Champion Yellow", hex: "#ffd700" },
  { name: "Passion Red", hex: "#c41e3a" },
];

export interface BodyKitOption {
  id: BodyKitType;
  name: string;
  description: string;
}

export interface WheelOption {
  id: WheelType;
  name: string;
  description: string;
}

export interface SpoilerOption {
  id: SpoilerType;
  name: string;
  description: string;
}

export interface HoodOption {
  id: HoodType;
  name: string;
  description: string;
}

export interface LightsOption {
  id: LightsType;
  name: string;
  description: string;
}

export interface ExhaustOption {
  id: ExhaustType;
  name: string;
  description: string;
}

export interface WindowTintOption {
  id: WindowTintType;
  name: string;
  description: string;
}

export const BODY_KITS: BodyKitOption[] = [
  { id: "stock", name: "Stock", description: "Original R34 body" },
  { id: "nismo", name: "Nismo R-Tune", description: "Aggressive Nismo styling" },
  { id: "veilside", name: "Veilside Fortune", description: "Iconic wide body kit" },
  { id: "topSecret", name: "Top Secret", description: "Premium JDM styling" },
];

export const WHEELS: WheelOption[] = [
  { id: "stock", name: "Stock", description: "Original R34 wheels" },
  { id: "te37", name: "Rays Volk TE37", description: "Classic racing wheels" },
  { id: "bbsLm", name: "BBS LM", description: "Legendary German wheels" },
  { id: "meisterS1", name: "Work Meister S1", description: "Premium 3-piece wheels" },
  { id: "advanGt", name: "Advan GT", description: "Lightweight forged wheels" },
];

export const SPOILERS: SpoilerOption[] = [
  { id: "stock", name: "Stock", description: "Factory spoiler" },
  { id: "nismoGt", name: "Nismo GT Wing", description: "High downforce wing" },
  { id: "carbonDuckTail", name: "Carbon Fiber Duck Tail", description: "Subtle carbon styling" },
  { id: "minesWing", name: "Mine's Wing", description: "Iconic tuner wing" },
];

export const HOODS: HoodOption[] = [
  { id: "stock", name: "Stock", description: "Original hood" },
  { id: "carbonVented", name: "Carbon Fiber Vented", description: "Lightweight with vents" },
  { id: "aluminumVented", name: "Aluminum Vented", description: "Heat dissipation vents" },
];

export const LIGHTS: LightsOption[] = [
  { id: "stock", name: "Stock Headlights", description: "Original headlights" },
  { id: "clearLens", name: "Clear Lens", description: "Modern clear look" },
  { id: "smokedLens", name: "Smoked Lens", description: "Dark smoked tint" },
  { id: "ledConversion", name: "LED Conversion", description: "Bright LED upgrade" },
];

export const EXHAUSTS: ExhaustOption[] = [
  { id: "stock", name: "Stock", description: "Factory exhaust" },
  { id: "titaniumDual", name: "Titanium Dual", description: "Lightweight titanium tips" },
  { id: "hksPower", name: "HKS Hi-Power", description: "Performance exhaust" },
  { id: "topSecretExhaust", name: "Top Secret", description: "Premium titanium system" },
];

export const WINDOW_TINTS: WindowTintOption[] = [
  { id: "clear", name: "Clear", description: "No tint" },
  { id: "light", name: "Light Tint (20%)", description: "Subtle tint" },
  { id: "medium", name: "Medium Tint (35%)", description: "Moderate darkness" },
  { id: "dark", name: "Dark Tint (5%)", description: "Maximum privacy" },
];
