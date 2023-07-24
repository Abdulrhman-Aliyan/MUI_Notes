import React from 'react';
import { Card, CardHeader, CardContent, IconButton, Typography, makeStyles, Avatar } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { yellow, green, pink, blue } from '@material-ui/core/colors';

const useStyle = makeStyles({
  avater: {
    backgroundColor: (note) => {
      if (note.category === 'work') {
        return yellow[700];
      }
      if (note.category === 'money') {
        return green[500];
      }
      if (note.category === 'todos') {
        return pink[500];
      }
      return blue[500];
    }
  }

});

const NoteCard = ({note, handleDelete}) => {
  const classes = useStyle(note);

  return (
    <Card>
        <CardHeader 
        title={note.title}
        subheader={note.category}
        avatar={
                    <Avatar className={classes.avater}>
                      {note.category[0].toUpperCase()}
                    </Avatar>
                  }
        action={
            <IconButton aria-label="delete" onClick = { () => handleDelete(note.id) }>
              <DeleteOutlined />
            </IconButton>
          }
        />
        <CardContent>
            <Typography variant='body2'>
                {note.details}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default NoteCard