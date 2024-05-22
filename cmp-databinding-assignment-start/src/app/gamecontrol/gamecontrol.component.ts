import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.css'
})
export class GamecontrolComponent {
  @Output() numGen = new EventEmitter<number>();
  @Output() op = new EventEmitter<string>();  
  counter = 0;
  counterRef;

  startGame(){
    this.counterRef = setInterval(()=>{
      this.numGen.emit(this.counter++);
    },1000)
  }

  endGame(){
    clearInterval(this.counterRef);
    this.op.emit('Game stopped');
  }
}
