import styled from 'styled-components'
import { Box, Typography, Button } from '@mui/material'

export const HeroContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  position: relative;
  color: white;

  background-image: url('/hero-bg.png');
  background-size: cover;
  background-position: center top; /* show top part */
  background-repeat: no-repeat;
  background-attachment: fixed; /* optional: nice effect */

  /* Gradient overlay so text is readable */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      rgba(0, 0, 0, 0.4) 10%,  /* slightly darker at top */
      rgba(0, 0, 0, 0.6) 70%
    );
    z-index: 0;
  }

  /* Keep content visible on top of overlay */
  > * {
    position: relative;
    z-index: 1;
  }

`;

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
