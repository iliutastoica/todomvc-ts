import { connect } from 'react-redux';
import Header from '../components/Header';
import { addTodo } from '../actions';
import { ComponentClass } from 'react';

interface HeaderActionProps {
  addTodo(text: string): void;
}

const HeaderContainer: ComponentClass<{}> = connect<null, HeaderActionProps>(
  null,
  { addTodo },
)(Header);

export default HeaderContainer;
