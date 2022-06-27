import Todo from './components/Todo';
import FormAdd from './components/FormAdd';
import React from 'react';

import './style.scss';

const todosArr = [
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Title1',
    description:
      'description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nobis facere deserunt ipsa quaerat consequatur praesentium quidem. Cumque iste, veritatis ipsam asperiores adipisci ea sint, reiciendis, reprehenderit ad hic nemo!',
    tag: 'important',
    isCompleted: false,
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Title2',
    description:
      'description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nobis facere deserunt ipsa quaerat consequatur praesentium quidem. Cumque iste, veritatis ipsam asperiores adipisci ea sint, reiciendis, reprehenderit ad hic nemo!',
    tag: 'important',
    isCompleted: false,
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Title3',
    description:
      'description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nobis facere deserunt ipsa quaerat consequatur praesentium quidem. Cumque iste, veritatis ipsam asperiores adipisci ea sint, reiciendis, reprehenderit ad hic nemo!',
    tag: 'important',
    isCompleted: false,
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Title4',
    description:
      'description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nobis facere deserunt ipsa quaerat consequatur praesentium quidem. Cumque iste, veritatis ipsam asperiores adipisci ea sint, reiciendis, reprehenderit ad hic nemo!',
    tag: 'important',
    isCompleted: false,
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Title5',
    description:
      'description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nobis facere deserunt ipsa quaerat consequatur praesentium quidem. Cumque iste, veritatis ipsam asperiores adipisci ea sint, reiciendis, reprehenderit ad hic nemo!',
    tag: 'important',
    isCompleted: false,
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Title6',
    description:
      'description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nobis facere deserunt ipsa quaerat consequatur praesentium quidem. Cumque iste, veritatis ipsam asperiores adipisci ea sint, reiciendis, reprehenderit ad hic nemo!',
    tag: 'important',
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = React.useState(todosArr);

  const addTask = (title, description) => {
    if (title && description) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        title: title,
        description: description,
        tag: 'important',
        isCompleted: false,
      };
      setTodos([...todos, newItem]);
    }
    console.log(todos);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo },
      ),
    ]);
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const changeTagTodo = (id, value) => {
    setTodos([...todos.map((todo) => (todo.id === id ? { ...todo, tag: value } : { ...todo }))]);
  };

  return (
    <div>
      <h1>Todo React App</h1>
      <FormAdd addTask={addTask} />
      <div className="todos">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            handleToggle={handleToggle}
            removeTask={removeTask}
            changeTagTodo={changeTagTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
