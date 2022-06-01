export default function NavLink(props) {
  
  return (
    <li onClick = { props.handleOnClick }>{ props.title }</li>
  )
}
