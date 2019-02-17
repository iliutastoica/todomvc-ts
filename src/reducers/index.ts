import { combineReducers, Reducer } from 'redux';
import todos, { TodosState } from './todos';
import visibilityFilter from './visibilityFilter';
import { TodoFilter } from '../constants/TodoFilters';

export interface AppState {
  todos: TodosState;
  visibilityFilter: TodoFilter;
}

const rootReducer: Reducer<AppState> = combineReducers({
  todos,
  visibilityFilter,
});

export default rootReducer;
