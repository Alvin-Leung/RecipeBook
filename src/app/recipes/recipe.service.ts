import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    public newRecipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          "Mighty Burger", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula ornare suscipit. Maecenas rutrum luctus sem ac rutrum. Phasellus maximus nulla turpis, nec placerat nunc pellentesque at. Cras bibendum lacus sed massa hendrerit semper. Ut scelerisque rutrum lorem non imperdiet. Maecenas pharetra, dolor lacinia ullamcorper laoreet, elit turpis pellentesque quam, nec rutrum massa libero vel est. Fusce dictum magna et purus pellentesque consequat. Sed in pulvinar odio. Nam sit amet augue ante. Vivamus nec est semper, fermentum massa nec, dapibus magna. Suspendisse convallis, sapien et egestas ultricies, erat arcu commodo tellus, ut semper nunc lacus at libero.", 
          "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg",
          [
            new Ingredient("Ground Beef", 3),
            new Ingredient("Egg", 2),
            new Ingredient("Bread Crumbs", 4),
            new Ingredient("Seasoning", 1)
          ]),
        new Recipe(
          "Spaghetti Sauce with Ground Beef", 
          "Nulla at mi porta, porttitor diam sed, maximus risus. Praesent at dignissim mi. Curabitur accumsan ante nec euismod mollis. Sed non erat porta nunc imperdiet cursus. Phasellus placerat dolor fringilla pretium ultrices. Pellentesque auctor elit id pellentesque molestie. Aliquam quis orci in mi venenatis vestibulum. Vestibulum sit amet interdum ipsum. Aliquam in eros sed ipsum condimentum dignissim. Nullam ullamcorper eu sem nec laoreet.", 
          "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps108178_TH163620B11_11_3b.jpg",
          [
            new Ingredient("Spaghetti", 3),
            new Ingredient("Ground Beef", 2),
            new Ingredient("Pasta Sauce", 1),
            new Ingredient("Seasoning", 1)
          ])
      ];

    getRecipes() {
        return Object.assign([], this.recipes);
    }

    setSelected(selectedRecipe) {
        this.newRecipeSelected.emit(selectedRecipe);
    }
}