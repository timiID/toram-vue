// xtallFilters.js
import normalCrystas from "@/assets/icons/crysta_normal.jpg";
import weaponCrystas from "@/assets/icons/crysta_senjata.jpg";
import armorCrystas from "@/assets/icons/crysta_zirah.jpg";
import additionalCrystas from "@/assets/icons/crysta_pelengkap.jpg";
import specialCrystas from "@/assets/icons/crysta_tambahan.jpg";
import normalEnhancerCrystas from "@/assets/icons/crysta_up.jpg"; 
import weaponEnhancerCrystas from "@/assets/icons/enhance_weapon_crysta.png";
import armorEnhancerCrystas from "@/assets/icons/enhance_armor_crysta.png";
import additionalEnhancerCrystas from "@/assets/icons/enhance_additional_crysta.png";
import specialEnhancerCrystas from "@/assets/icons/enhace_special_crysta.png";

export const displayTypes = [
  { label: 'Weapon Crystas', value: 'WEAPON', icon: weaponCrystas, color: 'red' },
  { label: 'Weapon Enhancer Crystas', value: 'WEAPON_UPGRADE', icon: weaponEnhancerCrystas, color: 'red' },
  { label: 'Armor Crystas', value: 'ARMOR', icon: armorCrystas, color: 'green' },
  { label: 'Armor Enhancer Crystas', value: 'ARMOR_UPGRADE', icon: armorEnhancerCrystas, color: 'green' },
  { label: 'Additional Crystas', value: 'ADDITIONAL', icon: additionalCrystas, color: 'yellow' },
  { label: 'Additional Enhancer Crystas', value: 'ADDITIONAL_UPGRADE', icon: additionalEnhancerCrystas, color: 'yellow' },
  { label: 'Normal Crystas', value: 'NORMAL', icon: normalCrystas, color: 'blue' },
  { label: 'Normal Enhancer Crystas', value: 'NORMAL_UPGRADE', icon: normalEnhancerCrystas, color: 'blue' },
  { label: 'Special Crystas', value: 'SPECIAL', icon: specialCrystas, color: 'pink' },
  { label: 'Special Enhancer Crystas', value: 'SPECIAL_UPGRADE', icon: specialEnhancerCrystas, color: 'pink' }
];
export const xtallBadgeColors = { 
    'NORMAL': 'bg-blue-500/10 text-blue-500 border-blue-500/40', 
    'UPGRADE': 'bg-purple-500/10 text-purple-500 border-purple-500/40', 
    'ADDITIONAL': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/40', 
    'WEAPON': 'bg-red-500/10 text-red-500 border-red-500/40', 
    'ARMOR': 'bg-green-500/10 text-green-500 border-green-500/40', 
    'SPECIAL': 'bg-pink-500/10 text-pink-500 border-pink-500/40' 
};

export const getBadgeColor = (type) => {
    return xtallBadgeColors[type?.toUpperCase()] || 'bg-slate-500/10 text-slate-500 border-slate-500/40';
};


// Fungsi pencarian relasi (Membutuhkan data crystal sebagai parameter)
export const getBaseFor = (xtall, crystalData) => {
    if (!xtall?.link || !crystalData) return null;
    return crystalData.find(c => String(c.code) === String(xtall.link));
};

export const getEvoFor = (xtall, crystalData) => {
    if (!xtall?.code || !crystalData) return [];
    return crystalData.filter(c => String(c.link) === String(xtall.code));
};