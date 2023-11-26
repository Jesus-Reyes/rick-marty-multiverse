
import { CircularProgress, Box } from '@mui/material';

export const LoadingIndicator = () => {  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Ajusta esto según el tamaño de tu CharactersGrid
      }}
    >
      <CircularProgress />
    </Box>
  );
}


