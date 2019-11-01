import '@gouch/to-title-case'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { FieldErrorContext } from 'src/components/forms/HammerForm'

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

export default InputField
