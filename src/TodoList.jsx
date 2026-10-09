import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add Todo
  function addTodo(e) {
    e.preventDefault();

    // Ignore empty tasks
    if (input.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  // Toggle Todo
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  // Delete Todo
  function deleteTodo(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <div>
      <h2>Daily Stock Check</h2>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter stock task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => toggleTodo(todo.id)}>
              Toggle
            </button>

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;