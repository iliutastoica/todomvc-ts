import React from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

// declare const VisibleTodoList: React.ComponentType<{}>;

interface MainSectionProps {
  todosCount: number;
  completedCount: number,

  completeAllTodos(): void;

  clearCompleted(): void;
}

const MainSection = ({ todosCount, completedCount, clearCompleted, completeAllTodos }: MainSectionProps) => (
  <section className="main">
    {
      !!todosCount &&
      <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={completeAllTodos}/>
        </span>
    }
    <VisibleTodoList/>
    {
      !!todosCount &&
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={clearCompleted}
      />
    }
  </section>
);

export default MainSection;
