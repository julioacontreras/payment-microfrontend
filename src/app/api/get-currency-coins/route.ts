import { NextResponse } from 'next/server';
import { Option } from '@/ui/components/input-select'

type CointType = {
  blockchain: string
  image: string
  max_amount: string
  min_amount: string
  name: string
  symbol: string  
}

export const POST = async (req: Request) => {
  const response = await fetch(String(process.env.URL_CURRENCIES), { headers: {'X-Device-Id': String(process.env.X_DEVICE_ID)} })
  const data = await response.json()
  const options: Option[] = data.map((item: CointType) => {
    return {
      title: item.name,
      value: item.symbol,
      url: item.image        
    }
  })
  return NextResponse.json(options)
}
