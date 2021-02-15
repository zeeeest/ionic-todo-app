import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { priorities } from '../../constants/constants';
import { capitalzie } from '../../helpers/capitalzieFirstLetter';
import { Priority } from '../../models/Common';
import { Todo } from '../../models/Todo';
import { TodoStoreService } from '../../../core/services/todoStore.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<Todo> = new EventEmitter<Todo>();
  private _priorities: Priority[] = priorities;

  public submitted = false;
  public todoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    date: new FormControl(new Date().toISOString()),
    priority: new FormControl('Low'),
  });

  get priorities() {
    return this._priorities.map(item => capitalzie(item));
  }

  get formControls() {
    return this.todoForm.controls;
  }
  constructor(private todoService: TodoStoreService) {}

  ngOnInit() {}

  submitForm() {
    this.submitted = true;
    if (this.todoForm.invalid) {
      return;
    }
    this.todoService.setTodo(this.todoForm.value);
    this.formSubmitted.emit(this.todoForm.value);
  }
}
