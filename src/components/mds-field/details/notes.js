import React, { useState } from "react"

import { Typography, Card, Input, Button } from "antd"
const { Title, Text } = Typography
const { TextArea } = Input

const initialNotes = [
  {
    key: 1,
    user: "user",
    dateTime: "date/time",
    note: "asdfasdfasdfasdfasdfas asdfas fas df asdf asdf",
  },
  {
    key: 2,
    user: "user2",
    dateTime: "date/time",
    note: "asdfasdfasdfasdfasdfas asdfas fas df asdf asdf",
  },
  {
    key: 3,
    user: "user3",
    dateTime: "date/time",
    note: "asdfasdfasdfasdfasdfas asdfas fas df asdf asdf",
  },
]

export default () => {
  const [notes, setNotes] = useState(initialNotes)
  const [currentNote, setCurrentNote] = useState("")

  const saveNote = () => {
    const item = notes.length+1
    const newNote = {
      key: 4,
      user: "Current User",
      dateTime: "Current Date/Time",
      note: currentNote,
    }

    setNotes({ ...notes, item : newNote })
    setCurrentNote("")
  }

  return (
    <>
      <TextArea onChange={e => setCurrentNote(e.target.value)} />
      <Button type="primary" onClick={saveNote}>
        Add Note
      </Button>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </>
  )
}
