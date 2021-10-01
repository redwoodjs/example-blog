import TagList from 'src/components/Blog/TagList'

export const QUERY = gql`
  query ALL_TAGS {
    tags {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading tags...</div>

export const Success = ({ tags = [] }) => {
  return (
    <div className="mt-16">
      <h2 className="font-semibold text-indigo-800">Popular Tags</h2>
      <ul className="text-sm mt-2">
        <TagList tags={tags} />
      </ul>
    </div>
  )
}
