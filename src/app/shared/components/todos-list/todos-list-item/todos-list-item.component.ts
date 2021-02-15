import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Todo } from '../../../models/Todo';
import { TodoStoreService } from '../../../../core/services/todoStore.service';
import { ModalController } from '@ionic/angular';
import { EditTodoModalComponent } from '../../edit-todo-modal/edit-todo-modal.component';

@Component({
  selector: 'app-todos-list-item',
  templateUrl: './todos-list-item.component.html',
  styleUrls: ['./todos-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private todoService: TodoStoreService,
    private modalController: ModalController,
  ) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: EditTodoModalComponent,
      componentProps: {
        todo: this.todo,
      },
    });
    return await modal.present();
  }

  removeTodo() {
    this.todoService.removeTodo(this.todo);
  }

  editTodo() {
    this.presentModal();
  }
}
