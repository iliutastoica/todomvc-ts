import { createSelector } from 'reselect';
import { TodoFilter } from '../constants/TodoFilters';
import { AppState } from '../reducers';
import { TodoModel } from '../models/TodoModel';

const getVisibilityFilter = (state: AppState): TodoFilter => state.visibilityFilter;
const getTodos = (state: AppState): TodoModel[] => state.todos;

export const getVisibleTodos: (state: AppState) => TodoModel[] = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos): TodoModel[] => {
    switch (visibilityFilter) {
      case TodoFilter.ShowAll:
        return todos;
      case TodoFilter.ShowCompleted:
        return todos.filter(t => t.completed);
      case TodoFilter.ShowActive:
        return todos.filter(t => !t.completed);
      default:
        throw new Error('Unknown filter: ' + visibilityFilter);
    }
  },
);

export const getCompletedTodoCount: (state: AppState) => number = createSelector(
  [getTodos],
  (todos: TodoModel[]): number => (
    todos
      .reduce<number>(
        (count: number, todo: TodoModel) => todo.completed ? count + 1 : count,
        0,
      )
  ),
);
