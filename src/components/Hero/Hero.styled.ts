import styled from 'styled-components'
import { Box, Typography, Button } from '@mui/material'

export const HeroContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 90vh;
  background-image: url('/your-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;

  /* dark overlay */
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const HeroContent = styled(Box)`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
`

export const HeroTitle = styled(Typography).attrs({ variant: 'h3'})`
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

export const HeroSubtitle = styled(Typography).attrs({ variant: 'h6' })`
  margin-bottom: 32px;
  color: #ddd;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const HeroButton = styled(Button)`
  background-color: #e53935;
  color: white;
  font-weight: bold;
  padding: 12px 32px;

  &:hover {
    background-color: #c62828;
  }
`
