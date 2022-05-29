import React from 'react'
import { Card, CardMedia, CardContent, Typography, Grid, Box } from "@mui/material"
import photo from "./img.jpg"
import { Link } from "react-router-dom"

export const CountryCard = () => {
  return (
    <Grid item xs={ 10 } lg={ 3 } md={ 4 } sm={ 6 }>
        <Link to={"/details"}>
            <Card sx={{ maxWidth: "100%" }}>
                <CardMedia 
                    component = { "img" }
                    image={ photo }
                    height={"45%"}
                    alt="country img"
                />
                <CardContent>
                    <Typography gutterBottom variant={"h6"} fontWeight={"bold"} sx={{marginY: "1rem"}}>
                        Nigeria
                    </Typography>
                    <Box sx={{
                    
                    }}>
                        <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                            Population: 
                            <span style={{fontWeight: "normal", marginLeft: "4px"}}>200,000,000</span>
                        </Typography>
                        <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                            Region: 
                            <span style={{fontWeight: "normal", marginLeft: "4px"}}>Africa</span>
                        </Typography>
                        <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                            Capital: 
                            <span style={{fontWeight: "normal", marginLeft: "4px"}}>Lagos</span>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    </Grid>
  )
}
