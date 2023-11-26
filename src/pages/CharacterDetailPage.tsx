import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

import CircleIcon from '@mui/icons-material/Circle';
import { Box, Typography, List, ListItem, ListItemIcon, Grid} from '@mui/material';

import { AppDispatch } from "../store";
import { Character } from "../interfaces";
import { addVisited } from "../store/visitedCharactersSlice";
import { useGetLocationQuery } from "../api/rickMortyApi";
import { CloseButton, LoadingIndicator } from "../components";

interface LocationState {

  character: Character

}


export const CharacterDetailPage: FC = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const state = location.state as LocationState;

  useEffect(() => {
    if (!location.state) {
      navigate('/')
    }else{
      dispatch(addVisited(state.character))
    }
  }, [])

  if (!state ) {
    return <LoadingIndicator />
  }

  const { character } = state;


  const { data: originData, isLoading:loadingOrigin } = useGetLocationQuery(character.origin.url, { skip: !character.origin.url });
  const { data: locationData , isLoading: loadingLocation} = useGetLocationQuery(character.location.url, { skip: !character.location.url });


  if (loadingOrigin || loadingLocation ) {
    return <LoadingIndicator />
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

      <CloseButton handleClick={() => navigate(-1)}/>

    </Box>
  );
}
