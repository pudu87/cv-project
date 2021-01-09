function Out(props) {

  const { name, email, phone } = props.data;

  const handleEdit = () => {
    props.toggle();
  }

  return (
    <div>
      <ul>
        <li>
          <span>Name:</span>
          <span id='name'>{name}</span>
        </li>
        <li>
          <span>Email:</span>
          <span id='email'>{email}</span>
        </li>
        <li>
          <span>Phone:</span>
          <span id='phone'>{phone}</span>
        </li>
      </ul>
      <button onClick={handleEdit}> Edit </button>
    </div>
  );
}

export default Out