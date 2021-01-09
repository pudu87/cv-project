function In(props) {

  const { name, email, phone } = props.data;

  const handleSubmit = e => {
    e.preventDefault();
    props.toggle();
  }

  const handleInputChange = e => {
    props.onInputChange(e.target);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input 
            type='text' 
            name='name' 
            value={name}
            onChange={handleInputChange}/>
        </label>
        <label>
          <span>Email:</span>
          <input 
            type='email' 
            name='email' 
            value={email}
            onChange={handleInputChange}/>
        </label>
        <label>
          <span>Phone:</span>
          <input 
            type='tel' 
            name='tel' 
            value={phone}
            onChange={handleInputChange}/>
        </label>
        <input 
          type='submit' 
          value='Confirm'/>
      </form>
    </div>
  );
}

export default In