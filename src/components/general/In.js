function In(props) {

  const { name, email, phone } = props.data;

  const handleSubmit = e => {
    e.preventDefault();
    props.toggle();
  }

  const handleTextChange = e => {
    props.onTextChange(e.target);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='item'>
          <span className='descr'>Name:</span>
          <input 
            type='text' 
            name='name' 
            value={name}
            onChange={handleTextChange}/>
        </label>
        <label className='item'>
          <span className='descr'>Email:</span>
          <input 
            type='email' 
            name='email' 
            value={email}
            onChange={handleTextChange}/>
        </label>
        <label className='item'>
          <span className='descr'>Phone:</span>
          <input 
            type='tel' 
            name='phone' 
            value={phone}
            onChange={handleTextChange}/>
        </label>
        <input 
          type='submit' 
          value='Confirm'/>
      </form>
    </div>
  );
}

export default In