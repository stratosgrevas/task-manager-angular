/* Carregar componentes do angular */
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

/* Carregar componentes da aplicação */
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit{
	public reactiveTaskForm: FormGroup;
	public task: Task;
	public taskDoneOptions: Array<any> = [
		{ value: false, text: "Pendente"},
		{ value: true, text: "Feita"}
	];

	public constructor(
		private taskService: TaskService,
		private route: ActivatedRoute,
		private location: Location,
		private formBuilder: FormBuilder
	){
		/**
		 * FormGroup
		 * inicializando os 4 campos do formulário
		*/
		// this.reactiveTaskForm = new FormGroup({
		// 	title: new FormControl(null),
		// 	deadline: new FormControl(null),
		// 	done: new FormControl(null),
		// 	description: new FormControl(null)
		// })

		/**
		 * FormBuilder
		 * inicializando os 4 campos do formulário
		*/
		this.reactiveTaskForm = this.formBuilder.group({
			title: [null],
			deadline: [null],
			done: [null],
			description: [null],
		})
	}

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
		this.task = new Task(null, null);

		this.route.params
			.switchMap((params: Params) => this.taskService.getById(+params['id']))
			.subscribe(
				// task => this.task = task,
				task => this.setTask(task),
				error => alert("Ocorreu um erro no servidor, tente mais tarde !")
			)
	}

	public setTask(task: Task): void {
		this.task = task;
		
		/**
		 * 
		 * setValue
		 * 
		*/
		// let formModel = {
		// 	title: task.title  || null,
		// 	description: task.description || null,
		// 	done: task.done || null,
		// 	deadline: task.deadline || null,
		// }

		// this.reactiveTaskForm.setValue(formModel);

		/**
		 * 
		 * patchValue
		 * 
		*/
		// let formModel = {
		// 	title: task.title  || null,
		// 	description: task.description || "Teste"
		// }

		// this.reactiveTaskForm.patchValue(formModel);

		this.reactiveTaskForm.patchValue(task);
	}

	public ngAfterViewInit(){
		// // $("#exemplo").fadeOut(9999);
		// $("#deadline").datetimepicker({
		// 	// 'sideBySide': true,
		// 	'locale': 'pt-br'
		// }).on('dp.change', ()=> this.task.deadline = $("#deadline").val());

		/**
		 * Usando PATCHVALUE()
		 */
		// $("#deadline").datetimepicker({
		// 	'locale': 'pt-br'
		// }).on('dp.change', ()=> this.reactiveTaskForm.patchValue( { deadline: $("#deadline").val() } ));

		/**
		 * Usando SETVALUE()
		 * Essa forma é mais clara para entender o que está ocorrendo.
		 */
		$("#deadline").datetimepicker({
			'locale': 'pt-br'
		}).on('dp.change', ()=> this.reactiveTaskForm.get('deadline').setValue( $("#deadline").val() ));

	}

	public goBack(){
		this.location.back();
	}

	public updateTask(){
		this.taskService.update(this.task)
				.subscribe(
					() => alert("Tarefa atualizada com sucesso !"),
					() => alert("Ocorreu um erro no servidor, tente mais tarde !")
				)
	}

	public showFieldError(field): boolean{
		return field.invalid && ( field.touched || field.dirty )
	}

}

/**
 * Exemplo para explicar o uso do Observable:
 *
 * Promise<Task>.then
 * Observable<Task>.subscribe
 * 
 */