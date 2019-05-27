import { Component, OnInit } from '@angular/core';

// 
// importando arquivos do projeto
// 
import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';

/**
 * Exemplo de Declaração de Constantes:
 * 
    const TASKS: Array<number> = [];
    const TASKS_2: string[] = [];
*/

/**
 * 
 * Exemplos de Providers:
 * 
    providers: [
      { provide: TaskService, useClass: TaskService },
      { provide: Notifier, useClass: EmailNotifier },
      { provide: NotifierSMS, useClass: SMSNotifier }
    ]
*/

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [ TaskService ]
})
export class TasksComponent implements OnInit {
	public tasks: Array<Task>;
	public selectedTask: Task;

/**
 * 
 * Declaração de variáveis e inicializar no Construtor:

    private taskService: TaskService;

    constructor(taskService: TaskService) {
      this.taskService = taskService;
    }

*/

  /**
   * Declaração de variáveis diretamente no Construtor:
   */
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
    .then((tasks) => {
      console.log("Sucesso !!!");
      console.log(tasks);
      this.tasks = tasks;
    })
    .catch((error_msg) => alert(error_msg));
  }

  // outra forma de declarar uma função mais detalhadamente
  //
  // public onSelect(task: Task): void {
  // 	this.selectedTask = task;
  // }

  public onSelect(task){
  	this.selectedTask = task;
  }

}
