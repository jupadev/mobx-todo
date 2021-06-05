import { nanoid } from 'nanoid';

type Note = {
  id: string,
  text: string,
};

export type NoteStore = {
  notes: Note[],
  addNote: (text: string) => void,
  removeNote: (text: string) => void
};
const createNoteStore = (): NoteStore => {
  return {
    notes: [],
    addNote(text: string) {
      this.notes.push({
        id: nanoid(),
        text
      });
    },
    removeNote(id: string) {
      this.notes = this.notes.filter((note: Note) => note.id !== id);
    }
  }
};

export default createNoteStore;