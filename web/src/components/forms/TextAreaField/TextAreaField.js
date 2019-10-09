import { useFormContext } from 'react-hook-form'
import InputField from 'src/components/forms/InputField'

const TextField = (props) => {
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

export default TextField
