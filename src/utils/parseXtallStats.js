export function parseXtallStats(viewText) {
    const result = {}
  
    if (!viewText) return result
  
    viewText
      .split('\n')
      .map(l => l.trim())
      .forEach(line => {
        // skip non-stat
        if (!line.match(/[+-]\s*\d/)) return
  
        /**
         * CONTOH YANG DIDUKUNG:
         * Magic Pierce +5%
         * MaxMP -200
         * Daya Jarak Dekat +4%
         */
        const match = line.match(
          /^(.+?)\s*([+-])\s*(\d+)(%)?$/
        )
  
        if (!match) return
  
        const [, name, sign, value] = match
  
        result[name.trim().toUpperCase()] = {
          sign,
          value: Number(value)
        }
      })
  
    return result
  }
  