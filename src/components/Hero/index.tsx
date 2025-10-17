import { HeroContainer, HeroContent, HeroTitle, HeroSubtitle, HeroButton } from './Hero.styled'
// import { Button } from '@mui/material'

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Bienvenido a la Asociación de Ajedrez de Santiago</HeroTitle>
        <HeroSubtitle>Promoviendo el ajedrez en nuestra comunidad</HeroSubtitle>
        <HeroButton variant="contained">Ver Torneos</HeroButton>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
