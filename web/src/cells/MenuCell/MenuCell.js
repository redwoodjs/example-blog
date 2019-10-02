import { useQuery } from '@hammerframework/hammer-web'
import Menu from 'src/components/Menu'

export const postsQuery = gql`
  {
    posts {
      id
      title
      slug
      postedAt
    }
  }
`

const tagsQuery = gql`
  {
    tags {
      id
      name
    }
  }
`

const MenuCell = () => {
  return <Menu posts={useQuery(postsQuery)} tags={useQuery(tagsQuery)} />
}

export default MenuCell
