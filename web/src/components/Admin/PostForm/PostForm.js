import HammerForm from 'src/components/forms/HammerForm'
import TextField from 'src/components/forms/TextField'
import TextAreaField from 'src/components/forms/TextAreaField'
import Submit from 'src/components/forms/Submit'

const CLASS_NAMES = {
  label:
    'block mt-6 uppercase text-sm font-semibold tracking-wider text-gray-500',
  input:
    'block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300',
  error: 'block mt-1 font-semibold uppercase text-xs text-red-600',
  save:
    'px-6 py-2 bg-gray-400 text-gray-600 text-sm rounded mr-4 uppercase font-bold tracking-wide',
  publish:
    'px-6 py-2 bg-indigo-700 text-white text-sm rounded uppercase font-bold tracking-wider',
}

const PostForm = (props) => {
  const onSubmit = (data) => {
    const type = document.activeElement.dataset.action
    props.onSave(data, type)
    event.preventDefault()
  }

  return (
    <HammerForm
      error={props.error}
      form={{ onSubmit: onSubmit, className: '' }}
      validation={{ mode: 'onBlur' }}
    >
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

      <div className="flex justify-end mt-4">
        {props.save && (
          <Submit
            data-action="save"
            disabled={props.loading}
            className={CLASS_NAMES.save}
          >
            Save
          </Submit>
        )}
        <Submit
          data-action="publish"
          disabled={props.loading}
          className={CLASS_NAMES.publish}
        >
          {props.publish || 'Publish'}
        </Submit>
      </div>
    </HammerForm>
  )
}

export default PostForm
