import React from 'react'
import Image from 'next/image'

export function Logo({}) {
  return <Image src="./logo.svg" alt="logo" className="w-12 h-12 mr-2" width={200} height={200} priority />
}
  