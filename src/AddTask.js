import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit =(e)=>{
        e.preventDefault();
        if(!text){
          alert('Please Enter a text!')
          return
        }
        onAdd({text, day, reminder});
        setText(' ');
        setDay(' ')
        setReminder(false);
    }

  return (
    <form className="add-task" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Add Task</label>
        <input type="text" placeholder="Add Task ..." 
            onChange={(e)=> setText(e.target.value)}
            value={text} 
        />
      </div>
      <div className="form-control ">
        <label>Add Day & Time</label>
        <input type="text" placeholder="Add Day & Time ..." 
             onChange={(e)=> setDay(e.target.value)}
             value={day} 
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" 
            onChange={(e)=> setReminder(e.currentTarget.checked)}
            value={reminder} 
            checked={reminder} 
        />
      </div>
      <input className="btn btn-block" type='submit' value='Save Task'/>
    </form>
  )
}

export default AddTask
