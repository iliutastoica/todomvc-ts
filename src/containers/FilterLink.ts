import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';
import { AppState } from '../reducers';
import { TodoFilter } from '../constants/TodoFilters';
import { ComponentClass } from 'react';
import { Dispatch } from 'redux';

interface FilterLinkPublicProps {
  filter: TodoFilter;
  children: React.ReactNode;
}

interface FilterLinkStateProps {
  active: boolean;
}

interface FilterLinkActionProps {
  setFilter(): void;
}

const mapStateToProps = (state: AppState, ownProps: FilterLinkPublicProps): FilterLinkStateProps => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: FilterLinkPublicProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink: ComponentClass<FilterLinkPublicProps> = connect<FilterLinkStateProps,
  FilterLinkActionProps,
  FilterLinkPublicProps,
  AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;
