/* angular imports */
import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";

/* rxjs */
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

/* components imports */
import { Task } from './task.model';

const TASKS: Array<Task> = [
	{ id: 1, title: 'Fazer tarefa 1' },
	{ id: 2, title: 'Fazer tarefa 2' },
	{ id: 3, title: 'Fazer tarefa 3' },
	{ id: 4, title: 'Fazer tarefa 4' },
	{ id: 5, title: 'Fazer tarefa 5' },
	{ id: 6, title: 'Fazer tarefa 6' },
	{ id: 7, title: 'Fazer tarefa 7' },
	{ id: 8, title: 'Fazer tarefa 8' },
	{ id: 9, title: 'Fazer tarefa 9' },
	{ id: 10, title: 'Fazer tarefa 10' }
];

@Injectable()

export class TaskService{
	public tasksUrl = "api/tasks";

	public constructor(private http: Http){}

	/**
	 * Trabalhando sem Promises
	 * promises = execução em segundo plano
	 * 
			public getTasks(): Array<Task>{
				return TASKS;
			}
	*/

	/**
	 * Trabalhando com Promises
	 * promises = execução em segund plano.
	 */
	public getTasks(): Observable<Task[]>{
		return this.http.get(this.tasksUrl)
			.map( (response: Response) => response.json().data as Task[] )
	}

	public getImportantTasks(): Promise<Task[]>{
		return Promise.resolve(TASKS.slice(0,3));
	}

	public getTask(id: number): Promise<Task>{
		return this.getTasks()
			.then((tasks) => tasks.find(task => task.id === id));
	}

}