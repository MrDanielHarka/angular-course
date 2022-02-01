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
      'Test recipe',
      'This is a description.',
      'https://images.ctfassets.net/314o13npeir2/aXTSWN85dxxNi10A9qoRY/db4131fa1d598faf26b9d4eb5380e9b5/marika-langos-budapest-8.jpg?w=355&h=266&q=95'
    ),
    new Recipe(
      'Test recipe 2',
      'This is description 2.',
      'https://images.ctfassets.net/314o13npeir2/aXTSWN85dxxNi10A9qoRY/db4131fa1d598faf26b9d4eb5380e9b5/marika-langos-budapest-8.jpg?w=355&h=266&q=95'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
