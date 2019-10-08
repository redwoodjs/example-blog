import { useState, useRef } from 'react'
import FormErrorMessage from 'src/components/forms/ErrorMessage'

const PostForm = ({ post, onSave, error, loading }) => {
  const [title, setTitle] = useState(post?.title || '')
  const [slug, setSlug] = useState(post?.slug || '')
  const [author, setAuthor] = useState(post?.author || '')
  const [body, setBody] = useState(post?.body || '')
  const formEl = useRef(null)

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
  const onSubmit = (event) => {
    const data = { title, slug, author, body },
      type = document.activeElement.dataset.action
    onSave(data, type)
    event.preventDefault()
  }

  return (
    <form ref={formEl} onSubmit={onSubmit}>
      {error && (
        <FormErrorMessage
          error={error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mb-4"
          titleClassName="font-semibold"
          listClassName="list-disc list-inside"
          listItemClassName=""
        />
      )}

      <label className="block">
        <span className="uppercase text-sm font-semibold tracking-wider text-gray-500">
          Title
        </span>
        <input
          type="text"
          className="block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300"
          value={title}
          required={true}
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
            className="block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300"
            value={slug}
            required={true}
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
          className="block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300"
          value={author}
          required={true}
          onChange={changeAuthor}
        />
      </label>
      <label className="block mt-6">
        <span className="uppercase text-sm font-semibold tracking-wider text-gray-500">
          Body
        </span>
        <textarea
          className="block mt-2 w-full h-64 p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300"
          value={body}
          required={true}
          onChange={changeBody}
        />
      </label>
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          data-action="save"
          disabled={loading}
          className="px-6 py-2 bg-gray-400 text-gray-600 text-sm rounded mr-4 uppercase font-bold tracking-wide"
        >
          Save
        </button>
        <button
          type="submit"
          data-action="publish"
          disabled={loading}
          className="px-6 py-2 bg-indigo-700 text-white text-sm rounded uppercase font-bold tracking-wider"
        >
          Publish
        </button>
      </div>
    </form>
  )
}

export default PostForm
