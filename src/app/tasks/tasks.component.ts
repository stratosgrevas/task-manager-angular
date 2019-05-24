import { Component, OnInit } from '@angular/core';

// 
// importando arquivos do projeto
// 
import { Task } from './shared/task.model';

// const TASKS: Array<number> = [];
// const TASKS_2: string[] = [];
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
	{ id: 10, title: 'Fazer tarefa 10' },
];

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	public tasks;

  constructor() { }

  ngOnInit() {
  	this.tasks = TASKS;
  	console.log(this.tasks);
  }

}
