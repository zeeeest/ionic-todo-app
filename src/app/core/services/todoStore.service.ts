import { User } from 'src/app/shared/models/User';
import { Injectable } from '@angular/core';
import { Todo } from '../../shared/models/Todo';
import { AuthService } from './auth.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class TodoStoreService {
  todosCollection: AngularFirestoreCollection<Todo>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    const userId = this.authService.userData.uid;
    this.todosCollection = this.afs
      .doc<User>(`users/${userId}`)
      .collection('todos', ref => ref.orderBy('date'));
  }

  setTodo(todo: Todo) {
    const todoData = {
      id: this.afs.createId(),
      ...todo,
    };
    this.todosCollection.doc(todoData.id).set(todoData);
  }

  updateTodo(todo: Todo) {
    this.todosCollection.doc(todo.id).update(todo);
  }

  removeTodo(todo: Todo) {
    this.todosCollection.doc(todo.id).delete();
  }

  clearState() {
    this.todosCollection = null;
  }
}
