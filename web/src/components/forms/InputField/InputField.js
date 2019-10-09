import '@gouch/to-title-case'
import { useFormContext } from 'react-hook-form'

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
  const { errors } = useFormContext()
  const error = errors[props.input.name]
  const errorMessage =
    error &&
    `${props.input.name.toTitleCase()} ${error.message ||
      DEFAULT_MESSAGES[error.type]}`

  return (
    <div className={error ? 'form-field-error' : ''}>
      <label {...props.label} htmlFor={props.input.name}>
        {props.labelText || props.input.name.toTitleCase()}
      </label>
      {props.children}
      {error && <span {...props.error}>{errorMessage}</span>}
    </div>
  )
}

export default InputField
