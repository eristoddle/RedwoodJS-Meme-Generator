import { render } from '@redwoodjs/testing'

import ImagePage from './ImagePage'

describe('ImagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImagePage />)
    }).not.toThrow()
  })
})
