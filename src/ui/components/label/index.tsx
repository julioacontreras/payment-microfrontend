import React from 'react'
import ClassNames from 'classnames'

export type Props = {
  text: string
  size?: string
}

export function Label(props: Props) {
  const classNames = ClassNames('leading-tight tracking-tight text-gray-900', {
    'text-3xl': props.size === undefined,
    'text-2xl': props.size === 'lg',
    'text-xl': props.size === 'md',
    'text-sm font-semibold': props.size === 'sm',
    'text-sm': props.size === 'xs'
  })

  return <h1 className={ classNames }>
    { props.text }
  </h1>
}
  