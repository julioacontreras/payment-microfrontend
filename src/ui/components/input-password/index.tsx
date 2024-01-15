import React from 'react'

export type Props = {
  title: string
  placeholder: string
  required?: boolean | undefined
}

export function InputPassword(props: Props) {
  const inputProps = { required: props.required }
  return <>
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">{ props.title }</label>
    <input type="password" name="password" id="password" placeholder={ props.placeholder } className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" { ...inputProps } />
  </>
}
  