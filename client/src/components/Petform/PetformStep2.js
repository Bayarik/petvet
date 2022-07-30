import React from 'react';
import {
  TextField, Box, FormControl, InputLabel, Select, MenuItem, Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function PetformStep2({ petForm, inputHandler }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '1rem',
      width: '80%',
      margin: 'auto',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.2)',
      padding: '1rem',
    }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormControl sx={{ width: '48%' }}>
          <InputLabel id="petster">Стерелизация</InputLabel>
          <Select
            labelId="petsterilized"
            id="petsex-select"
            label="Стерелизация"
            name="sterilized"
            value={petForm.sterilized}
            onChange={inputHandler.simpelInputHandler}
          >
            <MenuItem value>Да</MenuItem>
            <MenuItem value={false}>Нет</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="petsterilizeddate"
          label="Дата стерелизации"
          variant="standard"
          name="sterilized_date"
          type="date"
          value={petForm.sterilized_date}
          onChange={inputHandler.simpelInputHandler}
          sx={{ width: '48%' }}
          disabled={!petForm.sterilized}
        />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Аллергии</Typography>
      {petForm.allergies.length > 0 && (
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {petForm.allergies.map((allergy, index) => (
          <Box
            sx={{
              backgroundColor: '#D9D9D9',
              width: 'max-content',
              padding: '3px',
              borderRadius: '4px',
              marginRight: '5px',
              alignItems: 'center',
              display: 'flex',
            }}
            key={`${index}-${allergy}`}
          >
            <Typography variant="body1" sx={{ display: 'inline-block' }}>{allergy}</Typography>
            <ClearIcon sx={{ cursor: 'pointer' }} onClick={() => inputHandler.removeFromArray('allergies', index)} />
          </Box>
        ))}
      </Box>
      )}
      <TextField
        id="petallergies"
        label="Аллергия"
        variant="standard"
        name="allergies"
        type="text"
        onKeyDown={inputHandler.arrayInputHandler}
      />

      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Хронические болезни</Typography>
      {petForm.chronic_diseases.length > 0 && (
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {petForm.chronic_diseases.map((disease, index) => (
          <Box
            sx={{
              backgroundColor: '#D9D9D9',
              width: 'max-content',
              padding: '3px',
              borderRadius: '4px',
              marginRight: '5px',
              alignItems: 'center',
              display: 'flex',
            }}
            key={`${index}-${disease}`}
          >
            <Typography variant="body1" sx={{ display: 'inline-block' }}>{disease}</Typography>
            <ClearIcon sx={{ cursor: 'pointer' }} onClick={() => inputHandler.removeFromArray('chronic_diseases', index)} />
          </Box>
        ))}
      </Box>
      )}
      <TextField
        id="petallergies"
        label="Болезнь"
        variant="standard"
        name="chronic_diseases"
        type="text"
        onKeyDown={inputHandler.arrayInputHandler}
      />
    </Box>
  );
}

export default PetformStep2;
