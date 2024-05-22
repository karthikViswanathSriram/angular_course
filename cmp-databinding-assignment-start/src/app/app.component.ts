import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddArray=[];evenArray=[];

  arrayPush(num){
    if(num%2===0)
      this.evenArray.push(num);
    else
      this.oddArray.push(num);
  }

  clearOp(){
    this.oddArray=[];
    this.evenArray=[];
  }
}
