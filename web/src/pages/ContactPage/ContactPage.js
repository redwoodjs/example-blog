import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  Label,
  FieldError,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const CSS = {
  label:
    'block mt-6 uppercase text-sm font-semibold tracking-wider text-gray-500',
  labelError:
    'block mt-6 uppercase text-sm font-semibold tracking-wider text-red-700',
  input:
    'block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300',
  inputError:
    'block mt-2 w-full p-2 border border-red-500 text-lg text-red-500 rounded focus:outline-none focus:border-red-700',
  error: 'block mt-1 font-semibold uppercase text-xs text-red-700',
  submit:
    'px-6 py-2 bg-indigo-700 text-white text-sm rounded uppercase font-bold tracking-wider',
}
const EMAIL_REGEX = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

const ContactPage = () => {
  const onSubmit = (data) => {
    console.info(data)
    return true
  }

  return (
    <main className="text-left py-6 font-light">
      <MetaTags title="Contact" />

      <p className="text-lg">
        Do you have a hammer you want us to review? Suggestions for improving
        our reviews? Send us a message!
      </p>

      <Form
        onSubmit={onSubmit}
        className="mt-8 max-w-lg mx-auto"
        netlify="true"
      >
        <Label
          name="name"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Name
        </Label>
        <TextField
          name="name"
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="name" className={CSS.error} />

        <Label
          name="email"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Email
        </Label>
        <TextField
          name="email"
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{
            required: true,
            pattern: {
              value: EMAIL_REGEX,
              message: 'Enter a valid email address',
            },
          }}
        />
        <FieldError name="email" className={CSS.error} />

        <Label
          name="body"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Message
        </Label>
        <TextAreaField
          name="body"
          className={CSS.input + ' h-48'}
          errorClassName={CSS.inputError + ' h-48'}
          validation={{ required: true }}
        />
        <FieldError name="body" className={CSS.error} />

        <div className="mt-4 text-right">
          <Submit className={CSS.submit}>Submit</Submit>
        </div>
      </Form>
    </main>
  )
}

export default ContactPage
