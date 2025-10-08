import React, { useState, useRef } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from '@mui/material'

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [menuType, setMenuType] = useState<string>('')
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setAnchorEl(event.currentTarget)
    setMenuType(type)
  }

  const handleKeyboardOpen = (event: React.KeyboardEvent<HTMLButtonElement>, type: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setAnchorEl(event.currentTarget)
      setMenuType(type)
    }
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
    setMenuType('')
  }

  const handleKeyClose = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseMenu()
      // Return focus to button
      if (menuType && buttonRefs.current[menuType]) {
        buttonRefs.current[menuType]?.focus()
      }
    }
  }

  const menuItems: Record<string, string[]> = {
    nosotros: ['Directiva', 'Historia', 'Campeones', 'Estatutos'],
    torneos: ['Noticias', 'Resultados', 'Bases Torneos'],
    aprende: ['Clases', 'Entrenadores'],
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#111',
        left: 0,
        right: 0,
        width: '100%',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo AAS */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          LOGO AAS
        </Typography>

        {/* Menús centrales */}
        <Box sx={{ display: 'flex', gap: 3 }}>
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
                aria-haspopup="true"
                aria-expanded={menuType === item ? 'true' : undefined}
                aria-label={`${item} menu`}
                onKeyDown={(e) => handleKeyboardOpen(e, item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>

              {/* Submenu */}
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
                  }}
                  sx={{
                    pointerEvents: 'none',
                    '& .MuiPaper-root': {
                      pointerEvents: 'auto',
                      marginTop: '4px',
                    },
                  }}
                  MenuListProps={{
                    role: 'menu',
                    'aria-labelledby': `${item}-button`,
                    autoFocusItem: true,
                  }}
                >
                  {menuItems[item].map((subItem, idx) => (
                    <MenuItem
                      key={subItem}
                      onClick={handleCloseMenu}
                      role="menuitem"
                      tabIndex={idx === 0 ? 0 : -1}
                    >
                      {subItem}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
          ))}
        </Box>

        {/* Logos derecha */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton sx={{ color: 'white' }}>Logo UDESA</IconButton>
          <IconButton sx={{ color: 'white' }}>Logo FDA</IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
