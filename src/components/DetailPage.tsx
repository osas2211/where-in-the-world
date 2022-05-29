import React from 'react'
import { Grid, Button, Container, Box, Typography } from "@mui/material"
import { ArrowBackSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import photo from "./img.jpg"

export const DetailPage = () => {
    const navigateBackwards = useNavigate()
  return (
    <Container sx={{ marginY: "3rem"}}>
        <Button 
            startIcon={<ArrowBackSharp />} 
            sx={{ boxShadow: "1px 2px 5px rgba(20, 20, 20, 0.2)", paddingX: "1rem" }}
            onClick = {(e) => navigateBackwards(-1)}
        >
            Back
        </Button>

        <Box sx={{ marginTop: "4rem" }} component="div">
            <Grid container alignItems={"center"} spacing={12}>
                <Grid item sm={10} md={6} lg={6}>
                    <Box 
                        component={"img"}
                        src={photo}
                        alt="country Img"
                        width={"100%"}
                        height={"22rem"}    
                    />
                </Grid>
                <Grid item container lg={6} sm={10} justifyContent={ 'space-between' } spacing={3} 
                    alignItems={"center"}>
                    <Grid item md={5} sm={10}>
                        <Typography variant="h5" fontWeight={"bold"} marginBottom={3}>Belgium</Typography>
                        <Box sx={{
                    
                        }}>
                            <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                                Native Language: 
                                <span style={{fontWeight: "normal", marginLeft: "4px"}}>Belgie</span>
                            </Typography>
                            <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                                Population: 
                                <span style={{fontWeight: "normal", marginLeft: "4px"}}>200,000,000</span>
                            </Typography>
                            <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                                Region: 
                                <span style={{fontWeight: "normal", marginLeft: "4px"}}>Europe</span>
                            </Typography>
                            <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                                Sub Region: 
                                <span style={{fontWeight: "normal", marginLeft: "4px"}}>Western Europe</span>
                            </Typography>
                            <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                                Capital: 
                                <span style={{fontWeight: "normal", marginLeft: "4px"}}>Brussel</span>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item md={6} sm={10}>
                        <Box>
                            <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                                Top Level Domain: 
                                <span style={{fontWeight: "normal", marginLeft: "4px"}}>.be</span>
                            </Typography>
                            <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                                Currencies:
                                <span style={{fontWeight: "normal", marginLeft: "4px"}}>Euro</span>
                            </Typography>
                            <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                                Language: 
                                <span style={{fontWeight: "normal", marginLeft: "4px"}}>Dutch, French, German</span>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant={ "subtitle2" } fontWeight={"bold"} marginY={0.5}>
                            Border Countries: 
                            <span style={{
                                fontWeight: "normal", 
                                marginLeft: "10px",
                                marginBottom: "10px",
                                boxShadow: "1px 2px 5px rgba(20, 20, 20, 0.2)",
                                display: "inline-block",
                                padding: "0.2rem 1rem",
                            }}>France</span>
                            <span style={{
                                fontWeight: "normal", 
                                marginLeft: "10px",
                                marginBottom: "10px",
                                boxShadow: "1px 2px 5px rgba(20, 20, 20, 0.2)",
                                display: "inline-block",
                                padding: "0.2rem 1rem",
                            }}>Germany</span>
                            <span style={{
                                fontWeight: "normal", 
                                marginLeft: "10px",
                                marginBottom: "10px",
                                boxShadow: "1px 2px 5px rgba(20, 20, 20, 0.2)",
                                display: "inline-block",
                                padding: "0.2rem 1rem",
                            }}>Netherlands</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}
