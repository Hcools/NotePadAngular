import { Component, OnInit, Input } from '@angular/core';

import { Category } from './category';
import { Note } from './note';
import { CATEGORIES } from './mock-categories';
import { NOTES } from './mock-notes';
import { NoteService } from './note.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'addnote',
  templateUrl: './app/addnote.component.html',
})

export class AddNoteComponent implements OnInit {
  title = 'Notepad';

  //@Input() notes = NOTES;
  notes = NOTES;
  categories = CATEGORIES;
  note_edited = -1;
  new_note: Note = null;

  constructor(
    private note_service: NoteService,
    private category_service: CategoryService) {
  }

  getNotes(): void {
    this.note_service.getNotes().subscribe(
      // function that runs on success
      data => { this.notes = data},
      // function that runs on error
      err => console.error(err),
      // function that runs on completion
      //() => console.log(this.notes)
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

  validate(note: Note) {
    console.log(note);
    this.note_edited = -1;
  }

  newNote(note: Note) {
    this.note_service.newNote(note).subscribe(
      data => { this.notes.unshift(data) },
      err => console.error(err),
      () => { this.new_note = null }
    );
  }

  updateNote(note: Note, index: number): void {

    this.note_service.updateNote(note).subscribe(
      data => { this.notes[index] = data},
      err => console.error(err),
      () => { this.note_edited = -1; }
    );
  }

  deleteNote(note: Note, index: number) {
    this.note_service.deleteNote(note).subscribe(
      data => { this.notes.splice(index, 1) },
      err => console.error(err),
      () => { }
    );
  }

  initNewNote() {
    this.new_note = new Note();
  }

  cancelNewNote() {
    this.new_note = null;
  }

  ngOnInit(): void {
    this.getNotes();
    this.getCategories();
    this.new_note = new Note();
  }

}
