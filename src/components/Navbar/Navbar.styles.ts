// src/components/Navbar/Navbar.styles.ts
import styled from 'styled-components'
import { Toolbar, Typography, IconButton, Box } from '@mui/material'

export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow-x: hidden; /* 🚫 Prevent horizontal scroll */
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`

export const Logo = styled(Typography)`
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
`

export const MenuContainer = styled(Box)`
  display: flex;
  gap: 24px;

  @media (max-width: 900px) {
    display: none;
  }
`

export const MobileMenuButton = styled(IconButton)`
  color: white;
  display: none !important;

  @media (max-width: 900px) {
    display: flex !important;
  }
`

export const RightLogos = styled(Box)`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 900px) {
    margin-top: 8px;
    width: 100%;
    justify-content: center;
  }
`
