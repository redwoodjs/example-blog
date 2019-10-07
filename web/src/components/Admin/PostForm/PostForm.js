import { useState } from 'react'

const PostForm = ({ post }) => {
  const [title, setTitle] = useState(post?.title || '')
  const [slug, setSlug] = useState(post?.slug || '')
  const [author, setAuthor] = useState(post?.author || '')
  const [body, setBody] = useState(post?.body || '')

  const onSubmit = (event) => {}

  const changeTitle = (event) => {
    setTitle(event.target.value)
  }
  const changeSlug = (event) => {
    setSlug(event.target.value)
  }
  const changeAuthor = (event) => {
    setAuthor(event.target.value)
  }
  const changeBody = (event) => {
    setBody(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label className="block">
        <span className="uppercase text-sm font-semibold tracking-wider text-gray-500">
          Title
        </span>
        <input
          type="text"
          className="block mt-2 w-full p-2 border text-lg text-gray-900"
          value={title}
          onChange={changeTitle}
        />
      </label>
      <label className="block mt-6">
        <span className="uppercase text-sm font-semibold tracking-wider text-gray-500">
          Slug
        </span>
        <div className="flex items-center">
          <span className="block mt-2 mr-1 text-lg text-gray-600">
            https://hammerreview.com/
          </span>
          <input
            type="text"
            className="block mt-2 w-full p-2 border text-lg text-gray-900"
            value={slug}
            onChange={changeSlug}
          />
        </div>
      </label>
      <label className="block mt-6">
        <span className="uppercase text-sm font-semibold tracking-wider text-gray-500">
          Author
        </span>
        <input
          type="text"
          className="block mt-2 w-full p-2 border text-lg text-gray-900"
          value={author}
          onChange={changeAuthor}
        />
      </label>
      <label className="block mt-6">
        <span className="uppercase text-sm font-semibold tracking-wider text-gray-500">
          Body
        </span>
        <textarea
          className="block mt-2 w-full h-64 p-2 border text-lg text-gray-900"
          value={body}
          onChange={changeBody}
        />
      </label>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="px-6 py-2 bg-gray-400 text-gray-600 text-sm rounded mr-4 uppercase font-bold tracking-wide"
        >
          Save
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-indigo-700 text-white text-sm rounded uppercase font-bold tracking-wider"
        >
          Publish
        </button>
      </div>
    </form>
  )
}

export default PostForm
