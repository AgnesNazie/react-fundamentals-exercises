import React, { useState } from "react";

// ✅ TodoList Component
const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return; // ignore empty
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    setTask(""); // clear input
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const openCount = tasks.filter((t) => !t.done).length;
  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">Todo List</h3>

      {/* Input */}
      <div className="flex space-x-2 mb-3">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 px-3 py-2 border rounded-md"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-1">
        {tasks.map((t) => (
          <li key={t.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTask(t.id)}
            />
            <span className={t.done ? "line-through text-gray-500" : ""}>
              {t.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Counts */}
      <p className="mt-3 text-sm text-gray-600">
        {openCount} open, {doneCount} done
      </p>
    </div>
  );
};

export default TodoList;

