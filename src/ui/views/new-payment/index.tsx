'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { InputPrice } from '@/ui/components/input-price'
import { InputText } from '@/ui/components/input-text'
import { InputSelect, Option } from '@/ui/components/input-select'
import { Label } from '@/ui/components/label'
import { Spacer } from '@/ui/components/spacer'
import { Panel } from '@/ui/components/panel'
import { Stack } from '@/ui/components/stack'
import { Button } from '@/ui/components/button'
import { isValidPayment } from '@/ddd/use-cases/new-payment/is-valid-payment'
import { formdataToPayment } from '@/ddd/domains/event-formdata-to-payment'

export type Props = {
  coinTypes: Option[],
}

export default function NewPayment(props: Props) {
  const [ isValidFormulary, setIsValidFormulary ] = useState(false)
  const refForm = useRef(null)
  const router = useRouter()
  
  function formAction(formData: any) {
    const payment = formdataToPayment(formData)
    const params = {
      payment,
      coinTypes: props.coinTypes
    }
    const paramsUrl = new URLSearchParams(JSON.stringify(params))
    router.push(`/details?params=${paramsUrl}`);
  }

  const checkValidation = () => {
    const formData = new FormData(refForm.current as unknown as HTMLFormElement)
    const payment = formdataToPayment(formData)
    setIsValidFormulary(isValidPayment(payment))
  }

  return (
    <Panel>
      <Stack center={true}>
        <Label text="Crear pago" size="lg" />
      </Stack>
      <Spacer />
      <form action={formAction} ref={refForm} className="w-full">
        <InputPrice name="amountToPay" title="Importe a pagar" placeholder="Añade importe a pagar" required={true} onChange={checkValidation} />
        <Spacer />
        <InputSelect
          name="criptoCoinId"
          title="Seleccionar modena"
          options={props.coinTypes}
          selectedIndex={0}
          required={true}
          onChange={checkValidation}
        />
        <Spacer />
        <InputText name="concept" title="Concepto" placeholder="Añade tu descripción de pago" required={true} onChange={checkValidation} />
        <Spacer size="md" />
        <Button title="Continuar" disabled={!isValidFormulary} />
        <Spacer size="lg" />
      </form>
    </Panel>
  )
}
