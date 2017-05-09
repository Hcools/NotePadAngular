﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent }  from './app.component';
import { NotesComponent } from './notes.component';
import { CategoriesComponent } from './categories.component';
import { NoteService } from './note.service';
import { CategoryService } from './category.service';

const appRoutes: Routes = [
  {
  path: 'notes', component: NotesComponent 
  },
  {
  path: 'categories', component: CategoriesComponent 
  },
  {
  path: '', redirectTo: '/notes', pathMatch: 'full' 
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);