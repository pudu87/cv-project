import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function In(props) {

  const { company, title, start, end, ongoing, tasks } = props.data;

  const handleSubmit = e => {
    e.preventDefault();
    const index = e.target.closest('li').className;
    props.toggle(index);
  }

  const handleTextChange = e => {
    const index = e.target.closest('li').className;
    props.onTextChange(e.target, index);
  }

  const handleCheckChange = e => {
    const index = e.target.closest('li').className;
    props.onCheckChange(e.target, index);
  }

  const handleTaskChange = e => {
    const index = e.target.closest('li').className;
    props.onTaskChange(e.target, index);
  }

  const handleDelete = e => {
    const index = e.target.closest('li').className;
    props.onDelete(index);
  }

  const taskItems = tasks.map((task,index) => {
    return (<input 
      key={index} 
      type='text' 
      name={`task-${index}`}  
      value={task} 
      onChange={handleTaskChange} />
    )
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className='other-data'>
        <label>
          <span>Company:</span>
          <input 
            type='text' 
            name='company' 
            value={company}
            onChange={handleTextChange}/>
        </label>
        <label>
          <span>Title:</span>
          <input 
            type='text' 
            name='title' 
            value={title}
            onChange={handleTextChange}/>
        </label>
        <div className='dates'>
          <div className='start-end'>
            <label>
              <span>Start:</span>
              <input 
                type='text' 
                name='start' 
                value={start}
                onChange={handleTextChange}/>
            </label>
            <label>
              <span>End:</span>
              <input 
                type='text' 
                name='end' 
                value={end}
                onChange={handleTextChange}/>
            </label>
          </div>
          <label className='ongoing'>
            <span>Ongoing?</span>
            <input
              type='checkbox' 
              name='ongoing' 
              checked={ongoing}
              onChange={handleCheckChange}/>
          </label>
        </div>
        <div className='options'>
          <input 
            type='submit' 
            value='Confirm'/>
          <FontAwesomeIcon 
            icon='trash-alt' 
            onClick={handleDelete} />
        </div>
      </div>
      <div className='task-data'>
        <p>
          <span>Tasks:</span>
        </p>
        {taskItems}          
      </div>
    </form>
  );
}

export default In