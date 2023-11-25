// CardCharacter.tsx
import { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { Character } from '../../domain/interfaces';
import { useNavigate } from 'react-router-dom';

export const CardCharacter: FC<{ character: Character }> = ({ character }) => {

  const navigate = useNavigate();

  const handleCharacterClick = (character: Character) => {
    navigate(`/character/${character.name}`, { state: { character } })
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => handleCharacterClick(character)}>
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        sx={{
          height: '100%', // Asegura que la imagen cubra toda la altura de la tarjeta
          width: '100%', // Asegura que la imagen cubra todo el ancho de la tarjeta
          objectFit: 'fill' // Asegura que la imagen cubra el espacio disponible sin distorsionarse
        }}
      />
      
    </Card>
  );
};
