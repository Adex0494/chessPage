import BaseTorneo from '../../components/BaseTorneo/BaseTorneo'

function BasesTorneos() {
  const torneos = [
    {
      imagen: '/torneo.png',
      fechaHora: new Date('2025-10-30T09:00:00'),
      lugar: 'Club de Ajedrez Santiago',
      descripcion:
        'Ritmo de juego: 15+10\nPartidas: 6 rondas suizas\nPremios: Medallas y trofeos\nInscripción: Gratis para miembros',
    },
    {
      imagen: '/torneo.png',
      fechaHora: new Date('2025-11-15T10:30:00'),
      lugar: 'Centro Cultural León',
      descripcion:
        'Ritmo de juego: 90+30\nPartidas: 5 rondas\nPremios: 1er lugar $10,000 RD\nInscripción: 500 RD',
    },
  ]

  return (
    <div>
      {torneos.map((t, index) => (
        <BaseTorneo key={index} {...t} />
      ))}
    </div>
  )
}

export default BasesTorneos
