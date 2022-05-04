import { BrandButton, BrandDivButton } from "./MyButtonStyles"

function MyButton(props) {
  return (
    props.container
    ? <BrandDivButton
        {...props}
        type={props.type}
        theme={props.theme}
      >
        {props.children}
      </BrandDivButton>
    : <BrandButton
        {...props}
        type={props.type}
        theme={props.theme}
      >
        {props.children}
      </BrandButton>
  )
}

export default MyButton
