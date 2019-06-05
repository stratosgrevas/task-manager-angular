import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

// TRATANDO ERROS
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";

@Injectable()

export class LearningObservables{

	public constructor(private http: Http){

		// CRIANDO UM OBJETO OBSERVADOR
		// let observer = {
		// 	next: function(newData){
		// 		console.log("chamou o metodo NEXT e passou como parametro o 'newData' => ", newData)
		// 	},
		// 	error: function(errorData){
		// 		console.log("chamou o metodo ERROR e passou como parametro o 'errorData' => ", errorData)
		// 	},
		// 	complete: function(){
		// 		console.log("chamou o metodo COMPLETE e encerrou")
		// 	}
		// };

		// CRIANDO UM OBJETO OBSERVADOR (UTILIZANDO ARROW FUNCTIONS)
		// let arrowObserver = {
		// 	next: (newData) => {
		// 		console.log("chamou o metodo NEXT e passou como parametro o 'newData' => ", newData)
		// 	},
		// 	error: (errorData) => {
		// 		console.log("chamou o metodo ERROR e passou como parametro o 'errorData' => ", errorData)
		// 	},
		// 	complete: () => {
		// 		console.log("chamou o metodo COMPLETE e encerrou")
		// 	}
		// };

		// CRIANDO UM OBJETO OBSERVADO E PASSANDO UM OBSERVADOR COMO PARAMETRO
		// this.http.get("observer/tasks")
		// 	.subscribe(observer);

		// CRIANDO UM OBJETO OBSERVADO E PASSANDO UM OBSERVADOR COMO PARAMETRO
		// this.http.get("arrowObserver/tasks")
		// 	.subscribe(arrowObserver);

		// CRIANDO UM OBJETO OBSERVADO E CRIANDO UM OBSERVADOR NO PARAMETRO
		// this.http.get("observerInParameter/tasks")
		// 	.subscribe({
		// 		next: function(newData){
		// 			console.log("chamou o metodo NEXT e passou como parametro o 'newData' => ", newData)
		// 		},
		// 		error: function(errorData){
		// 			console.log("chamou o metodo ERROR e passou como parametro o 'errorData' => ", errorData)
		// 		},
		// 		complete: function(){
		// 			console.log("chamou o metodo COMPLETE e encerrou")
		// 		}
		// 	});

		// PASSANDO OS METODOS (NEXT, ERROR, COMPLETE) DIRETAMENTE COMO PARAMETRO
		// this.http.get("methodsInParameter/tasks")
		// 	.subscribe(
		// 		function(newData){
		// 			console.log("chamou o metodo NEXT e passou como parametro o 'newData' => ", newData)
		// 		},
		// 		function(errorData){
		// 			console.log("chamou o metodo ERROR e passou como parametro o 'errorData' => ", errorData)
		// 		},
		// 		function(){
		// 			console.log("chamou o metodo COMPLETE e encerrou")
		// 		}
		// 	);

		/**
		 * PASSANDO OS METODOS (NEXT, ERROR, COMPLETE) DIRETAMENTE COMO PARAMETRO (USANDO ARROW FUNCTIONS)
		 * FORMA MAIS COMUM E MAIS USADA !!!
		 */
		// this.http.get("api/tasks")
		// 	.subscribe(
		// 		newData => console.log("chamou o metodo NEXT e passou como parametro o 'newData' => ", newData),
		// 		errorData => console.log("chamou o metodo ERROR e passou como parametro o 'errorData' => ", errorData),
		// 		() => console.log("chamou o metodo COMPLETE e encerrou")
		// 	);

		/**
		 * PASSANDO OS METODO (NEXT) DIRETAMENTE COMO PARAMETRO (USANDO ARROW FUNCTIONS)
		 * É MUITO COMUM TAMBÉM USAR SOMENTE O NEXT QUANDO SE ESTÁ TRABALHANDO COM OBSERVABLES !!!
		 */
		// this.http.get("api/tasks")
		// 	.subscribe(newData => {
		// 			console.log("chamou o metodo NEXT e passou como parametro o 'newData' => ", newData)
		// 	});

		/**
		 * Implementando o tratamento de erros (FORMA 1)
		 */
		// this.http.get("api/tasASDFASDFAks")
		// 	.catch(error => {
		// 		console.log("SALVANDO ERRO EM BANCO DE DADOS PARA O DESENVOLVEDOR => ", error);
		// 		return Observable.throw(error)
		// 	})
		// 	.subscribe({
		// 		next: (newData) => {
		// 			console.log("chamou o metodo NEXT e passou como parametro o 'newData' => ", newData)
		// 		},
		// 		error: (errorData) => {
		// 			alert("Ocorreu um erro no servidor, por favor tente mais tarde !")
		// 		},
		// 		complete: () => {
		// 			console.log("chamou o metodo COMPLETE e encerrou")
		// 		}
		// 	});

		/**
		 * Implementando o tratamento de erros (FORMA MAIS COMUM)
		 * APONTANDO PARA UMA FUNÇÃO DE TRATAMENTO DE ERRORS
		 */
		this.http.get("api/tasASDFASDFAks")
			.catch(this.handleErrors)
			.subscribe({
				next: (newData) => {
					console.log("chamou o metodo NEXT e passou como parametro o 'newData' => ", newData)
				},
				error: (errorData) => {
					alert("Ocorreu um erro no servidor, por favor tente mais tarde !")
				},
				complete: () => {
					console.log("chamou o metodo COMPLETE e encerrou")
				}
			});


	}

	/**
	 * Função para tratamento de erros
	 * @param {Response} error [error recebido do CATCH do http.get]
	 */
	public handleErrors(error: Response){
		console.log("SALVANDO ERRO EM BANCO DE DADOS PARA O DESENVOLVEDOR => ", error);
		return Observable.throw(error);
	}

}
