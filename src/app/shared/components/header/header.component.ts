import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { TodoStoreService } from '../../../core/services/todoStore.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private todosService: TodoStoreService,
  ) {}

  ngOnInit() {}

  signOut() {
    this.authService.signOut();
    this.todosService.clearState();
  }
}
