import useForm, { FormContext } from 'react-hook-form'
import ErrorMessage from 'src/components/forms/ErrorMessage'

const HammerForm = (props) => {
  const formMethods = useForm(props.validation)

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

      <FormContext {...formMethods}>{props.children}</FormContext>
    </form>
  )
}

export default HammerForm
