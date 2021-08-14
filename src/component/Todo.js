import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className="row m-5"
      key={index}
    >
      <div className="col-lg-10">
        <div key={todo.id} className=" p-2 bg-info" onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
      </div>

      <div className="col-lg-2 p-0">
        <button type="button" className="btn btn-outline-danger" onClick={() => removeTodo(todo.id)}><i className="fas fa-times"></i></button>
        <button type="button" className="btn ml-2 btn-outline-info" onClick={() => setEdit({ id: todo.id, value: todo.text })}><i className="fas fa-edit"></i></button>
      </div>

    </div>
  ));
};

export default Todo;