import { useQuery } from '@hammerframework/hammer-web'

import { POSTS } from 'src/api/posts'
import { TAGS } from 'src/api/tags'
import Menu from 'src/components/Menu'

const MenuCell = () => {
  return <Menu posts={useQuery(POSTS)} tags={useQuery(TAGS)} />
}

export default MenuCell
