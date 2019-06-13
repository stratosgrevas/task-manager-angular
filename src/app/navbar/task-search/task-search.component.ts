/* Carregar componentes do angular */
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

/* Carregar componentes da aplicação */
import { Task } from '../../tasks/shared/task.model';
import { TaskService } from '../../tasks/shared/task.service';

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
// import "rxjs/add/operator/do";

@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html'
})
export class TaskSearchComponent implements OnInit{

	public searchTerms: Subject<string> = new Subject();
	public tasks: Task[] = [];

  public constructor(private taskService: TaskService, private router: Router){

  }

  public ngOnInit() {
  	this.searchTerms
  		.debounceTime(300) // 300 milesegundos
  		.distinctUntilChanged() // sem parametros = forma padrão
  		// .do(term => console.log(term))
  		.switchMap(
  			term => term ? this.taskService.searchByTitle(term) : Observable.of<Task[]>([])
  		)
  		.subscribe(tasks => this.tasks = tasks)
  }

  public search(term: string){
  	// console.log(term);

  	this.searchTerms.next(term);
  }

  public gotoTask(task: Task){
  	/* LImpar a listagem */
  	this.tasks = [];
  	this.router.navigate(['/tasks', task.id]);
  }

}
