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

import { routing } from './app.routing';



@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  declarations: [ 
    AppComponent,
    NotesComponent,
    CategoriesComponent,
  ],
  providers: [
    NoteService,
    CategoryService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ 
    AppComponent,
  ],
})

export class AppModule { }
