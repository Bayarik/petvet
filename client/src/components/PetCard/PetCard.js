import {
  Avatar,
  Button,
  Card,
  CardActionArea, CardActions, CardContent, Typography,
} from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function PetCard({ pet }) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const neutral = theme.palette.neutral.main;

  const navigate = useNavigate();
  const navigateMoreHandler = (link) => {
    navigate(link);
  };

  return (
    <Card sx={{
      minWidth: 150, backgroundColor: neutral, borderRadius: '9px',
    }}
    >
      <CardActionArea
        onClick={(e) => navigateMoreHandler(`/pets/${pet.id}`)}
        sx={{
          height: '20rem',
          width: '17rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Avatar
          alt="{pet.avatar}"
          src="https://loremflickr.com/320/240/dog"
          sx={{
            width: 185, height: 185, m: 2, border: `1px solid ${primary}`,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={(e) => navigateMoreHandler(`/pets/${pet.id}`)}
          size="small"
          sx={{
            backgroundColor: primary, color: 'black', m: 'auto', borderRadius: '9px', p: '1rem',
          }}
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
}
