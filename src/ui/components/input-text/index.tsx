import React from 'react'

export type Props = {
  name: string,
  title: string
  placeholder: string
  required?: boolean | undefined
  onChange: any
}

export function InputText(props: Props) {
  const inputProps = { required: props.required}
  return <>
    <label htmlFor={props.name} className="block mb-2 text-sm font-medium text-gray-900">{ props.title }</label>
    <input
      type="text"
      name={props.name}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      placeholder={props.placeholder}
      {...inputProps}
      onKeyUp={props.onChange}
    />
  </>
}
  