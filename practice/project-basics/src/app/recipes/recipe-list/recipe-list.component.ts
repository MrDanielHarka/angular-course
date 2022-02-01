import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is just a test.',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is just a test 2.',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg'
    ),
  ];
}
