import { render } from '@redwoodjs/testing'

import MemesPage from './MemesPage'

describe('MemesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MemesPage />)
    }).not.toThrow()
  })
})
