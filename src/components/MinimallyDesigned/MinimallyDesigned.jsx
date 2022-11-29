import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { alpha, useTheme } from '@mui/material/styles'

import Container from '../Container'

function Product( { products }) {
  const theme = useTheme();

  const dateFormat = (date) => {
    return date.split("T")[0];
  }

  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((item, i) => (
          <Grid item xs={12} key={i}>
            <Box display="block" width={1} height={1}>
              <Card
                sx={{
                  width: 1,
                  height: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'none',
                  bgcolor: 'transparent',
                  backgroundImage: 'none',
                }}
              >
                <Box
                  marginTop={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography fontWeight={700} sx={{ textTransform: 'uppercase' }}>
                    {item.title}
                  </Typography>
                  <Typography fontWeight={700}>{item.amount}</Typography>
                  <Typography fontWeight={700}>{dateFormat(item?.createdAt)}</Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Product
