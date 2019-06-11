/* Carregar componentes do angular */
import { Component } from '@angular/core';

/* Carregar componentes da aplicação */
import { Task } from '../../tasks/shared/task.model';
import { TaskService } from '../../tasks/shared/task.service';

@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html'
})
export class TaskSearchComponent {

  public constructor(private taskService: TaskService){

  }

}
