import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learning-bindings',
  templateUrl: './learning-bindings.component.html',
  styleUrls: ['./learning-bindings.component.css']
})

export class LearningBindingsComponent implements OnInit {

	// mouse events
	public onClick(){
		console.log('Evento onClick disparado!');
	}

	public onMouseOver(){
		console.log('Evento onMouseOver disparado!');
	}

	// key events
	public onKeyDown(){
		console.log('Evento onKeyDown disparado!');
	}

	public onKeyUp(){
		console.log('Evento onKeyUp disparado!');
	}

  constructor() { }

  ngOnInit() {
  }

}
