import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'

interface BaseTorneoProps {
  imagen: string
  fechaHora: Date
  lugar: string
  descripcion: string
}

const BaseTorneo: React.FC<BaseTorneoProps> = ({
  imagen,
  fechaHora,
  lugar,
  descripcion,
}) => {
  // Formatear fecha y hora en español local
  const fechaFormateada = fechaHora.toLocaleDateString('es-DO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const horaFormateada = fechaHora.toLocaleTimeString('es-DO', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <Card
      sx={{
        maxWidth: 800,
        margin: '2rem auto',
        backgroundColor: '#1a1a1a',
        color: 'white',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        '@media (max-width: 600px)': {
          maxWidth: '100%',
          borderRadius: 0,
      },
      }}
    >
      <CardMedia
        component="img"
        image={imagen}
        alt="Imagen del torneo"
        sx={{
          height: 300,
          objectFit: 'cover',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          {lugar}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
          <Typography variant="body1">📅 {fechaFormateada}</Typography>
          <Typography variant="body1">🕒 {horaFormateada}</Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}
        >
          {descripcion}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BaseTorneo
