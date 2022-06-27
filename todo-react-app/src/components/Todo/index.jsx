import React from 'react';

import styles from './Todo.module.scss';

const Todo = ({ todo, handleToggle, removeTask, changeTagTodo }) => {
  const [open, setOpen] = React.useState(false);

  const list = ['important', 'not very important', 'not important'];

  return (
    <div key={todo.id} className={styles.todo}>
      <div className={styles.todo__head}>
        <div
          className={
            todo.isCompleted
              ? `${styles.todo__content} ${styles.todo__done}`
              : `${styles.todo__content}`
          }>
          <h2 onClick={() => handleToggle(todo.id)} className={styles.todo__title}>
            {todo.title}
          </h2>
          <span onClick={() => setOpen(!open)} className={styles.todo__tag}>
            {todo.tag}
          </span>
          {open && (
            <div className={styles.todo__popup}>
              <ul>
                {list.map((value, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      changeTagTodo(todo.id, value);
                      setOpen(false);
                    }}
                    className={todo.tag === value ? styles.todo__active : ''}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.todo__btns}>
          <button
            onClick={() => removeTask(todo.id)}
            className={`${styles.btn} ${styles.todo__btn_remove}`}>
            Remove
          </button>
          <button className={`${styles.btn} ${styles.todo__btn_edit}`}>Edit</button>
        </div>
      </div>

      {todo.isCompleted ? '' : <p className={styles.todo__description}>{todo.description}</p>}
    </div>
  );
};

export default Todo;
