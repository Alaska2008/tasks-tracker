import Button from "./Button";


const Header = ({title, show, onAdd}) => {
  return (
    <div className="header">
      <h1 style={{color: 'blue'}} >
        {title} 
      </h1>
      <Button color={show ? 'red': 'green'} text={show ? 'Close':'Add'}  onClick={onAdd} />
      
    </div>
  )
}

export default Header
