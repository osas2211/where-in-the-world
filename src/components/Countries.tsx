import React from 'react'
import { Search } from './Search'
import { Container, Grid } from '@mui/material'
import { Filter } from './Filter'

export const Countries:React.FC = () => {
  return (
    <div className='countries'>
        <Container>
            <Grid container justifyContent={"space-between"} alignItems={"center"} spacing={4}>
                <Grid item xs={12} lg={4}>
                    <Search />
                </Grid>
                <Grid item xs={6} lg={3} justifySelf={"flex-end"}>
                    <Filter />
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}
