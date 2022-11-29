import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Container from '../Container'
import SortBySelectBox from './components/SortBySelectBox/SortBySelectBox'
import Product from '../MinimallyDesigned/MinimallyDesigned'

function FiltersWithDropdown({ products }) {
  const theme = useTheme();
  const [allProducts, setAllProducts] = useState(products || []) 
  return (
    <Container>
      <Box>
        <Typography variant="h4" fontWeight={700} marginTop={2}>
          Expenses
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        flexDirection={{ xs: 'column', md: 'row' }}
        marginY={4}
      >
        <Box display="flex" alignItems="center" marginTop={{ xs: 1, md: 0 }}>
          <Typography sx={{ whiteSpace: 'nowrap' }} marginRight={1}>
            Sort by Year
          </Typography>
          <SortBySelectBox setfilteredProducts={setAllProducts} />
        </Box>
      </Box>
      <Box borderRadius={2} border={`4px dashed ${theme.palette.divider}`}  >
        <Product products={allProducts} />
      </Box>
    </Container>
  )
}

export default FiltersWithDropdown
