import { Component } from '@angular/core';
import { Note } from './note';


@Component({
  selector: 'my-app',
  template: `

  <div class="container">
  <div class="page-header">
    <h1>NotePad</h1>
    <div class="btn-group pull-left">

        <button type="button" routerLink="/notes"
           routerLinkActive="active"
           class="btn btn-lg btn-primary">
           <i class="glyphicon glyphicon-menu-hamburger"></i>
          Notes
        </button >
        <button type="button" routerLink="/addnote"
           routerLinkActive="active"
           class="btn btn-lg btn-primary">
           <i class="glyphicon glyphicon-plus"></i>
          Ajouter une note
        </button >
        <button type="button" routerLink="/categories"
           routerLinkActive="active"
           class="btn btn-lg btn-primary"
            >
           <i class="glyphicon glyphicon-menu-hamburger"></i>
          Categories
        </button >
        <button type="button" routerLink="/addcategory"
           routerLinkActive="active"
           class="btn btn-lg btn-primary">
           <i class="glyphicon glyphicon-plus"></i>
          Ajouter une catégorie
        </button >
        <button  type="button"routerLink="/about"
           routerLinkActive="active"
           class="btn btn-lg btn-primary">
           <i class="glyphicon glyphicon-search"></i>
          A propos
        </button >

    </div>
    </div>
  <div>

  <router-outlet></router-outlet>
  `
})

export class AppComponent  {
}
