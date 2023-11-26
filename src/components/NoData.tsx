import { Box } from '@mui/material';

import { FC } from 'react'
interface Props {


  msg: string
}


export const NoData: FC<Props> = ({ msg }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h3>{msg}</h3>
    </Box>
  )
}
