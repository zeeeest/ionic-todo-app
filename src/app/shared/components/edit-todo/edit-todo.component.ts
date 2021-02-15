import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
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
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTodoComponent implements OnInit {
  @Input() todo: Todo;
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

  ngOnInit() {
    this.todoForm.patchValue({
      title: this.todo.title,
      description: this.todo.description,
      date: this.todo.date,
      priority: this.todo.priority,
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.todoForm.invalid) {
      return;
    }
    const updatedTodo = {
      ...this.todo,
      ...this.todoForm.value,
    };

    this.todoService.updateTodo(updatedTodo);
    this.formSubmitted.emit(updatedTodo);
  }
}
