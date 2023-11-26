
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { ActionButton, NoData } from '../components';
import { GridContainer } from '../containers';
import { CardCharacter } from "../components";
import { useGetCharactersByNameQuery, useGetCharactersQuery } from '../api/rickMortyApi';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { HistoryDataState, nextPage, previousPage, resetStatePage } from '../store/historyDataSlice';
import { NavBar } from '../components/NavBar';

export const HomePage = () => {

  const [search, setSearch] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const { lastPage } = useSelector<RootState, HistoryDataState>((store) => store.historyData);

  const { data: characters, isLoading: isLoadingCharacters, isFetching } = useGetCharactersQuery(lastPage);
  const { data: searchedCharacters, isLoading: isLoadingSearch, isError: errorSearch, isFetching: isFetchingSearch } = useGetCharactersByNameQuery(search, { skip: !search });


  useEffect(() => {
    if (search) {
      dispatch(resetStatePage())
    }
  }, [search]);

  let displayCharacters = search ? searchedCharacters : characters;

  if (errorSearch || isFetchingSearch) {
    displayCharacters = undefined;
  }

  const handleSearch = (newSearch: string) => setSearch(newSearch);


  return (
    <Box sx={{ position: 'relative' }}>
      <NavBar onSearch={handleSearch} />

      {
        (isLoadingCharacters || isLoadingSearch || isFetching)
          ? <LoadingIndicator />
          : <>
            {
              lastPage > 1 &&
              <ActionButton onClick={() => dispatch(previousPage())} position='left'>
                <KeyboardArrowLeftIcon sx={{ color: 'white', fontSize: '2rem' }} />
              </ActionButton>
            }


            <GridContainer>
              {!displayCharacters && (<NoData msg='Sin Resultados' />)}

              {displayCharacters?.results.map((character) => (
                <CardCharacter key={character.id} character={character} />
              ))}
            </GridContainer>

            {!search &&
              <ActionButton onClick={() => dispatch(nextPage())} position='right'>
                <KeyboardArrowRightIcon sx={{ color: 'white', fontSize: '2rem' }} />
              </ActionButton>
            }

          </>

      }

    </Box>
  );
};