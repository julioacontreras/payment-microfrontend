import React from 'react'
import ClassNames from 'classnames'

export type Props = {
  children?: React.ReactElement[] | React.ReactElement
  center?: boolean
  distribution?: string
  noSpace?: boolean
}

export function Stack(props: Props) {
  const className = ClassNames('w-full flex flex-row gap-2  rounded-lg', { 
    'justify-center': props.center,
    'justify-between': props.distribution === 'between',
    'p-3': props.noSpace === undefined  
  })

  return (
    <div className={className}>
      { props.children }  
    </div>
  )
}
