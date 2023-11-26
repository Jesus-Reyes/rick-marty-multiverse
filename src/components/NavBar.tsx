

import { ChangeEvent, FC } from 'react'

import { AppBar, Toolbar, Typography, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetStatePage } from '../store/historyDataSlice';



interface Props {

  onSearch: (search: string) => void

}

export const NavBar: FC<Props> = ({ onSearch }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onSearch(event.target.value)
  };

  const handleVisitedClick = () => {
    navigate('/visited');
  };

  const handleReset = () => dispatch(resetStatePage());

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={handleReset} >
          Rick & Morty Universe
        </Typography>
        <div style={{ flexGrow: 2 }}>
          <SearchIcon />
          <InputBase
            placeholder="Buscar personajes..."
            onChange={handleSearchChange}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <Button color="inherit" onClick={handleVisitedClick}>
          Visitados
        </Button>
      </Toolbar>
    </AppBar>
  );
}
