import useForm, { FormContext, useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import '@gouch/to-title-case'

const ErrorMessage = ({
  error,
  wrapperClassName,
  titleClassName,
  listClassName,
  listItemClassName,
}) => {
  const rootMessage = error?.graphQLErrors[0]?.message
  const errors = error?.graphQLErrors[0]?.extensions?.exception?.messages || {}
  const messages = []
  for (let e in errors) {
    errors[e].forEach((fieldError) => {
      messages.push(`${e} ${fieldError}`)
    })
  }

  return (
    <div className={wrapperClassName}>
      <p className={titleClassName}>{rootMessage}</p>
      <ul className={listClassName}>
        {messages.map((message, index) => (
          <li key={index} className={listItemClassName}>
            {message}
          </li>
        ))}
      </ul>
    </div>
  )
}

const FieldErrorContext = React.createContext()

const HammerForm = (props) => {
  const formMethods = props.formMethods || useForm(props.validation)

  return (
    <form
      {...props.form}
      onSubmit={formMethods.handleSubmit(props.form.onSubmit)}
    >
      {props.error && (
        <ErrorMessage
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mb-4"
          titleClassName="font-semibold"
          listClassName="list-disc list-inside"
          listItemClassName=""
        />
      )}

      <FieldErrorContext.Provider
        value={
          props.error?.graphQLErrors[0]?.extensions?.exception?.messages || {}
        }
      >
        <FormContext {...formMethods}>{props.children}</FormContext>
      </FieldErrorContext.Provider>
    </form>
  )
}

const HiddenField = (props) => {
  const { register } = useFormContext()

  return (
    <input
      {...props.input}
      type="hidden"
      id={props.input.id || props.input.name}
      ref={register()}
    />
  )
}

const DEFAULT_MESSAGES = {
  required: 'is required',
  pattern: 'is not formatted correctly',
  minLength: 'is too short',
  maxLength: 'is too long',
  min: 'is too high',
  max: 'is too low',
  validate: 'is not valid',
}

const InputField = (props) => {
  const { watch, errors, setError, clearError } = useFormContext()
  const fieldErrorsContext = useContext(FieldErrorContext)
  const contextError = fieldErrorsContext[props.input.name]
  if (contextError) {
    setError(props.input.name, 'server', contextError)
  }
  const validationError = errors[props.input.name]
  const errorMessage =
    validationError &&
    (validationError.message ||
      `${props.input.name.toTitleCase()} ${
        DEFAULT_MESSAGES[validationError.type]
      }`)

  return (
    <div className={validationError ? 'form-field-error' : ''}>
      <label {...props.label} htmlFor={props.input.name}>
        {props.labelText || props.input.name.toTitleCase()}
      </label>
      {props.children}
      {validationError && <span {...props.error}>{errorMessage}</span>}
    </div>
  )
}

const TextAreaField = (props) => {
  const { register } = useFormContext()

  return (
    <InputField {...props}>
      <textarea
        {...props.input}
        id={props.input.id || props.input.name}
        ref={register(props.validation)}
      />
    </InputField>
  )
}

const TextField = (props) => {
  const { register } = useFormContext()

  return (
    <InputField {...props}>
      <input
        {...props.input}
        type={props.input.type || 'text'}
        id={props.input.id || props.input.name}
        ref={register(props.validation)}
      />
    </InputField>
  )
}

const Submit = (props) => {
  return (
    <button {...props} type="submit">
      {props.children}
    </button>
  )
}

export {
  HammerForm,
  FieldErrorContext,
  ErrorMessage,
  HiddenField,
  InputField,
  TextAreaField,
  TextField,
  Submit,
}
