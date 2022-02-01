import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      '1st Recipe',
      '1st Recipe Description',
      'https://i0.wp.com/alizswonderland.com/wp-content/uploads/2018/09/Retro-L%C3%A1ngos-Arany-J%C3%A1nos-Budapest-food-guide-to-traditional-Hungarian-dishes-AlizsWonderland-FB.jpg?fit=1150%2C647&ssl=1'
    ),
    new Recipe(
      '2nd Recipe',
      '2nd Recipe Description',
      'https://i0.wp.com/alizswonderland.com/wp-content/uploads/2018/09/Retro-L%C3%A1ngos-Arany-J%C3%A1nos-Budapest-food-guide-to-traditional-Hungarian-dishes-AlizsWonderland-FB.jpg?fit=1150%2C647&ssl=1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
