import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function In(props) {

  const { school, title, start, end, ongoing } = props.data;

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

  const handleDelete = e => {
    const index = e.target.closest('li').className;
    props.onDelete(index);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>School:</span>
          <input 
            type='text' 
            name='school' 
            value={school}
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
      </form>
    </div>
  );
}

export default In