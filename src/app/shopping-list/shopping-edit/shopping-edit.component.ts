import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddClicked() {
    if (this.name && this.amount)
    {
      var newIngredient = new Ingredient(this.name, this.amount);
      this.ingredientAdded.emit(newIngredient);
      this.name = undefined;
      this.amount = undefined;
    }
  }
}
