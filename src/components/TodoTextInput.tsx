import React, { ChangeEvent, Component, FocusEvent, KeyboardEvent } from 'react';
import classnames from 'classnames';

interface TodoTextInputProps {
  onSave(text: string): void;

  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

export default class TodoTextInput extends Component<TodoTextInputProps> {
  state = {
    text: this.props.text || '',
  };

  handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      this.props.onSave(this.state.text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  };

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo,
        })}
             type="text"
             placeholder={this.props.placeholder}
             autoFocus={true}
             value={this.state.text}
             onBlur={this.handleBlur}
             onChange={this.handleChange}
             onKeyDown={this.handleSubmit}/>
    );
  }
}
