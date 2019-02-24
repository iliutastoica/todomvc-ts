import { ActionType } from '../constants/ActionType';
import { Action } from 'redux';
import { TodoFilter } from '../constants/TodoFilters';

export interface AddTodoAction extends Action<ActionType.AddTodo> {
  text: string;
}

export interface EditTodoAction extends Action<ActionType.EditTodo> {
  id: number;
  text: string;
}

export interface DeleteTodoAction extends Action<ActionType.DeleteTodo> {
  id: number;
}

export interface CompleteTodoAction extends Action<ActionType.CompleteTodo> {
  id: number;
}

export type CompleteAllTodosAction = Action<ActionType.CompleteAllTodos>;

export type ClearCompletedAction = Action<ActionType.ClearCompleted>;

export interface SetVisibilityFilterAction extends Action<ActionType.SetVisibilityFilter> {
  filter: TodoFilter
}

export const addTodo = (text: string): AddTodoAction => ({ type: ActionType.AddTodo, text });
export const deleteTodo = (id: number): DeleteTodoAction => ({ type: ActionType.DeleteTodo, id });
export const editTodo = (id: number, text: string): EditTodoAction => ({ type: ActionType.EditTodo, id, text });
export const completeTodo = (id: number): CompleteTodoAction => ({ type: ActionType.CompleteTodo, id });
export const completeAllTodos = (): CompleteAllTodosAction => ({ type: ActionType.CompleteAllTodos });
export const clearCompleted = (): ClearCompletedAction => ({ type: ActionType.ClearCompleted });
export const setVisibilityFilter = (filter: TodoFilter): SetVisibilityFilterAction => ({
  type: ActionType.SetVisibilityFilter,
  filter,
});
