const Submit = (props) => {
  return (
    <button {...props} type="submit">
      {props.children}
    </button>
  )
}

export default Submit
