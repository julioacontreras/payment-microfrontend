import React from 'react'
import ClassNames from 'classnames'

export type Props = {
  size?: string
  underline?: boolean
}

export function Spacer(props: Props) {
  const className = ClassNames(`w-full h-${props.size ?? 'sm'}`, {
    'border-t border-gray-300': props.underline,
  })

  return (<div className={ className }></div>)
}
  
  