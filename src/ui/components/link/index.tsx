import React from 'react'

export type Props = {
  title: string
  href: string
}

export function Link(props: Props) {
  return (<a href={ props.href } className="text-sm font-medium text-primary-600 hover:underline">{ props.title }</a>)
}
