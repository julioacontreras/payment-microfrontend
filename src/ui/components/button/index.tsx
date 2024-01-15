import React from 'react'
import ClassNames from 'classnames'

export type Props = {
  title: string
  disabled?: boolean
};

export function Button(props: Props) {
  const classNames = ClassNames('text-white flex w-full px-2.5 py-4 rounded-lg justify-center', {
    'bg-gray-800': props.disabled === false || props.disabled === undefined,
    'bg-gray-300': props.disabled === true
  })
  const buttonProps = { disabled: props.disabled } 
  return (<button type="submit" className={ classNames } { ...buttonProps } >
    { props.title }
  </button>);
}
  
  