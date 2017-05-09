import { Component, Input, OnInit } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './mock-categories';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ModuleWithProviders} from '@angular/core';
import { AppComponent }  from './app.component';
import { NotesComponent } from './notes.component';
import { AddNoteComponent } from './addnote.component';
import { CategoriesComponent } from './categories.component';
import { AboutComponent } from './about.component';

import { NoteService } from './note.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'addcategory',
  templateUrl: './app/addcategory.html',
})

export class AddCategoryComponent implements OnInit {

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
    this.new_category = new Category();
  }
}
