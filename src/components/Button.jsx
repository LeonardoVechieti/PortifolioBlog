const Button = (props) => {
  return (
    <button className={props.style} onClick={props.onChange} >{props.name}</button>
  )
}

export default Button