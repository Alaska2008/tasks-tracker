
const Task = ({task,onDelete, onToggle}) => {
    
  return (
    <div className={`tasks ${task.reminder ? 'reminder': ''}`} 
        onDoubleClick= {()=>onToggle(task.id)}
    >
      <h3 >
        {task.text}
        <button onClick={()=>onDelete(task.id)} style={{backgroundColor: 'red', color: 'white'}} >Delete </button>  
      </h3>
      <p>{task.day} </p>
      
    </div>
  )
}

export default Task
