import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input
    });
    setInput('');
  };

  return (
    <div className="container p-5 mx-auto ">
      <form onSubmit={handleSubmit} className='todo-form mx-auto'>
        {props.edit ? (
          <>
            <input
              placeholder='Update your item'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='form-control'
            />
            <button onClick={handleSubmit} className='btn btn-info'>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              className='form-control '
              ref={inputRef}
            />
            <button onClick={handleSubmit} className='btn mt-2 btn-info'>
              Add todo
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
