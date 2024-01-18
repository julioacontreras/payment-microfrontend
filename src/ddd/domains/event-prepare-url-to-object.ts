
export function prepareParamsToObject(params: string) {
    return JSON.parse(params.slice(0, -1))
}