import TagList from 'src/components/TagList'

export const query = gql`
  query GET_TAGS {
    tags {
      id
      name
    }
  }
`

export const parseData = (data) => {
  console.log(data)
  return { ...data }
}

export const Loader = () => <div>Loading...</div>

export const Error = ({ error }) => {
  console.log(error)
  return 'Oh no!'
}

const PopularTags = ({ tags = [] }) => {
  return (
    <>
      <h2 className="font-semibold text-indigo-800 mt-16">Popular Tags</h2>
      <ul className="text-sm mt-2">
        <TagList tags={tags} />
      </ul>
    </>
  )
}

export default PopularTags
