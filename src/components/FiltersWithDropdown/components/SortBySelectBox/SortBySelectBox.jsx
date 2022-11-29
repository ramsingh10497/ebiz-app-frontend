import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { getAllExpensesMethod } from '../../../../../utils/serverRequest'

function SortBySelectBox({ setfilteredProducts }) {
  const theme = useTheme()
  const [sortBy, setSortBy] = useState("Review")

  const handleSelectChange = async (event) => {
    setSortBy(event.target.value)
   const updatedData = await getAllExpensesMethod(event.target.value)
   console.log(updatedData, "updatedData")
   setfilteredProducts(updatedData)
  }

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={sortBy}
          onChange={handleSelectChange}
          labelId="demo-simple-select-label"
          sx={{
            '.MuiSelect-select.MuiSelect-outlined': {
              paddingY: '9px !important',
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.divider,
            },
          }}
        >
          <MenuItem value={"2022"}>2022</MenuItem>
          <MenuItem value={"2021"}>2021</MenuItem>
          <MenuItem value={"2020"}>2020</MenuItem>
          <MenuItem value={"2019"}>2019</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SortBySelectBox
