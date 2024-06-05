import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() emitIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput',{static:false}) nameInp;
  @ViewChild('amountInput',{static:false}) amountInp;

  addIngredient(){
    this.emitIngredient.emit(new Ingredient(this.nameInp.nativeElement.value,this.amountInp.nativeElement.value));
  }
}
