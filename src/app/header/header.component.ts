import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipesClicked = new EventEmitter();
  @Output() shoppingListClicked = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onRecipesClick() {
    this.recipesClicked.emit();
  }

  onShoppingListClick() {
    this.shoppingListClicked.emit();
  }
}
