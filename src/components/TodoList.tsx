import React from 'react';
import { TodoModel } from '../models/TodoModel';
import TodoItem from './TodoItem';

interface TodoListProps {
  filteredTodos: TodoModel[];

  deleteTodo(id: number): void;
  editTodo(id: number, text: string): void;
  completeTodo(id: number): void;
}

const TodoList = ({ filteredTodos, deleteTodo, editTodo, completeTodo }: TodoListProps) => (
  <ul className="todo-list">
    {filteredTodos.map((todo: TodoModel) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          completeTodo={completeTodo}
        />
      ),
    )}
  </ul>
);

export default TodoList;
