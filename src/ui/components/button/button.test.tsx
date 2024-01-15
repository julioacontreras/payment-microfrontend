import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Button } from './index'
 
describe('Button', () => {
  it('renders a heading', () => {
    const { container } = render(<Button title="Hey"/>)
    expect(container.firstElementChild?.innerHTML).toEqual('Hey')
  })
})
