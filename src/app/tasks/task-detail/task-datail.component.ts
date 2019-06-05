/* Carregar componentes do angular */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import "rxjs/add/operator/switchMap";

/* Carregar componentes da aplicação */
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
	public task: Task;

	public constructor(
		private taskService: TaskService,
		private route: ActivatedRoute,
		private location: Location
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
			.subscribe(
				task => this.task = task,
				error => alert("Ocorreu um erro no servidor, tente mais tarde !")
			)
	}

	public goBack(){
		this.location.back();
	}

}

/**
 * Exemplo para explicar o uso do Observable:
 *
 * Promise<Task>.then
 * Observable<Task>.subscribe
 * 
 */