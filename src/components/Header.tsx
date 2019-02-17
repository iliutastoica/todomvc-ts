import React from 'react';
import TodoTextInput from './TodoTextInput';

interface HeaderProps {
  addTodo(text: string): void;
}

const Header = ({ addTodo }: HeaderProps) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text: string): void => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

export default Header;
