/* Carregar componentes do angular */
import { Component, Input } from '@angular/core';

/* Carregar componentes da aplicação */
import { Task } from '../shared/task.model';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent{
	@Input() public task: Task;

	public constructor(){}
}