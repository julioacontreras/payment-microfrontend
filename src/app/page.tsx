'use client'

import { useEffect, useState } from 'react'
import NewPayment from '../ui/views/new-payment'
import { Loader } from '../ui/components/loader'
import { Option } from '../ui/components/input-select'
import { getCoinTypesToSelect } from '../hooks/get-coin-types-to-select'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [coinTypes, setCoinTypes ] = useState<Option[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoinTypesToSelect()
      setCoinTypes(data)
      setIsLoading(false)
    }
    fetchData()
  });  

  return (
    <main className="lg:w-2/5 sm:w-4/5 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {
        isLoading &&
          <Loader />
      }
      {
        !isLoading &&
          <NewPayment coinTypes={coinTypes} />
      }
    </main>
  )
}
