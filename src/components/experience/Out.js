import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Out(props) {

  const { company, title, start, end, ongoing, tasks } = props.data;

  const handleEdit = e => {
    const index = e.target.closest('li').className;
    props.toggle(index);
  }
  
  const handleDelete = e => {
    const index = e.target.closest('li').className;
    props.onDelete(index);
  }

  let endContent;
  if (!ongoing) {
    endContent = (
      <li>
        <span>End:</span>
        <span id='end'>{end}</span>
      </li>
    )
  } else {
    endContent = (
      <li>
        <span>End:</span>
        <span id='end'>...</span>
      </li>
    )
  }

  const taskItems = tasks.map((task,index) => {
    if (task !== '') {
      return <li key={index}> {task} </li>
    }
  });

  return (
    <div>
      <div className='other-data'>
        <ul>
          <li>
            <span>Company:</span>
            <span id='company'>{company}</span>
          </li>
          <li>
            <span>Title:</span>
            <span id='title'>{title}</span>
          </li>
          <li>
            <span>Start:</span>
            <span id='start'>{start}</span>
          </li>
          {endContent}
        </ul>
        <div className='options'>
          <button onClick={handleEdit}> Edit </button>
          <FontAwesomeIcon 
            icon='trash-alt' 
            onClick={handleDelete}/>
        </div>
      </div>
      <div className='task-data'>
        <p>
          <span>Tasks:</span>
        </p>
        <ul>{taskItems}</ul>
      </div>
    </div>
  );
}

export default Out
