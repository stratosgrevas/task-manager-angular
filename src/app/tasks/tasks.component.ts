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
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	public tasks: Array<Task>;
  public newTask: Task;

  // não está mais sendo usado
	// public selectedTask: Task;

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
  constructor(private taskService: TaskService){
    this.newTask = new Task(null, '');
  }

  public ngOnInit() {
    this.taskService.getAll()
      .subscribe(
        tasks => this.tasks = tasks.sort( (a,b) => b.id - a.id ),
        error => alert("Ocorreu um erro no servidor, tente mais tarde !")
      )
  }

  public createTask(){
    this.newTask.title = this.newTask.title.trim();

    if(!this.newTask.title){
      alert("A tarefa deve ter um título !");
    }else{
      this.taskService.create(this.newTask)
        .subscribe(
          (task) => {
            /* atualizando a lista da pagina com a nova tarefa */
            this.tasks.unshift(task);
            /* limpando o formulário */
            this.newTask = new Task(null, '');
          },
          () => alert("Ocorreu um erro no servidor, tente mais tarde !")
        )
    }
  }

  public deleteTask(task: Task){
    // let confirmed = confirm(`Deseja realmente excluir a tarefa "${task.title}"?`);
    // console.log(confirmed);

    if( confirm(`Deseja realmente excluir a tarefa "${task.title}"?`) ){
      this.taskService.delete(task.id)      
        .subscribe(
          () => this.tasks = this.tasks.filter(t => t !== task),
          () => alert("Ocorreu um erro no servidor, tente mais tarde !")
        )
    }
  }

  // outra forma de declarar uma função mais detalhadamente
  //
  // public onSelect(task: Task): void {
  // 	this.selectedTask = task;
  // }

  // não está mais sendo usado
  // public onSelect(task){
  // 	this.selectedTask = task;
  // }

}
