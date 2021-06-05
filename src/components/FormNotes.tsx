import React, { FC, useState, useRef, useEffect } from 'react';
import { Button, Input, Col, Row } from 'antd';

import { useNotesStore } from '../notesContext';

const FormNotes: FC = () => {
  const [note, setNote] = useState<string>('');
  const noteStore = useNotesStore();
  const inputRef = useRef<Input>(null);

  const addNote = () => {
    if (note) {
      noteStore?.addNote(note);
      setNote('');
    }
  };

  const clearNote = () => {
    setNote('');
  };

  useEffect(() => {
    inputRef?.current?.focus();
  })

  return <form>
    <Row>
      <Col span={6} offset={6}>
        <Input placeholder="type a note" 
          value={note}
          onChange={(e) => { setNote(e.currentTarget.value)}}
          ref={inputRef}
        />
      </Col>
      <Col span={4}>
        <Button type="primary" onClick={addNote}>
          Add Notes
        </Button>
        <Button type="link" onClick={clearNote}>
          Clear
        </Button>
      </Col>
    </Row>
  </form>
};

export default FormNotes;