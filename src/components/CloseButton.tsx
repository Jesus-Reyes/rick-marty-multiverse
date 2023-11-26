import { FC } from 'react'

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


interface Props {
  handleClick: () => void
}


export const CloseButton: FC<Props> = ({ handleClick }) => {
  return (
    <IconButton
      color="warning"
      onClick={handleClick}
      sx={{ position: 'absolute', right: '8px', top: '8px' }}
    >
      <CloseIcon />
    </IconButton>
  )
}
