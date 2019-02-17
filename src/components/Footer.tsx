import React from 'react';
import FilterLink from '../containers/FilterLink';
import { TodoFilter } from '../constants/TodoFilters';

const FILTER_TITLES = {
  [TodoFilter.ShowAll]: 'All',
  [TodoFilter.ShowActive]: 'Active',
  [TodoFilter.ShowCompleted]: 'Completed',
};

interface AppProps {
  completedCount: number;
  activeCount: number;

  onClearCompleted(): void;
}

const Footer = (props: AppProps) => {
  const { activeCount, completedCount, onClearCompleted } = props;
  const itemWord = activeCount === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES)
          .map((filter: string): React.ReactNode =>
            <li key={filter}>
              <FilterLink filter={filter as TodoFilter}>
                {FILTER_TITLES[filter as TodoFilter]}
              </FilterLink>
            </li>,
          )}
      </ul>
      {
        !!completedCount &&
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >Clear completed</button>

      }
    </footer>
  );
};

export default Footer;
