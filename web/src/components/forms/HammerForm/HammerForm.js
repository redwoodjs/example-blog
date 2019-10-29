import useForm, { FormContext } from 'react-hook-form'
import ErrorMessage from 'src/components/forms/ErrorMessage'

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

export default HammerForm
export { FieldErrorContext }
