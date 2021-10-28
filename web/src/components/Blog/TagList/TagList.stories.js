import React from 'react'

import TagList from './TagList'

export default { title: 'Blog/TagList' }

export const plain = () => {
  return (
    <div className="m-2">
      <TagList tags={[{ name: 'foo' }, { name: 'bar' }]} />
    </div>
  )
}
