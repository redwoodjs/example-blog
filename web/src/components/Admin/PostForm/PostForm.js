import { useState } from 'react'
import HammerForm from 'src/components/forms/HammerForm'
import TextField from 'src/components/forms/TextField'
import TextAreaField from 'src/components/forms/TextAreaField'
import Submit from 'src/components/forms/Submit'
import ReactFilestack from 'filestack-react'

const CLASS_NAMES = {
  label: 'block mt-6 uppercase text-sm font-semibold tracking-wider text-gray-500',
  input:
    'block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300',
  error: 'block mt-1 font-semibold uppercase text-xs text-red-600',
  save:
    'px-6 py-2 bg-gray-400 text-gray-600 text-sm rounded mr-4 uppercase font-bold tracking-wide',
  publish: 'px-6 py-2 bg-indigo-700 text-white text-sm rounded uppercase font-bold tracking-wider',
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

    setSplashImage(upload.url)
  }

  return (
    <HammerForm error={props.error} form={{ onSubmit: onSubmit, className: '' }}>
      <TextField
        input={{
          name: 'title',
          defaultValue: props.post?.title,
          className: CLASS_NAMES.input,
        }}
        label={{ className: CLASS_NAMES.label }}
        error={{ className: CLASS_NAMES.error }}
        validation={{ required: true }}
      />

      <TextField
        input={{
          name: 'slug',
          defaultValue: props.post?.slug,
          className: CLASS_NAMES.input,
        }}
        label={{ className: CLASS_NAMES.label }}
        error={{ className: CLASS_NAMES.error }}
        validation={{
          required: true,
          // pattern: { value: /^\S+$/, message: 'cannot contain spaces' },
        }}
      />

      <TextField
        input={{
          name: 'author',
          defaultValue: props.post?.author,
          className: CLASS_NAMES.input,
        }}
        label={{ className: CLASS_NAMES.label }}
        error={{ className: CLASS_NAMES.error }}
        validation={{ required: true }}
      />

      <TextAreaField
        input={{
          name: 'body',
          defaultValue: props.post?.body,
          className: `${CLASS_NAMES.input} h-64`,
        }}
        label={{ className: CLASS_NAMES.label }}
        error={{ className: CLASS_NAMES.error }}
        validation={{
          required: true,
        }}
      />

      <label className={CLASS_NAMES.label}>Splash Image</label>

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

      <div id="embedded" className={`h-80 ${splashImage ? 'hidden' : ''}`}></div>

      {splashImage && (
        <div className="mt-2">
          <img src={splashImage} alt="Splash image" className="max-h-80" />

          <div className="mt-4">
            <a href="#" onClick={replaceImage} className={`mt-4 ${CLASS_NAMES.save}`}>
              Replace Image
            </a>
          </div>
        </div>
      )}

      <div className="flex justify-end mt-4">
        {props.save && (
          <Submit data-action="save" disabled={props.loading} className={CLASS_NAMES.save}>
            Save
          </Submit>
        )}
        <Submit data-action="publish" disabled={props.loading} className={CLASS_NAMES.publish}>
          {props.publish || 'Publish'}
        </Submit>
      </div>
    </HammerForm>
  )
}

export default PostForm
