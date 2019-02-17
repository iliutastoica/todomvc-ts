import { ActionType } from '../constants/ActionTypes';
import { Action } from 'redux';
import { AddTodoAction, CompleteTodoAction, DeleteTodoAction, EditTodoAction } from '../actions';
import { TodoModel } from '../models/TodoModel';

export type TodosState = TodoModel[];

const initialState: TodosState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];

export default function todos(state: TodosState = initialState, action: Action<ActionType>): TodosState {
  switch (action.type) {
    case ActionType.AddTodo: {
      const { text } = action as AddTodoAction;

      return [
        ...state,
        {
          id: state
            .reduce((maxId: number, todo: TodoModel): number => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text,
        },
      ];
    }

    case ActionType.DeleteTodo: {
      const { id } = action as DeleteTodoAction;

      return state
        .filter((todo: TodoModel): boolean =>
          todo.id !== id,
        );
    }

    case ActionType.EditTodo: {
      const { id, text } = action as EditTodoAction;

      return state
        .map((todo: TodoModel): TodoModel =>
          todo.id === id ?
            { ...todo, text: text } :
            todo,
        );
    }

    case ActionType.CompleteTodo: {
      const { id } = action as CompleteTodoAction;

      return state
        .map((todo): TodoModel =>
          todo.id === id ?
            { ...todo, completed: !todo.completed } :
            todo,
        );
    }

    case ActionType.CompleteAllTodos: {
      const areAllMarked = state
        .every((todo: TodoModel): boolean => todo.completed);

      return state
        .map(todo => ({
          ...todo,
          completed: !areAllMarked,
        }));
    }

    case ActionType.ClearCompleted: {
      return state
        .filter((todo: TodoModel): boolean => todo.completed === false);
    }

    default:
      return state;
  }
}
