import React, { Component } from 'react';
import classnames from 'classnames';
import { TodoModel } from '../models/TodoModel';
import TodoTextInput from './TodoTextInput';

interface TodoItemProps {
  todo: TodoModel;

  deleteTodo(id: number): void,
  editTodo(id: number, text: string): void,
  completeTodo(id: number): void,
}

interface TodoItemState {
  editing: boolean;
}

export default class TodoItem extends Component<TodoItemProps, TodoItemState> {
  state: TodoItemState = {
    editing: false,
  };

  handleDoubleClick = (): void => {
    this.setState({ editing: true });
  };

  handleSave = (id: number, text: string): void => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    let element: React.ReactNode;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text: string) => this.handleSave(todo.id, text)}/>
      );
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)}/>
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)}/>
        </div>
      );
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing,
      })}>
        {element}
      </li>
    );
  }
}
