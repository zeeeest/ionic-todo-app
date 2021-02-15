import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoStoreService } from '../../../core/services/todoStore.service';
import { EPriority } from '../../models/Common';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}

  trackByHandler(index, item: Todo) {
    return item.id;
  }
}
