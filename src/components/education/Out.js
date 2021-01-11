function Out(props) {

  const { school, title, start, end, ongoing } = props.data;

  const handleEdit = () => {
    props.toggle();
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
      <button onClick={handleEdit}> Edit </button>
    </div>
  );
}

export default Out