import { Component, OnInit, Input } from '@angular/core';

import { Category } from './category';

import { CategoryService } from './category.service';

@Component({
  selector: 'my-categories',
  templateUrl: './app/templates/categories.component.html',
})

export class CategoriesComponent implements OnInit {

  title = 'Liste des catégories';

  categories:Category[];
  categoryEdited = -1;
  newcategory: Category = null;

  constructor(
    private category_service: CategoryService) {

  }

  ngOnInit(): void {
    this.categories = this.category_service.sendCategories();
    this.getCategories();
  }

  getCategories(): void {
    this.category_service.getCategories().subscribe(
      // function that runs on success
      data => { this.categories = data},
      // function that runs on error
      err => console.error(err),
      // function that runs on completion
      //() => console.log(this.categories)
      null
    );
  }

  validate(category: Category) {
    console.log(category);
    this.categoryEdited = -1;
  }


  updateCategory(category: Category, index: number) {
    this.category_service.updateCategory(category).subscribe(
      data => { this.categories[index] = data},
      err => console.error(err),
      () => { this.categoryEdited = -1; }
    );
  }

  deleteCategory(category: Category, index: number) {
    this.category_service.deleteCategory(category).subscribe(
      data => { this.categories.splice(index, 1) },
      err => console.error(err),
      () => { }
    );
  }


}
