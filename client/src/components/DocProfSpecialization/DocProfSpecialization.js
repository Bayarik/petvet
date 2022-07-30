import React from 'react';
import { Box } from '@mui/material';

function DocProfSpecialization() {
  return (
    <>
      <Box sx={{ width: '90%', margin: 1 }}>
        <div className="profile" style={{ display: 'flex' }}>
          <div style={{ margin: 10 }}>Кого лечу:</div>
          <div style={{ margin: 10 }}>Кошки, собаки, хомячки</div>
        </div>
      </Box>
      <Box sx={{ width: '90%', margin: 1 }}>
        <div className="specialization" style={{ display: 'flex' }}>
          <div style={{ margin: 10 }}>Специализация:</div>
          <div style={{ margin: 10 }}>Хирургия</div>
        </div>
      </Box>
    </>

  );
}

export default DocProfSpecialization;
