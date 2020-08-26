import { useState } from 'react'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  Label,
  FieldError,
} from '@redwoodjs/forms'
import ReactFilestack from 'filestack-react'

const CSS = {
  label:
    'block mt-6 uppercase text-sm font-semibold tracking-wider text-gray-500',
  labelError:
    'block mt-6 uppercase text-sm font-semibold tracking-wider text-red-700',
  input:
    'block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300',
  inputError:
    'block mt-2 w-full p-2 border border-red-500 text-lg text-red-700 rounded focus:outline-none focus:border-red-700',
  error: 'block mt-1 font-semibold uppercase text-xs text-red-600',
  save:
    'px-6 py-2 bg-gray-400 text-gray-600 text-sm rounded mr-4 uppercase font-bold tracking-wide',
  publish:
    'px-6 py-2 bg-indigo-700 text-white text-sm rounded uppercase font-bold tracking-wider',
}

const PostForm = (props) => {
  const [splashImage, setSplashImage] = useState(props.post?.image)

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

      <div className="flex justify-end mt-4">
        {props.save && (
          <Submit
            data-action="save"
            disabled={props.loading}
            className={CSS.save}
          >
            Save
          </Submit>
        )}
        <Submit
          data-action="publish"
          disabled={props.loading}
          className={CSS.publish}
        >
          {props.publish || 'Publish'}
        </Submit>
      </div>
    </Form>
  )
}

export default PostForm
