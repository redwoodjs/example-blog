import { useState, useEffect, useCallback } from 'react'

import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  Label,
  FieldError,
} from '@redwoodjs/web'

import ReactFilestack from 'filestack-react'

import 'semantic-ui-css/semantic.css'
import { Dropdown } from 'semantic-ui-react'

import TagsDataCell from 'src/components/Blog/TagsDataCell'

const CSS = {
  label:
    'block mt-6 uppercase text-sm font-semibold tracking-wider text-gray-500',
  labelError:
    'block mt-6 uppercase text-sm font-semibold tracking-wider text-red-700',
  input:
    'block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300',
  inputHidden:
    'hidden',
  inputError:
    'block mt-2 w-full p-2 border border-red-500 text-lg text-red-700 rounded focus:outline-none focus:border-red-700',
  error: 'block mt-1 font-semibold uppercase text-xs text-red-600',
  save:
    'px-6 py-2 bg-gray-400 text-gray-600 text-sm rounded mr-4 uppercase font-bold tracking-wide',
  publish:
    'px-6 py-2 bg-indigo-700 text-white text-sm rounded mr-4 uppercase font-bold tracking-wider',
  unpublish:
    'px-6 py-2 bg-red-400 text-white text-sm rounded uppercase font-bold tracking-wider',
}

const PostForm = (props) => {

  const [splashImage, setSplashImage] = useState(props.post?.image)

  // the create and update functions manage tags via unique name, no need for
  // id field -- convert prop from array-of-objects to array-of-name-strings
  const [tags, setTags] = useState(
    props.post?.tags.reduce((prev, curr) => [...prev, curr.name], []).sort() ||
      []
  )

  // capture prior tags on first render only, so update function can do diffs
  const [priorTags, setPriorTags] = useState([])
  useEffect(() => {
    setPriorTags(tags.slice())
  }, [])

  // master list of tags is embedded as data tag; process after first render
  const [allTags, setAllTags] = useState([])
  const allTagsRef = useCallback((data) => {
    if (data.value) {
      setAllTags(
        JSON.parse(data.value)
          .sort((l, r) => (l.name < r.name ? -1 : 1))
          .map((i) => ({ text: i.name, value: i.name }))
      )
    }
  }, [])

  const onSubmit = (data) => {
    const type = document.activeElement.dataset.action
    props.onSave(Object.assign(data, { image: splashImage }), type)
    event.preventDefault()
  }

  const replaceImage = (event) => {
    event.preventDefault()

    setSplashImage(null)
  }

  const onFileUpload = (response) => {
    const upload = response.filesUploaded[0]
    console.info(response)
    setSplashImage(upload.url)
  }

  return (
    <Form error={props.error} onSubmit={onSubmit}>
      <Label
        name="title"
        className={CSS.label}
        errorClassName={CSS.labelError}
      />
      <TextField
        name="title"
        defaultValue={props.post?.title}
        className={CSS.input}
        errorClassName={CSS.inputError}
        validation={{ required: true }}
      />
      <FieldError name="title" className={CSS.error} />

      <Label
        name="slug"
        className={CSS.label}
        errorClassName={CSS.labelError}
      />
      <TextField
        name="slug"
        defaultValue={props.post?.slug}
        className={CSS.input}
        errorClassName={CSS.inputError}
        validation={{
          required: true,
          pattern: { value: /^\S+$/, message: 'cannot contain spaces' },
        }}
      />
      <FieldError name="slug" className={CSS.error} />
      {/* tags block */}
      <Label
        name="tags"
        className={CSS.label}
        errorClassName={CSS.labelError}
      />
      {/* master list-of-tags as <data> */}
      <TagsDataCell forwardRef={allTagsRef} />
      {/* does NOT change based on dropdown changes; hide */}
      <TextField
        name="priorTags"
        defaultValue={priorTags.join(',')}
        className={CSS.inputHidden}
        errorClassName={CSS.inputError}
        readOnly
        validation={{
          required: false,
        }}
      />
      {/* DOES change based on dropdown changes; hide */}
      <TextField
        name="tags"
        value={tags.join(',')}
        className={CSS.inputHidden}
        errorClassName={CSS.inputError}
        readOnly
        validation={{
          required: false,
        }}
      />
      {/* this is what the user sees as the tags control */}
      <Dropdown
        defaultValue={tags}
        fluid
        multiple
        selection
        options={allTags}
        onChange={(event, { value }) => setTags(value)}
      />
      <FieldError name="tags" className={CSS.error} />
      <Label
        name="author"
        className={CSS.label}
        errorClassName={CSS.labelError}
      />
      <TextField
        name="author"
        defaultValue={props.post?.author}
        className={CSS.input}
        errorClassName={CSS.inputError}
        validation={{ required: true }}
      />
      <FieldError name="author" className={CSS.error} />

      <Label
        name="body"
        className={CSS.label}
        errorClassName={CSS.labelError}
      />
      <TextAreaField
        name="body"
        defaultValue={props.post?.body}
        className={CSS.input + ' h-64'}
        errorClassName={CSS.inputError + ' h-64'}
        validation={{ required: true }}
      />
      <FieldError name="body" className={CSS.error} />

      <label className={CSS.label}>Splash Image</label>

      <ReactFilestack
        apikey={process.env.FILESTACK_API_KEY}
        onSuccess={onFileUpload}
        componentDisplayMode={{
          type: 'immediate',
        }}
        actionOptions={{
          displayMode: 'inline',
          container: 'embedded',
          fromSources: ['local_file_system', 'url'],
        }}
      />

      <div
        id="embedded"
        className={`h-80 ${splashImage ? 'hidden' : ''}`}
      ></div>

      {splashImage && (
        <div className="mt-2">
          <img src={splashImage} alt="Splash image" className="max-h-80" />

          <div className="mt-4">
            <a href="#" onClick={replaceImage} className={`mt-4 ${CSS.save}`}>
              Replace Image
            </a>
          </div>
        </div>
      )}
      <div className="flex justify-end pt-20">
        <Submit
          data-action="save"
          disabled={props.loading}
          className={CSS.save}
        >
          {props.save || 'Save'}
        </Submit>
        {props.publish && !props?.post?.postedAt && (
          <Submit
            data-action="publish"
            disabled={props.loading}
            className={CSS.publish}
          >
            {props.publish || 'Publish'}
          </Submit>
        )}
        {props.unpublish && props?.post?.postedAt && (
          <Submit
            data-action="unpublish"
            disabled={props.loading}
            className={CSS.unpublish}
          >
            {props.unpublish || 'Un-publish'}
          </Submit>
        )}
      </div>
    </Form>
  )
}

export default PostForm
