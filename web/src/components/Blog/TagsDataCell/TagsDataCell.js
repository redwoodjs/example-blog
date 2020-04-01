// like other cells, but renders to a <data> tag

export const QUERY = gql`
  query {
    tags {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ tags, forwardRef }) => {
  return (
    <>
      <data value={JSON.stringify(tags)} ref={forwardRef} />
    </>
  )
}
