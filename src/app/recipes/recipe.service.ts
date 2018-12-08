import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    public newRecipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          "Mighty Burger", 
          "The mightiest burger of them all", 
          "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg"),
        new Recipe(
          "Spaghetti Sauce with Ground Beef", 
          "Back to basics", 
          "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps108178_TH163620B11_11_3b.jpg")
      ];

    getRecipes() {
        return Object.assign([], this.recipes);
    }

    setSelected(selectedRecipe) {
        this.newRecipeSelected.emit(selectedRecipe);
    }
}