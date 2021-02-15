import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../../core/services/todoStore.service';
import { Observable } from 'rxjs';
import { Todo } from '../../shared/models/Todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(public todoService: TodoStoreService) {
    this.todos$ = this.todoService.todosCollection?.valueChanges();
  }

  ngOnInit() {}
}
