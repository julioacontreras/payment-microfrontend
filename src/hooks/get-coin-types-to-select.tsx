import { Option } from '../ui/components/input-select'

type CointType = {
  blockchain: string
  image: string
  max_amount: string
  min_amount: string
  name: string
  symbol: string  
}

const URL_CURRENCIES = 'https://payments.pre-bnvo.com/api/v1/currencies'
const X_DEVICE_ID = '2a758770-36ec-4f64-ac70-ae3b17397ebd' 

export async function getCoinTypesToSelect(): Promise<Option[]> {
  const response = await fetch(URL_CURRENCIES, { headers: {'X-Device-Id': X_DEVICE_ID} })
  const data = await response.json()
  const options: Option[] = data.map((item: CointType) => {
    return {
      title: item.name,
      value: item.symbol,
      url: item.image        
    }
  })
  return options
}