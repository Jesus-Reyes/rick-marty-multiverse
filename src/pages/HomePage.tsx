
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { ActionButton } from '../components';
import { CharactersGrid } from '../containers';
import { CardCharacter } from "../components";
import { useGetCharactersQuery } from '../api/rickMortyApi';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { HistoryDataState, nextPage, previousPage } from '../store/historyDataSlice';
import { NavBar } from '../components/NavBar';

export const HomePage = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { lastPage } = useSelector<RootState, HistoryDataState>((store) => store.historyData);

  const { data: characters, isLoading, isFetching } = useGetCharactersQuery(lastPage);


  const handleSearch = (newSearch:string) => {
    
  };


  if (isFetching || isLoading) {
    return <LoadingIndicator />
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <NavBar onSearch={handleSearch}/>
      <ActionButton onClick={ () => dispatch(previousPage()) } position='left'>
        <KeyboardArrowLeftIcon sx={{ color: 'white', fontSize: '2rem' }} />
      </ActionButton>

      <CharactersGrid>
        {characters?.results.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </CharactersGrid>

      <ActionButton onClick={() => dispatch(nextPage())} position='right'>
        <KeyboardArrowRightIcon sx={{ color: 'white', fontSize: '2rem' }} />
      </ActionButton>
    </Box>
  );
};