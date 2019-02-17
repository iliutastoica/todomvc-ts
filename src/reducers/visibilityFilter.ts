import { ActionType } from '../constants/ActionTypes';
import { TodoFilter } from '../constants/TodoFilters';
import { Action } from 'redux';
import { SetVisibilityFilterAction } from '../actions';

const visibilityFilter = (
  state: TodoFilter = TodoFilter.ShowAll,
  action: Action<ActionType>,
): TodoFilter => {
  switch (action.type) {
    case ActionType.SetVisibilityFilter: {
      const { filter } = action as SetVisibilityFilterAction;
      return filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
