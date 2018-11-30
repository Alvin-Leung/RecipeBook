import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes: boolean = false;
  showShoppingList: boolean = false;
  
  onRecipesClicked() {
    this.showRecipes = true;
    this.showShoppingList = false;
  }

  onShoppingListClicked() {
    this.showShoppingList = true;
    this.showRecipes = false;
  }
}
