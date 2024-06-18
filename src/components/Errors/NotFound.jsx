import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'

export default function NotFound() {
  return (
    <Box sx={{
      textAlign: 'center'
    }}>
      <Header></Header>
      <Typography variant='h1'>404 Not found</Typography>
    </Box>
  )
}
