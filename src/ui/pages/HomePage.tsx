import { useGetCharactersQuery } from "../../domain/store/characters/rickMortySlice"
import { useEffect, useState } from 'react';
import { CardCharacter } from "../components/CardCharacter";
import { Box, IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';




export const HomePage = () => {

  const savedPage = Number(localStorage.getItem('currentPage')) || 1;
  
  const [currentPage, setCurrentPage] = useState(savedPage);
  const { data: characters, isLoading , isFetching} = useGetCharactersQuery(currentPage);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);


  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

 
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }  

  console.log("HOmePage !!! ");
  

  return (
    <Box sx={{ position: 'relative' }}>
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: 'fixed',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo más oscuro en hover
          }
        }}
      >
        <KeyboardArrowLeftIcon sx={{ color: 'white', fontSize: '2rem' }} />
      </IconButton>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
        gap: '16px',
        padding: '16px',
        // Añade margen a los lados para el espacio de los botones de navegación
        marginLeft: '40px',
        marginRight: '40px',
      }}>
        {characters?.results.map((character) => (
       
            <CardCharacter key={character.id} character={character} />
       
        ))}
      </Box>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'fixed',
          right: 16,
          top: '50%',
          
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }
        }}
      >
        <KeyboardArrowRightIcon sx={{ color: 'white', fontSize: '2rem' }} />
      </IconButton>
    </Box>
  );
};