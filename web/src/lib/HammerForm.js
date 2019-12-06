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

const Label = (props) => {
  const { errors } = useFormContext()
  const validationError = errors[props.name]
  const { className, errorClassName, ...tagProps } = props
  tagProps.className = validationError
    ? props.errorClassName || props.className
    : props.className

  return (
    <label htmlFor={props.name} {...tagProps}>
      {props.text || props.name.toTitleCase()}
    </label>
  )
}

const FieldError = (props) => {
  const { errors } = useFormContext()
  const validationError = errors[props.name]
  const errorMessage =
    validationError &&
    (validationError.message ||
      `${props.name.toTitleCase()} ${DEFAULT_MESSAGES[validationError.type]}`)

  return validationError ? <span {...props}>{errorMessage}</span> : null
}

const HiddenField = (props) => {
  const { register } = useFormContext()

  return (
    <input
      {...props}
      type="hidden"
      id={props.id || props.name}
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
  const { errors, setError } = useFormContext()
  const fieldErrorsContext = useContext(FieldErrorContext)
  const contextError = fieldErrorsContext[props.name]
  if (contextError) {
    setError(props.name, 'server', contextError)
  }
  const validationError = errors[props.name]
  const errorMessage =
    validationError &&
    (validationError.message ||
      `${props.name.toTitleCase()} ${DEFAULT_MESSAGES[validationError.type]}`)

  return (
    <div className={validationError ? 'form-field-error' : ''}>
      {props.children}
    </div>
  )
}

const TextAreaField = (props) => {
  const { register } = useFormContext()

  return (
    <InputField {...props}>
      <textarea
        {...props}
        id={props.id || props.name}
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
        {...props}
        type={props.type || 'text'}
        id={props.id || props.name}
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
  FieldError,
  Label,
  HiddenField,
  InputField,
  TextAreaField,
  TextField,
  Submit,
}
