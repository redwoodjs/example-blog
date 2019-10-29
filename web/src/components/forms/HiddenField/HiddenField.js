import { useFormContext } from 'react-hook-form'

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

export default HiddenField
