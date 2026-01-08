export function parseXtallStats(viewText) {
    const result = {}
  
    if (!viewText) return result
  
    const aliasMap = {
      // Offensive
      'PENETERASI SIHIR': 'MAGIC PIERCE',
      'PHYSICAL PIERCE': 'PHYSICAL PIERCE',
      'DAYA JARAK DEKAT': 'SHORT RANGE DMG',
      'DAYA JARAK JAUH': 'LONG RANGE DMG',
      'SERANGAN MENGHUNUS': 'UNSHEATHE ATTACK',
  
      // Element
      'KEBAL API': 'FIRE RESISTANCE',
      'KEBAL AIR': 'WATER RESISTANCE',
      'KEBAL ANGIN': 'WIND RESISTANCE',
      'KEBAL BUMI': 'EARTH RESISTANCE',
      'KEBAL CAHAYA': 'LIGHT RESISTANCE',
      'KEBAL GELAP': 'DARK RESISTANCE',
  
      // DTE
      'STRONGER AGAINST': 'STRONGER AGAINST',
  
      // Indonesian → English fallback
      'TAMBAHAN SIHIR': 'ADDITIONAL MAGIC',
      'TAMBAHAN FISIK': 'ADDITIONAL MELEE'
    }
  
    viewText.split('\n').forEach(line => {
      const match = line.match(/(.+?)\s([+-])\s?(\d+)/)
      if (!match) return
  
      let [, rawName, sign, value] = match
      let key = rawName.trim().toUpperCase()
  
      // alias normalize
      if (aliasMap[key]) {
        key = aliasMap[key]
      }
  
      result[key] = {
        sign,
        value: Number(value)
      }
    })
  
    return result
  }
  