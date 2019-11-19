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

export default ErrorMessage
