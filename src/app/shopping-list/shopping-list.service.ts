import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    public ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ];

    getIngredients(): Ingredient[] {
        return this.GetIngredientsClone();
    }

    addIngredient(newIngredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.GetIngredientsClone());
    }

    private GetIngredientsClone() {
        return Object.assign([], this.ingredients);
    }
}