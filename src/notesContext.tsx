import { useLocalStore } from 'mobx-react-lite';
import React, { createContext, FC, useContext } from 'react';
import createNotesStore, { NoteStore } from './notesStore';

const NotesContext = createContext<null | NoteStore >(null);

const NotesProvider: FC = ({ children }) => {
  const noteStore = useLocalStore(createNotesStore);
  return <NotesContext.Provider value={noteStore}>
    {children}
  </NotesContext.Provider>
};

const useNotesStore = () => useContext(NotesContext);

export {
  NotesProvider,
  useNotesStore,
}

