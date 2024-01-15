'use client'

import Image from 'next/image'
import { Label } from '@/ui/components/label'
import { Panel } from '@/ui/components/panel'
import { Stack } from '@/ui/components/stack'
import { Spacer } from '@/ui/components/spacer'
import { Payment } from '@/ddd/domains/payment'
import { Option } from '@/ui/components/input-select'

export type Props = {
  payment: Payment
  coinTypes: Option[]
}

export default function DetailsPayment(props: Props) {

  let coinTitle = ''
  let coinImg = ''
  const cointType = props.coinTypes.find(( option: Option ) => option.value === String(props.payment.criptoCoinId)) as Option | undefined
  if (cointType) {
    coinTitle = cointType.title
    coinImg = cointType.url
  }

  return (
    <>
    <Stack>
      <Label text="Resumen del pedido" size="md" />
    </Stack>
    <Panel bgStyle="secondary">
      <Stack distribution='between' >
        <Label text="Importe:" size="xs" />
        <Label text={` ${String(props.payment.amountToPay)} EUR` } size="sm" />       
      </Stack>   
      <Spacer underline={true} />   
      <Stack distribution='between' >
        <Label text="Moneda seleccionada:" size="xs" />
        <div className='flex'>
          <Image src={ coinImg } alt="coin" className="w-4 h-4 mr-2" width={16} height={16} priority />
          <Label text={ coinTitle } size="sm" />
        </div>
      </Stack>
      <Spacer underline={true} />
      <Stack distribution='between' >
        <Label text="Comercio:" size="xs" />
        <Label text="Comercio de pruebas SFTX" size="xs" />
      </Stack>
      <Stack distribution='between'>
        <Label text="Fecha:" size="xs" />
        <Label text={ new Date().toLocaleDateString('es') } size="xs" />
      </Stack>      
      <Spacer underline={true} />   
      <Stack distribution='between' >
        <Label text="Concepto:" size="xs" />
        <Label text={String(props.payment.concept)} size="xs" />
      </Stack>
    </Panel>
    </>
  )
}
