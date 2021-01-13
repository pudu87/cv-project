function Out(props) {

  const { name, email, phone } = props.data;

  const handleEdit = () => {
    props.toggle();
  }

  return (
    <div>
      <ul>
        <li className='item'>
          <span className='descr'>Name:</span>
          <span id='name'>{name}</span>
        </li>
        <li className='item'>
          <span className='descr'>Email:</span>
          <span id='email'>{email}</span>
        </li>
        <li className='item'>
          <span className='descr'>Phone:</span>
          <span id='phone'>{phone}</span>
        </li>
      </ul>
      <button onClick={handleEdit}> Edit </button>
    </div>
  );
}

export default Out