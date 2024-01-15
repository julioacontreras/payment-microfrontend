import React from 'react'
import ClassNames from 'classnames'

export type Props = {
  children?: React.ReactElement[] | React.ReactElement
  bgStyle?: string
}

export function Panel(props: Props) {
  const className = ClassNames('w-full flex flex-col p-3  rounded-lg', {
    'bg-slate-50': props.bgStyle === 'secondary',
    'border border-gray-300': props.bgStyle === undefined,
  })
  
  return (
    <div className={className}>
      { props.children }  
    </div>
  )
}
  
  