import styled from '@mui/system/styled';
import { Box } from '@mui/material';

export const CharactersGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
  gap: '16px',
  padding: '16px',
  marginLeft: '40px',
  marginRight: '40px',
});