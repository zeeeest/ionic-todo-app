import { Priority } from './Common';

export interface Todo {
  title: string;
  description: string;
  date: string;
  priority: Priority;
  id: string;
}
