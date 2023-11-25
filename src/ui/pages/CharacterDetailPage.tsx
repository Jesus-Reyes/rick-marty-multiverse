import { FC, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText , Grid} from '@mui/material';


import { Character } from '../../domain/interfaces';
import { useGetLocationQuery } from "../../domain/store/characters/rickMortySlice";


interface LocationState {

  character: Character

}


export const CharacterDetailPage: FC = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  const handleCloseClick = () => navigate(-1);

  useEffect(() => {
    if (!location.state) {
      navigate('/')
    }
  }, [])

  if (!state) {
    return <div>Loading...</div>;
  }

  const { character } = state;


  const { data: originData, isLoading:loadingOrigin } = useGetLocationQuery(character.origin.url, { skip: !character.origin.url });
  const { data: locationData , isLoading: loadingLocation} = useGetLocationQuery(character.location.url, { skip: !character.location.url });


  if (loadingOrigin || loadingLocation ) {
    return <div>Loading...</div>;
  }


  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', m: 2, p: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Imagen del personaje */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={character.image}
              alt={character.name}
              style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
            />
          </Box>
        </Grid>

        {/* Detalles del personaje */}
        <Grid item xs={12} md={2}>
          <Typography variant="h5" fontWeight="fontWeightBold">{character.name}</Typography>
          <Typography variant="subtitle1">Status: {character.status}</Typography>
          <Typography variant="subtitle1">Species: {character.species}</Typography>
          <Typography variant="subtitle1">Type: {character.type || 'Unknown'}</Typography>
          <Typography variant="subtitle1">Gender: {character.gender}</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" fontWeight="fontWeightBold">Origen {!originData && ': Unknown' }</Typography>
            {originData && (
              <List dense>
                <ListItem disablePadding >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <CircleIcon style={{ color: 'white' }} sx={{ fontSize: "15px" }} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">Nombre: {originData.name}</Typography>
                </ListItem>
                <ListItem disablePadding >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <CircleIcon style={{ color: 'white' }} sx={{ fontSize: "15px" }} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">Typo: {originData.type}</Typography>
                </ListItem>
                <ListItem disablePadding >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <CircleIcon style={{ color: 'white' }} sx={{ fontSize: "15px" }} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">Dimension: {originData.dimension}</Typography>
                </ListItem>
              </List>
            )}
            <Typography variant="h6" fontWeight="fontWeightBold">Ubicación Actual {!locationData && ': Unknown' }</Typography>

            {locationData && (
              <List dense>
                <ListItem disablePadding >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <CircleIcon style={{ color: 'white' }} sx={{ fontSize: "15px" }} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">Nombre: {locationData.name}</Typography>
                </ListItem>
                <ListItem disablePadding >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <CircleIcon style={{ color: 'white' }} sx={{ fontSize: "15px" }} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">Typo: {locationData.type}</Typography>
                </ListItem>
                <ListItem disablePadding >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <CircleIcon style={{ color: 'white' }} sx={{ fontSize: "15px" }} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">Dimension: {locationData.dimension}</Typography>
                </ListItem>
              </List>
            )}


          </Box>
        </Grid>

        
      </Grid>

      {/* Botón para volver a la página anterior */}
      <IconButton
        color="warning"
        onClick={handleCloseClick}
        sx={{ position: 'absolute', right: '8px', top: '8px' }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
}
