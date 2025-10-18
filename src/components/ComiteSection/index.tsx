import { Box, Typography } from '@mui/material'

function ComiteSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        backgroundColor: '#0a0f24',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Plancha Gestión 2025 - 2027
      </Typography>
      <Box
        component="img"
        src="/comite.jpeg"
        alt="Plancha Asociación de Ajedrez de Santiago 2025 - 2027"
        sx={{
          width: '100%',
          maxWidth: 800,
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        }}
      />
    </Box>
  )
}

export default ComiteSection
