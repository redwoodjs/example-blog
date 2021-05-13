import { render } from '@redwoodjs/testing'

import InlineLoader from './InlineLoader'

describe('InlineLoader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InlineLoader />)
    }).not.toThrow()
  })
})
