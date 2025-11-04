import React from 'react'
import {
  Grid,
  CardContent,
  Typography,
  Box,
  Container,
  Paper
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
   textAlign: 'center'

}))
const Deals = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        pb: 4
      }}
    >
      <Container>
        <Typography
          sx={{
            textAlign: 'center',
            fontFamily: 'Chonburi',
            color: '#1B0B7D',

            p: 2,
            fontSize: { md: '1.7rem', xs: '0.9rem', sm: '1.5rem' }
          }}
        >
          Explore Top Destinations
        </Typography>

        <Box sx={{ flexGrow: 1, p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Item sx={{ boxShadow: 5, borderRadius: 2 }}>
                <DestinationsCard
                  src={'/images/newyork.jpg'}
                  title={' New York'}
                />
              </Item>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Item sx={{ boxShadow: 5, borderRadius: 2 }}>
                <DestinationsCard src={'/images/japan1.jpg'} title={'Japan'} />
              </Item>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Item sx={{ boxShadow: 5, borderRadius: 2 }}>
                <DestinationsCard src={'/images/japan.jpg'} title={'London'} />
              </Item>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Item sx={{ boxShadow: 5, borderRadius: 2 }}>
                <DestinationsCard src={'/images/mexico.jpg'} title={'Mexico'} />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Deals

export const DestinationsCard: React.FC<{ src: string; title: string }> = ({
  src,
  title
}) => {
  return (
    <>
      <Image className='img' src={src} alt='header' height='295' width='345' />
      <CardContent sx={{ py: '0.5rem', pb: '7px !important' }}>
        <Typography
          // className="txt"
          sx={{
            fontSize: { md: '1.2rem', xs: '0.5rem', sm: '0.7rem' },
            pb: { xs: 0.1, sm: 1, md: 1.5 },
            fontWeight: { xs: '2rem', sm: '3rem' },

            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </>
  )
}
