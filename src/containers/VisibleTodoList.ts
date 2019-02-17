import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../selectors';
import { AppState } from '../reducers';
import { ComponentClass } from 'react';
import { TodoModel } from '../models/TodoModel';
import { deleteTodo } from '../actions';
import { editTodo } from '../actions';
import { completeTodo } from '../actions';

interface VisibleTodoListStateProps {
  filteredTodos: TodoModel[];
}

interface VisibleTodoListActionProps {
  deleteTodo(id: number): void;
  editTodo(id: number, text: string): void;
  completeTodo(id: number): void;
}

const mapStateToProps = (state: AppState): VisibleTodoListStateProps => ({
  filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  deleteTodo,
  editTodo,
  completeTodo,
}, dispatch);


const VisibleTodoList: ComponentClass<{}> = connect<VisibleTodoListStateProps,
  VisibleTodoListActionProps,
  {},
  AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
