import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-edit-todo-modal',
  templateUrl: './edit-todo-modal.component.html',
  styleUrls: ['./edit-todo-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTodoModalComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  formSubmitted() {
    this.dismissModal();
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
