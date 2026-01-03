"use strict";

export const HIGHEST_PROF = 280; 
export const HIGHEST_ARM_POT = 54;
export const HIGHEST_WPN_POT = 55;
export const ARMOR_DIFFICULTY = 265;
export const WEAPON_DIFFICULTY = 300;
export const PRIMARY_STAT = 510;
export const SECONDARY_STAT = 277;

const { floor, min, max } = Math;

export const calculateCharacterDiff = (prof, tec, dex, eDex, eDexP) => {
    const totalDex = floor(dex * (100 + (eDexP || 0)) / 100 + (eDex || 0));
    return (prof || 0) + floor((tec || 0) / 2) + floor(totalDex / 6);
};

export const calculateSuccessRate = (skill, charDiff, itemDiff, str, eStr, eStrP) => {
    const totalStr = floor(str * (100 + (eStrP || 0)) / 100 + (eStr || 0));
    const baseRate = (50 + 5 * (skill || 0)) / 100;
    const diffGap = 10 + (charDiff || 0) - (itemDiff || 0) + floor(totalStr / 10);
    return min(100, max(0, floor(baseRate * diffGap)));
};

export const calculatePotential = (basePot, careful, expert, type, stats) => {
    let pot = floor((basePot || 0) * (1 + (careful || 0) * 0.01 + (expert || 0) * 0.02));
    const s = stats;
    
    switch (type) {
        case "Armor": pot += floor(s.VIT / 10); break;
        case "1H Sword":
        case "Bow": pot += floor((s.DEX + s.STR) / 20); break;
        case "2H Sword": pot += floor(s.STR / 10); break;
        case "Bowgun": pot += floor(s.DEX / 10); break;
        case "Staff": pot += floor(s.INT / 10); break;
        case "Magic Device": pot += floor((s.INT + s.AGI) / 20); break;
        case "Knuckle": pot += floor(s.AGI / 10); break;
        case "Halberd": pot += floor((s.STR + s.AGI) / 20); break;
        case "Katana": pot += floor((s.DEX + s.AGI) / 20); break;
    }
    return pot;
};