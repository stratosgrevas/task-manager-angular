/* angular imports */
import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";

/* rxjs */
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";

/* components imports */
import { Task } from './task.model';

@Injectable()

export class TaskService{
	public tasksUrl = "api/tasks";

	public constructor(private http: Http){}

	/**
	 * Trabalhando com Observables.
	 */
	public getTasks(): Observable<Task[]>{
		return this.http.get(this.tasksUrl)
			.catch( this.handleErrors )
			.map( (response: Response) => response.json().data as Task[] )
	}

	public getImportantTasks(): Observable<Task[]>{
		return this.getTasks()
			.catch( this.handleErrors )
			.map( tasks => tasks.slice(0,5) );
	}

	public getTask(id: number): Observable<Task>{
		let url = `${this.tasksUrl}/${id}`;

		return this.http.get(url)
			.catch( this.handleErrors )
			.map( (response: Response) => response.json().data as Task )
	}

	private handleErrors(error: Response){
		console.log("Salvando o erro no arquivo de log - Detalhes do erro => ", error);
		return Observable.throw(error);
	}

}