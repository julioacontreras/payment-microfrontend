import { Payment } from './payment'

export function formdataToPayment(formData: FormData): Payment {
  const payment: Payment = {
    amountToPay: Number(formData.get('amountToPay')),
    concept: formData.get('concept') as string,
    criptoCoinId: formData.get('criptoCoinId') as string
  }
  return payment      
}
