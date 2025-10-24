// src/components/Navbar/Navbar.tsx
import React, { useState, useRef } from 'react'
import { AppBar, Button, Menu, MenuItem, IconButton, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {
  StyledToolbar,
  Logo,
  MenuContainer,
  MobileMenuButton,
  RightLogos,
} from './Navbar.styled'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [menuType, setMenuType] = useState<string>('')
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(
    null
  )
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const navigate = useNavigate()

  const handleOpenMenu = (
    event:
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLButtonElement>,
    type: string
  ) => {
    setAnchorEl(event.currentTarget as HTMLElement)
    setMenuType(type)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
    setMenuType('')
  }

  const handleKeyClose = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseMenu()
      if (menuType && buttonRefs.current[menuType]) {
        buttonRefs.current[menuType]?.focus()
      }
    }
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null)
  }

  const menuItems: Record<string, string[]> = {
    nosotros: ['Directiva', 'Historia', 'Campeones', 'Estatutos'],
    torneos: ['Noticias', 'Resultados', 'Bases Torneos'],
    aprende: ['Clases', 'Entrenadores'],
  }

  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: '#111', boxShadow: 'none' }}
    >
      <StyledToolbar>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Logo>LOGO AAS</Logo>
        </Link>

        {/* Desktop Menu */}
        <MenuContainer>
          {['nosotros', 'torneos', 'aprende', 'contacto'].map((item) => (
            <Box
              key={item}
              onMouseEnter={(e) =>
                item !== 'contacto' && handleOpenMenu(e, item)
              }
              onMouseLeave={handleCloseMenu}
              sx={{ position: 'relative' }}
            >
              <Button
                ref={(el) => {
                  buttonRefs.current[item] = el
                }}
                sx={{ color: 'white' }}
                aria-controls={menuType === item ? `${item}-menu` : undefined}
                aria-haspopup='true'
                aria-expanded={menuType === item ? 'true' : undefined}
                aria-label={`${item} menu`}
                onClick={() => {
                  if (item === 'contacto') {
                    navigate('/contacto')
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    if (item === 'contacto') {
                      e.preventDefault()
                      navigate('/contacto')
                    }
                    handleOpenMenu(e, item)
                  }
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>

              {menuItems[item] && (
                <Menu
                  id={`${item}-menu`}
                  anchorEl={anchorEl}
                  open={menuType === item}
                  onClose={handleCloseMenu}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  slotProps={{
                    paper: {
                      onMouseLeave: handleCloseMenu,
                      onKeyDown: handleKeyClose,
                      sx: { mt: 0.5 },
                    },
                    list: {
                      role: 'menu',
                      'aria-labelledby': `${item}-button`,
                      autoFocusItem: true,
                    },
                  }}
                  sx={{
                    pointerEvents: 'none',
                    '& .MuiPaper-root': {
                      pointerEvents: 'auto',
                      marginTop: '4px',
                    },
                  }}
                >
                  {menuItems[item].map((subItem) => (
                    <MenuItem
                      key={subItem}
                      component={Link}
                      to={`/${subItem.toLowerCase()}`}
                      onClick={handleCloseMenu}
                    >
                      {subItem}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
          ))}
        </MenuContainer>

        {/* Mobile Menu */}
        <MobileMenuButton onClick={handleMobileMenuOpen}>
          <MenuIcon sx={{ color: 'white' }} />
        </MobileMenuButton>
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
        >
          {Object.keys(menuItems).map((key) => (
            <MenuItem key={key} onClick={handleMobileMenuClose}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </MenuItem>
          ))}
          <MenuItem onClick={handleMobileMenuClose}>Contacto</MenuItem>
        </Menu>

        {/* Logos derecha */}
        <RightLogos>
          <IconButton sx={{ color: 'white' }}>Logo UDESA</IconButton>
          <IconButton sx={{ color: 'white' }}>Logo FDA</IconButton>
        </RightLogos>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
