import { Payment } from '../../domains/payment'

export function isValidPayment (payment: Payment) {
    if (
      payment.amountToPay > 0 &&
      payment.concept.length > 0 &&
      payment.criptoCoinId.length > 0 
    ) {
      return true
    }        
    return false
  }