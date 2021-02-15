import { Todo } from './Todo';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  todos?: Todo[];
}
