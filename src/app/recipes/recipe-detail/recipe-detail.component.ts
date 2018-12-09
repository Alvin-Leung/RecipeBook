import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.recipeService.newRecipeSelected.subscribe((selectedRecipe: Recipe) => {
      this.selectedRecipe = selectedRecipe;
    })
  }

  addAllIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }
}
