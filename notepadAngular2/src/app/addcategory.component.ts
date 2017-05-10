import { Component, Input, OnInit } from '@angular/core';
import { Category } from './category';
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
  templateUrl: './app/templates/addcategory.html',
})

export class AddCategoryComponent implements OnInit {

  title = 'Ajouter une catégorie';
  categories:Category[];
  newcategory: Category = null;

  constructor( private category_service: CategoryService) {}

  ngOnInit(): void {
    this.newcategory = new Category();
    console.log(this.newCategory);
    this.categories = this.category_service.sendCategories();
    this.getCategories();
console.log("fdfvcfde")
  }

  getCategories(): void {
    this.category_service.getCategories().subscribe(
      //works
      data => { this.categories = data},
      //doesnt works
      err => console.error(err),
      //() => console.log(this.categories),
     null
    );
  }

  initNewCategory() {
    this.newcategory = new Category();
  }

  newCategory(category: Category) {
    console.log("ggggggg");
    this.category_service.newCategory(category).subscribe(
      data => { this.categories.unshift(data) },
      err => console.error(err),
      //() => { this.newcategory = null }
    );
  }

  deleteNewCategory() {
    this.newcategory = null;
  }

}
