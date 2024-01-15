import React, { useState } from "react";
import Image from 'next/image'

export type Option = {
  title: string
  value: string
  url: string
}

export type Props = {
  name: string,
  title: string
  required?: boolean | undefined
  selectedIndex: number
  options: Option[]
  onChange?: any
}

export function InputSelect(props: Props) {
  const [isShowing, setIsShowing] = useState(false)  
  const inputProps = { required: props.required }
  const toggleSelect = (event: any) => {
    setIsShowing(!isShowing)
  }
  const getItem = (): Option => {
    return props.options.length > 0 ? props.options[props.selectedIndex] : { title: '', value: '', url: ''}
  }
  const [itemSelected, setItemSelected] = useState<Option>(getItem())
  const selectItem = (index: number) => {
    setIsShowing(false)
    setItemSelected(props.options[index]) 
    const elSelect = document.querySelector(`select[name="${props.name}"]`)
    if (elSelect) {
      (elSelect as unknown as {value: string}).value = props.options[index].value;
    }
    if (props.onChange) {
      props.onChange()
    }
  }

  return <>
    <label htmlFor={props.name} className="block mb-2 text-sm font-medium text-gray-900">{ props.title }</label>
    <button onClick={toggleSelect} data-dropdown-toggle="dropdown-states" className="w-full flex gap-2 p-2.5 flex-shrink-0 z-10 inline-flex items-center text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 " type="button">
      <div className="w-6">
        <Image src={ itemSelected.url } alt="logo" className="w-6 h-6 mr-2" width={16} height={16} priority />
      </div>
      <div className="flex-1 flex justify-start content-start">
        { itemSelected.title }
      </div>
      <div className="w-6">
      <Image src='/arrow.svg' alt="arrow" className="w-3 h-3" width={16} height={16} priority />        
      </div>
    </button>
      {
        isShowing &&
        <div className="relative">
          <div className="absolute z-10 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
            <ul className="py-2 w-full text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
                {
                  props.options.map((option: Option, index: number) => (
                    <li key={index}>
                        <button type="button" onClick={() => { selectItem(index) }} className="inline-flex w-full p-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <div className="inline-flex items-center">
                                <Image src={ option.url } alt={ option.title } className="w-6 h-6 mr-2" width={16} height={16} priority />
                                { option.title }
                            </div>
                        </button>
                    </li>
                  ))
                }
            </ul>
          </div>
        </div>
      }
    <select name={props.name} className="invisible h-0 w-0" { ...inputProps }>
      {
        props.options.map((option: Option, index: number) => (
          <option key={'option-key-' + index} value={ option.value }> { option.title }</option>
        ))
      }   
    </select>
  </>
}
