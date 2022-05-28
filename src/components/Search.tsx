import React from 'react'
import {Paper, InputBase, TextField, IconButton} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"

export const Search:React.FC = () => {
  return (
    <Paper
        component={"form"}
        sx={{ p: "2px 8px", display: "flex", alignItems: "center", boxShadow: "none" }}
    >
        <IconButton

        >
            <SearchIcon />
        </IconButton>
        <InputBase 
            placeholder='Search for a country...'
            sx={{ml: 1,  width: "100%"}}
        />
    </Paper>
  )
}
