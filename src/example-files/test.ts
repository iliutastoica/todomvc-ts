let counter: number;
let name: string;

function sum(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}
interface Person {
  id: number
  firstName: string;
  lastName: string;
}

const person: Person = {
  id: 1,
  firstName: 'My awesome name',
  lastName: 'My awesome last name',
};


function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

class Citisen implements Person {
  constructor(public id: number,
              public firstName: string,
              public lastName: string) {
  }

  getSignature(): string {
    return `${this.id} - ${getFullName(this)};`
  };
}

enum ActionType {
  Add = 'Add',
  Remove = 'Remove',
  Update = 'Update',
}

interface PayloadAction<T> {
  type: ActionType;
  payload: T;
}

const addPersonAction: PayloadAction<Person> = {
  type: ActionType.Add,
  payload: person,
};

export default {};