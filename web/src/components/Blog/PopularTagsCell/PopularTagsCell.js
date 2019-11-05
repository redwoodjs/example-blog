import TagList from 'src/components/Blog/TagList'

export const query = gql`
  {
    tags {
      id
      name
    }
  }
`

export const Loader = () => <div>Loading tags...</div>

const PopularTagsCell = ({ tags = [] }) => {
  return (
    <div className="mt-16">
      <h2 className="font-semibold text-indigo-800">Popular Tags</h2>
      <ul className="text-sm mt-2">
        <TagList tags={tags} />
      </ul>
    </div>
  )
}

export default PopularTagsCell
