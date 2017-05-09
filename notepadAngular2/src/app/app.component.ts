import { Component } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Component({
  selector: 'my-app',
  template: `
  <div class="page-header">
    <h1>NotePad</h1>

    <div class="btn-toolbar pull-left">
      <a routerLink="/notes"
         routerLinkActive="active"
         class="btn btn-lg btn-default">
         <i class="glyphicon glyphicon-menu-hamburger"></i>
        Notes
      </a>
      <a routerLink="/categories"
         routerLinkActive="active"
         class="btn btn-lg btn-default"
          >
         <i class="glyphicon glyphicon-menu-hamburger"></i>
        Categories
      </a>
      <a routerLink="/about"
         routerLinkActive="active"
         class="btn btn-lg btn-default">
         <i class="glyphicon glyphicon-search"></i>
        A propos
      </a>
      <a routerLink="/addnote"
         routerLinkActive="active"
         class="btn btn-lg btn-default">
         <i class="glyphicon glyphicon-search"></i>
        A propos
      </a>
      <a routerLink="/addcategory"
         routerLinkActive="active"
         class="btn btn-lg btn-default">
         <i class="glyphicon glyphicon-search"></i>
        A propos
      </a>
    </div>
  </div>

  <router-outlet></router-outlet>
  `
})

export class AppComponent  {
}
