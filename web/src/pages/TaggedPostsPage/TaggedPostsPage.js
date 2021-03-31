import { useParams } from '@redwoodjs/router'
import TaggedPostsCell from 'src/components/Blog/TaggedPostsCell'

const TaggedPostsPage = () => {
  const { tag } = useParams()

  return <TaggedPostsCell tag={tag} />
}

export default TaggedPostsPage
