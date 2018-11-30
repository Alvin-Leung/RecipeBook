import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Mighty Burger", 
      "The mightiest burger of them all", 
      "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg"),
    new Recipe(
      "Spaghetti Sauce with Ground Beef", 
      "Back to basics", 
      "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps108178_TH163620B11_11_3b.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(selectedRecipe) {
    this.recipeSelected.emit(selectedRecipe);
  }
}
