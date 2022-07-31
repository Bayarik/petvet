import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import {
  Avatar, Typography, Card, Rating, Input, TextField, Container, FormControl, InputLabel,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import ButtonMailTo from '../ButtonMailTo/ButtonMailTo';
import ButtonPhoneTo from '../ButtonPhoneTo/ButtonPhoneTo';

export default function UserCard({ rating, address }) {
  const user = useSelector((state) => state.user);
  const iconStyles = { mx: 2, alignSelf: 'bottom' };
  const [value, setValue] = useState();// не уверена что делает эта херрня, но что-то про рейтинг
  const [edit, setEdit] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [editInput, setEditInput] = useState({
    name: '',
    email: false,
    phone: false,
  });

  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const editButtonHandler = (e, field) => {
    setEdit({ ...edit, [field]: true });
  };
  const doneButtonHandler = (e, field) => {
    // updates user.name state
    setEdit({ ...edit, [field]: false });
  };

  const dataStyles = { ml: '1rem' };

  return (
    <Card sx={{
      minWidth: 275, display: 'flex', boxShadow: 0, p: 3,
    }}
    >
      <Avatar
        alt=""
        src="https://i.pravatar.cc/200"
        sx={{
          width: 250, height: 250, border: `1px solid ${primary}`,
        }}
      />
      <CardContent sx={{
        p: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        {edit.name ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            {/* <Typography variant="h5" component="div">
              <TextField
                variant="standard"
                defaultValue={`${user.first_name} ${user.last_name}`}
                // onSubmit={(e) => doneButtonHandler(e, 'name')}
              />
            </Typography> */}
            <FormControl variant="standard">
              <Input id="component-simple" defaultValue={`${user.first_name} ${user.last_name}`} />
            </FormControl>

            <DoneIcon color="secondary" sx={iconStyles} onClick={(e) => doneButtonHandler(e, 'name')} />
          </div>
        )
          : (
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography variant="h5" component="div">
                {`${user.first_name} ${user.last_name}`}
              </Typography>
              <EditIcon color="primary" sx={iconStyles} onClick={(e) => editButtonHandler(e, 'name')}>edit_profile</EditIcon>
            </div>
          )}

        {edit.email ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant="h6" component="h2">
              Почта
            </Typography>
            <Typography variant="h5" component="div" sx={dataStyles}>
              <TextField variant="standard" defaultValue="no-reply@example.com" />
            </Typography>
            <DoneIcon color="secondary" sx={iconStyles} onClick={(e) => doneButtonHandler(e, 'email')} />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h6" component="h2">
              Почта
            </Typography>
            <Typography variant="h6" component="h2" sx={dataStyles}>
              <ButtonMailTo label={user.email} mailto={`mailto:${user.email}`} />
            </Typography>

            <EditIcon sx={iconStyles} color="primary" onClick={(e) => editButtonHandler(e, 'email')}>edit_profile</EditIcon>
          </div>
        )}

        {edit.phone ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant="h6" component="h2">
              Телефон
            </Typography>
            <Typography variant="h5" component="div" sx={dataStyles}>
              <TextField variant="standard" defaultValue={user.phone} />
            </Typography>
            <DoneIcon color="secondary" sx={iconStyles} onClick={(e) => doneButtonHandler(e, 'phone')} />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h6" component="h2">
              Телефон
            </Typography>
            <Typography variant="h6" component="h2" sx={dataStyles}>
              <ButtonPhoneTo label={user.phone} tel={`tel:${user.phone}`} />
            </Typography>
            <EditIcon sx={iconStyles} color="primary" onClick={(e) => editButtonHandler(e, 'phone')}>edit_profile</EditIcon>
          </div>
        )}

        {address && (
        <Typography variant="h6" component="h2">
          Адрес клиники
          <EditIcon sx={iconStyles} color="primary">edit_profile</EditIcon>
        </Typography>
        )}
        {rating && (
        <div>
          <Typography component="legend">Рейтинг1</Typography>
          <Rating
            name="simple-controlled"
            value={value}
          />

        </div>
        )}
      </CardContent>
    </Card>
  );
}
