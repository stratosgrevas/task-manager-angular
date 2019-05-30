import { Injectable } from "@angular/core";

import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService{

	public createDb(){
		let tasks = [
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
		return { tasks }
	}
}
