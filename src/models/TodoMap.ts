import { Map } from "immutable";
import { TodoModel } from "./TodoModel";

export interface TodoMap extends Map<string, any> {
  toJS(): TodoModel;
  get<K extends keyof TodoModel>(key: K, notSetValue?: TodoModel[K]): TodoModel[K];
  set<K extends keyof TodoModel>(key: K, value: TodoModel[K]): this;
}

export const createTodoMap = (data: TodoModel): TodoMap => Map(data) as TodoMap;

// const todo: TodoMap = createTodoMap({
//   id: 1,
//   text: 'A todo record',
//   completed: false,
// });
//
// todo.get('id').toString(); // OK
// todo.get('id').toLowerCase(); // Will not compile
// todo.set('id', 3); // OK
// todo.set('id', '3'); // Will not compile
// todo.get('someRandomValue'); // Will not compile
// todo.get('text').toLowerCase(); // OK
// todo.text.toLowerCase(); // Does not work with this implementation
// todo.remove('text'); // This can cause issues, as it will remove a mandatory value
//
//
