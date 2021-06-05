import React from 'react';
import './App.css';
import FormNotes from './components/FormNotes';
import { useNotesStore } from './notesContext';
import { Observer } from 'mobx-react';

const App = () => {
  const notes = useNotesStore();
  console.log('notes', notes?.notes)
  return (
    <div className="App" style={{marginTop: 20}}>
      <FormNotes />
      <ul>
        <Observer>{() => <>
          {notes?.notes.map((note) => 
            <li key={note.id}>{note.text}</li>
          )}
        </>}
        </Observer>
      </ul>
    </div>
  );
}

export default App;
