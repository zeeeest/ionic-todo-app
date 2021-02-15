import { NgModule } from '@angular/core';
import { CreateButtonComponent } from './create-button/create-button.component';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';
import { TodosListItemComponent } from '../components/todos-list/todos-list-item/todos-list-item.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { HeaderComponent } from './header/header.component';
import { CreateTodoModalComponent } from './create-todo-modal/create-todo-modal.component';
import { EditTodoModalComponent } from './edit-todo-modal/edit-todo-modal.component';

@NgModule({
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  exports: [
    CreateButtonComponent,
    CreateTodoFormComponent,
    CreateTodoModalComponent,
    TodosListItemComponent,
    TodosListComponent,
    EditTodoModalComponent,
    EditTodoComponent,
    HeaderComponent,
  ],
  declarations: [
    CreateButtonComponent,
    CreateTodoFormComponent,
    CreateTodoModalComponent,
    TodosListItemComponent,
    TodosListComponent,
    EditTodoComponent,
    EditTodoModalComponent,
    HeaderComponent,
  ],
  providers: [],
})
export class SharedModule {}
