import { Record, Map } from "immutable";
import { TodoModel } from "./TodoModel";

const initTodo: TodoModel = {
  id: 0,
  text: '',
  completed: false,
};

export class TodoRecord extends Record(initTodo) {
  constructor(todo: TodoModel) {
    super(todo);
  }
}

// const todo: TodoRecord = new TodoRecord({
//   id: 1,
//   text: 'A todo record',
//   completed: false,
// });
//
// todo.remove('completed');
// todo.get('id').toString(); // OK
// todo.get('id').toLowerCase(); // Will not compile
// todo.set('id', 3); // OK
// todo.set('id', '3'); // Will not compile
// todo.get('someRandomValue'); // Will not compile
// todo.get('text').toLowerCase(); // OK
// todo.text.toLowerCase(); // Still ok, because record can also expose the model itself
//
//
