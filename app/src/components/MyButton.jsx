import "./MyButton.css"

function MyButton(props) {
  return (
    <button
      type={props.type ? props.type : null}
      className={`MyButton ${props.theme || ""}`}
    >
      {props.children}
    </button>
  )
}

export default MyButton
