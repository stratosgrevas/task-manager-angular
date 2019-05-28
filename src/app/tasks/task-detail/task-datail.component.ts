/* Carregar componentes do angular */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import "rxjs/add/operator/switchMap";

/* Carregar componentes da aplicação */
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
	@Input() public task: Task;

	public constructor(
		private taskService: TaskService,
		private route: ActivatedRoute
	){}

	/**
	 * Exemplo sem o switchMap
	 
			public ngOnInit(){
				this.route.params
					.subscribe((params: Params) => {
						this.taskService.getTask(+params['id'])
							.then((task) => this.task = task)
					})
			}
		*/
	
	public ngOnInit(){
		this.route.params
			.switchMap((params: Params) => this.taskService.getTask(+params['id']))
			.subscribe(task => this.task = task)
	}

}

/**
 * Exemplo para explicar o uso do Observable:
 *
 * Promise<Task>.then
 * Observable<Task>.subscribe
 * 
 */