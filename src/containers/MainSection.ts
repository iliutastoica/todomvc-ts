import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import MainSection from '../components/MainSection';
import { getCompletedTodoCount } from '../selectors';
import { AppState } from '../reducers';
import { clearCompleted, completeAllTodos } from '../actions';

interface MainSectionStateProps {
  todosCount: number;
  completedCount: number;
}

interface MainSectionActionProps {
  completeAllTodos(): void;
  clearCompleted(): void;
}

const mapStateToProps = (state: AppState): MainSectionStateProps => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
});


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  completeAllTodos,
  clearCompleted,
}, dispatch);


export default connect<MainSectionStateProps, MainSectionActionProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(MainSection);

