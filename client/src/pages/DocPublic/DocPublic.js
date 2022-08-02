import { Box, Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import BasicCard from '../../components/BasicCard/BasicCard';
import ButtonOne from '../../components/ButtonOne/ButtonOne';
import DocExperience from '../../components/DocExperience/DocExperience';
import DocProfSpecialization from '../../components/DocProfSpecialization/DocProfSpecialization';
import UserCard from '../../components/UserCard/UserCard';
import { getInfoCardThunk } from '../../redux/actions/infoCardAction';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function DoctorPublic() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const vetinfo = useSelector((store) => store.vetinfo);
  React.useEffect(() => {
    dispatch(getInfoCardThunk(id));
  }, []);
  console.log(vetinfo);
  return (
    <Container
      sx={{ max_width: '1000px', py: 3 }}
    >
      <Grid container spacing={2} sx={{ marginTop: '1.5rem' }}>
        <Grid item xs={8}>
          <Item>
            <UserCard guest user={vetinfo} />
            <DocProfSpecialization vetinfo={vetinfo} />
            <DocExperience vetinfo={vetinfo} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><ButtonOne vetinfo={vetinfo} /></Item>
        </Grid>
      </Grid>
    </Container>

  );
}

export default DoctorPublic;
