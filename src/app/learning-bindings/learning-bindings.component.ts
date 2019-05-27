import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learning-bindings',
  templateUrl: './learning-bindings.component.html',
  styleUrls: ['./learning-bindings.component.css']
})

export class LearningBindingsComponent implements OnInit {

	public mouseClickCount: number;
	public mouseOverCount: number;
	public userName: string;
	public userEmail: string;

	public constructor(){
		this.mouseClickCount = 0;
		this.mouseOverCount = 0;
		this.userName = "";
		this.userEmail = "";
	}

	// mouse events
	public onClick(){
		console.log('Evento onClick disparado!');
		this.mouseClickCount++;
	}

	public onMouseOver(){
		console.log('Evento onMouseOver disparado!');
		this.mouseOverCount++;
	}

	// key events
	public onKeyDown(event: any){
		console.log('Evento onKeyDown disparado!');
		console.log(event);
		this.userName = event.target.value;
	}

	public onKeyUp(event: any){
		console.log('Evento onKeyUp disparado!');
		console.log(event);
		this.userEmail = event.target.value;
	}

  ngOnInit() {
  }

}
