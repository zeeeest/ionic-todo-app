import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTodoModalComponent } from '../create-todo-modal/create-todo-modal.component';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateButtonComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateTodoModalComponent,
    });
    return await modal.present();
  }

  createTodo() {
    this.presentModal();
  }
}
