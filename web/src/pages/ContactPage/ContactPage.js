import BlogLayout from 'src/layouts/BlogLayout'
import {
  HammerForm,
  TextField,
  TextAreaField,
  Submit,
} from 'src/lib/HammerForm'

const CSS = {
  label:
    'block mt-6 uppercase text-sm font-semibold tracking-wider text-gray-500',
  input:
    'block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300',
  error: 'block mt-1 font-semibold uppercase text-xs text-red-600',
  submit:
    'px-6 py-2 bg-indigo-700 text-white text-sm rounded uppercase font-bold tracking-wider',
}
const EMAIL_REGEX = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

const ContactPage = () => {
  const onSubmit = (data) => {
    console.info(arguments)
    console.info(data)
    return true
  }

  return (
    <BlogLayout>
      <main className="text-left py-6 font-light">
        <p className="text-lg">
          Do you have a hammer you want us to review? Suggestions for improving
          our reviews? Send us a message!
        </p>

        <HammerForm
          form={{
            onSubmit: onSubmit,
            className: 'mt-8 max-w-lg mx-auto',
            netlify: 'true',
          }}
        >
          <TextField
            input={{
              name: 'name',
              className: CSS.input,
            }}
            label={{ className: CSS.label }}
            error={{ className: CSS.error }}
            validation={{ required: true }}
          />

          <TextField
            input={{
              name: 'email',
              className: CSS.input,
            }}
            label={{ className: CSS.label }}
            error={{ className: CSS.error }}
            validation={{
              required: true,
              pattern: {
                value: EMAIL_REGEX,
                message: 'Enter a valid email address',
              },
            }}
          />

          <TextAreaField
            input={{
              name: 'body',
              className: `${CSS.input} h-64`,
            }}
            label={{ className: CSS.label }}
            error={{ className: CSS.error }}
            validation={{
              required: true,
            }}
          />
          <div className="mt-4 text-right">
            <Submit className={CSS.submit}>Submit</Submit>
          </div>
        </HammerForm>
      </main>
    </BlogLayout>
  )
}

export default ContactPage
