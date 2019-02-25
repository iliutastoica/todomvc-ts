import { combineReducers, Reducer } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { TodoFilter } from '../constants/TodoFilters';
import { TodoModel } from "../models/TodoModel";

export interface AppState {
  todos: TodoModel[];
  visibilityFilter: TodoFilter;
}

const rootReducer: Reducer<AppState> = combineReducers({
  todos,
  visibilityFilter,
});

export default rootReducer;
