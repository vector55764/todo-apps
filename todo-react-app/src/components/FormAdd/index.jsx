import React from 'react';

import styles from './FormAdd.module.scss';

const FormAdd = ({ addTask }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button className={`${styles.btn} ${styles.form__btn}`}>Add</button>
      </form>
    </>
  );
};

export default FormAdd;
