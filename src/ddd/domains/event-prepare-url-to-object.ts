function paramsToObject(entries: any) {
    let result: string = ''
    for(const [key] of entries) { // each 'entry' is a [key, value] tupple
      result = key
    }
    return JSON.parse(result.slice(0, -1))
  }
  
export function prepareParamsToObject(params: string) {
    const urlParams = new URLSearchParams(params);
    return paramsToObject(urlParams)
}