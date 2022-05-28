import React from 'react'
import { Box, MenuItem, TextField } from '@mui/material'

interface filterOption{
    value: string,
    label: string
}
export const Filter: React.FC = () => {
    const options: filterOption[] = [
        {
            value: "africa",
            label: "Africa"
        },
        {
            value: "america",
            label: "America"
        },
        {
            value: "asia",
            label: "Asia"
        },
        {
            value: "europe",
            label: "Europe"
        },
        {
            value: "oceania",
            label: "Oceania"
        },
    ]

    const [continent, setContinent] = React.useState(options[0].value)
    
  return (
    <Box
        component={"form"}
        noValidate
        autoComplete='off'
        sx={{
            "& .MuiTextField-root": { m: 0, width: "100%", background: "#fff"  }
        }}
    >
        <div>
            <TextField
                id='outlined-select-currency'
                select
                label="Filter by Region"
                value={continent}
                onChange={(e)=> {
                    setContinent(e.target.value)
                }}
                variant="outlined"
            >
                {
                    options.map(option => {
                        return <MenuItem key={option.value} value={option.value}>
                            { option.label }
                        </MenuItem>
                    })
                }
            </TextField>
        </div>
    </Box>
  )
}
