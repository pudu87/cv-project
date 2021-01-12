import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Out(props) {

  const { school, title, start, end, ongoing } = props.data;

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

  return (
    <div>
      <ul>
        <li>
          <span>School:</span>
          <span id='school'>{school}</span>
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
  );
}

export default Out