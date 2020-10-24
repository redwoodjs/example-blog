import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { format, formatDistanceToNow } from 'date-fns'

import { QUERY } from 'src/components/Admin/PostsCell'

const HIDE_POST_MUTATION = gql`
  mutation HidePostMutation($id: ID!) {
    hidePost(id: $id) {
      id
    }
  }
`

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const wordCount = (post) => {
  return post.body.split(' ').length
}

const PostsList = ({ posts }) => {
  const [hidePost] = useMutation(HIDE_POST_MUTATION, {
    onCompleted: () => {
      location.reload()
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      location.reload()
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onHideClick = (event) => {
    const id = event.target.dataset.id
    const title = event.target.dataset.title

    if (confirm(`Are you sure you want to un-publish post "${title}"?`)) {
      hidePost({ variables: { id: parseInt(id) } })
    }
  }

  const onDeleteClick = (event) => {
    const id = event.target.dataset.id
    const title = event.target.dataset.title

    if (confirm(`Are you sure you want to delete post "${title}"?`)) {
      deletePost({ variables: { id: parseInt(id) } })
    }
  }

  return (
    <table className="w-full">
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="py-2">
              <Link
                to={routes.adminEdit({ id: post.id })}
                className="font-semibold text-indigo-700"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-600">by {post.author}</p>
            </td>
            <td className="py-2 text-sm text-center">
              {wordCount(post)} words
            </td>
            <td className="py-2 text-sm text-right">
              {post.postedAt ? (
                <>
                  <span className="block">
                    Published{' '}
                    <time dateTime={post.postedAt}>
                      {formatDistanceToNow(new Date(post.postedAt), {
                        addSuffix: true,
                      })}
                    </time>
                  </span>
                  <time
                    className="block text-gray-500"
                    dateTime={post.postedAt}
                  >
                    {format(new Date(post.postedAt), 'PPPPp')}
                  </time>
                </>
              ) : (
                <span className="text-xs bg-gray-300 text-gray-600 font-semibold tracking-wide uppercase px-2 py-1 rounded">
                  Draft
                </span>
              )}
            </td>
            <td className="py-2 text-right text-xs">
              {post.postedAt && (
                <a
                  href="#"
                  data-id={post.id}
                  data-title={post.title}
                  className="mr-3 text-indigo-600 hover:underline"
                  onClick={onHideClick}
                >
                  Hide
                </a>
              )}
              <a
                href="#"
                data-id={post.id}
                data-title={post.title}
                className="text-red-600 hover:underline"
                onClick={onDeleteClick}
              >
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PostsList
