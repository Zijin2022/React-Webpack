import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

function userEdit() {
  const navigate = useNavigate()

  const gotoHome = () => {
    navigate('/')
  }
  
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        Error Page
        <Stack spacing={2} direction="row">
            <Button onClick={gotoHome} variant="contained">gotoHome</Button>
        </Stack>
    </Box>
  )
}

export default userEdit