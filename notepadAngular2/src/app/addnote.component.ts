import { Component, OnInit, Input } from '@angular/core';

import { Category } from './category';
import { Note } from './note';

import { NoteService } from './note.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'addnote',
  templateUrl: './app/templates/addnote.component.html',
})

export class AddNoteComponent implements OnInit {

  title = 'Ajouter une note';

  //@Input() notes = NOTES;
  notes:Note[];
  categories:Category[];
  note_edited = -1;
  newnote: Note = null;

  constructor(
    private note_service: NoteService,
    private category_service: CategoryService) {
      this.categories = this.category_service.sendCategories();
      this.getNotes();
      this.getCategories();
      this.newnote = new Note();
    }

  ngOnInit(): void {
    this.getNotes();
    this.getCategories();
    this.newnote = new Note();
  }

  getNotes(): void {
    this.note_service.getNotes().subscribe(
      // function that runs on success
      data => { this.notes = data},
      // function that runs on error
      err => console.error(err),
      null
    );
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

  newNote(note: Note) {
    this.note_service.newNote(note).subscribe(
      data => { this.notes.unshift(data) },
      err => console.error(err),
      () => { this.newnote = null }
    );
  }

  initNewNote() {
    this.newnote = new Note();
  }

  cancelNewNote() {
    this.newnote = null;
  }
}
