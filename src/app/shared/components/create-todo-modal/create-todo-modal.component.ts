import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-todo-modal',
  templateUrl: './create-todo-modal.component.html',
  styleUrls: ['./create-todo-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoModalComponent implements OnInit {
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
