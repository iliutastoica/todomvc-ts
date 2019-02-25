let counter: number;
let name: string;

export function sum(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

export interface Person {
  id: number
  firstName: string;
  lastName: string;
}

export const person: Person = {
  id: 1,
  firstName: 'My awesome name',
  lastName: 'My awesome last name',
};


export function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

export class Citisen implements Person {
  public signature: string;

  constructor(public id: number,
              public firstName: string,
              public lastName: string) {
    this.signature = `${this.id} - ${getFullName(this)};`;
  }
}

export enum ActionType {
  Add = 'Add',
  Remove = 'Remove',
  Update = 'Update',
}

export interface PayloadAction<T> {
  type: ActionType;
  payload: T;
}

export const addPersonAction: PayloadAction<Person> = {
  type: ActionType.Add,
  payload: person,
};
