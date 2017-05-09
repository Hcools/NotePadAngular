import { Component, OnInit, Input } from '@angular/core';


import { Category } from './category';
import { CATEGORIES } from './mock-categories';
import { CategoryService } from './category.service';

@Component({
  selector: 'my-categories',
  templateUrl: './app/categories.component.html',
})

export class CategoriesComponent implements OnInit {
  title = 'Notepad';

  categories = CATEGORIES;
  category_edited = -1;
  new_category: Category = null;

  constructor(
    private category_service: CategoryService) {
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
    this.category_edited = -1;
  }

  newCategory(category: Category) {
    this.category_service.newCategory(category).subscribe(
      data => { this.categories.unshift(data) },
      err => console.error(err),
      () => { this.new_category = null }
    );
  }

  updateCategory(category: Category, index: number) {
    this.category_service.updateCategory(category).subscribe(
      data => { this.categories[index] = data},
      err => console.error(err),
      () => { this.category_edited = -1; }
    );
  }

  deleteCategory(category: Category, index: number) {
    this.category_service.deleteCategory(category).subscribe(
      data => { this.categories.splice(index, 1) },
      err => console.error(err),
      () => { }
    );
  }

  initNewCategory() {
    this.new_category = new Category();
  }

  deleteNewCategory() {
    this.new_category = null;
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
