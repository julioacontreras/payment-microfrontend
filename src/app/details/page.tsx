'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import DetailsPayment from '@/ui/views/details-payment'
import { Loader } from '@/ui/components/loader'
import { Option } from '@/ui/components/input-select'
import { Payment } from '@/ddd/domains/payment'
import { prepareParamsToObject } from '@/ddd/domains/event-prepare-url-to-object'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const paramsUrl = useSearchParams().get('params')
  const params = prepareParamsToObject(paramsUrl as string)
  const payment = params.payment as Payment
  const coinTypes = params.coinTypes as Option[]

  return (
    <main className="lg:w-2/5 sm:w-4/5 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {
        isLoading &&
          <Loader />
      }
      {
        !isLoading &&
          <DetailsPayment payment={payment} coinTypes={coinTypes} />
      }      
    </main>
  )
}
