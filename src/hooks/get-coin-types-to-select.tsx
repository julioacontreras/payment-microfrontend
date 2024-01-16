import { Option } from '@/ui/components/input-select'

export async function getCoinTypesToSelect(): Promise<Option[]> {
  const response = await fetch('/api/get-currency-coins')
  return await response.json()
}
