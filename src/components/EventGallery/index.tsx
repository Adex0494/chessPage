import { Box, Typography } from '@mui/material'

const eventImages = [
  '/events/event1.jpg',
  '/events/event2.jpg',
  '/events/event3.jpg',
  '/events/event4.jpg',
  '/events/event5.jpg',
  '/events/event6.jpg',
  '/events/event7.jpg',
  '/events/event8.jpg',
  '/events/event9.jpg',
  '/events/event10.jpg',
  '/events/event11.jpg',
  '/events/event12.jpg',
  '/events/event13.jpg',
  '/events/event14.jpg',
  '/events/event15.jpg',
  '/events/event16.jpg',
]

export default function EventGallery() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 6,
        backgroundColor: '#fafafa',
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
      >
        Eventos Recientes
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          gap: 3,
          width: '90%',
          maxWidth: '1200px',
        }}
      >
        {eventImages.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Evento ${index + 1}`}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.03)' },
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
