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
      '1st Description',
      'https://media-cdn.tripadvisor.com/media/photo-s/0b/1a/0d/37/best-dinner-in-budapest.jpg'
    ),
    new Recipe(
      '2nd Recipe',
      '2nd Description',
      'https://media-cdn.tripadvisor.com/media/photo-s/0b/1a/0d/37/best-dinner-in-budapest.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
