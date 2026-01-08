export function parseXtallStats(viewText) {
    const result = {}
    if (!viewText) return result
  
    const lines = viewText.split('\n')
  
    for (const line of lines) {
      const match = line.match(/^(.+?)\s([+-])\s?([\d.]+)(%?)/)
  
      if (match) {
        const [, name, sign, value, percent] = match
        result[name.trim()] = {
          sign,
          value: Number(value),
          percent: percent === '%'
        }
      }
    }
  
    return result
  }
  