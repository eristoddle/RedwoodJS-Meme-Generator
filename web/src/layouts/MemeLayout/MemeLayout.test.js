import { render } from '@redwoodjs/testing'

import MemeLayout from './MemeLayout'

describe('MemeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MemeLayout />)
    }).not.toThrow()
  })
})
