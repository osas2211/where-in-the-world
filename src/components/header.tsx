import React from 'react'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import {  DarkMode } from "@mui/icons-material"
import { Container } from '@mui/material'


export const Header: React.FC = () => {
  return (
      <header>
        <Container>
          <Grid container justifyContent={"space-between"} paddingY={2}>
            <Typography variant='h5' fontWeight={"bold"}>Where in the World?</Typography>
            <Button variant='text' startIcon={<DarkMode />} color={"inherit"}>Dark Mode</Button>
          </Grid>
        </Container>
      </header>
  )
}
