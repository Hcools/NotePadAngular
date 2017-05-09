import { Component } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `
})

export class AppComponent  { 
}
