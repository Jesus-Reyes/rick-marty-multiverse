import { FC, PropsWithChildren } from 'react'
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';

const StyledIconButton = styled(IconButton)(({ value }) => ({
  position: 'fixed',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  ...(value === 'left' ? { left: 16 } : { right: 16 }),
}));


interface Props {
  onClick: () => void;
  position: 'left' | 'right';
}

export const ActionButton: FC<PropsWithChildren<Props>> = ({ onClick, position, children }) => (
  <StyledIconButton onClick={onClick} value={position}>
    {children}
  </StyledIconButton>
);