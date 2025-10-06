import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuType, setMenuType] = useState<string>("");

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuType("");
  };

  const menuItems: Record<string, string[]> = {
    nosotros: ["Directiva", "Historia", "Campeones", "Estatutos"],
    torneos: ["Noticias", "Resultados", "Bases Torneos"],
    aprende: ["Clases", "Entrenadores"],
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#111", left:0, right: 0, width: '100%', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo AAS */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          LOGO AAS
        </Typography>

        {/* Menús centrales */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {["nosotros", "torneos", "aprende", "contacto"].map((item) => (
            <Box key={item}>
              <Button
                sx={{ color: "white" }}
                onMouseEnter={(e) =>
                  item !== "contacto" && handleOpenMenu(e, item)
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>

              {/* Submenú */}
              {menuItems[item] && (
                <Menu
                  anchorEl={anchorEl}
                  open={menuType === item}
                  onClose={handleCloseMenu}
                  MenuListProps={{
                    onMouseLeave: handleCloseMenu,
                  }}
                >
                  {menuItems[item].map((subItem) => (
                    <MenuItem key={subItem} onClick={handleCloseMenu}>
                      {subItem}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
          ))}
        </Box>

        {/* Logos derecha */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton sx={{ color: "white" }}>Logo UDESA</IconButton>
          <IconButton sx={{ color: "white" }}>Logo FDA</IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
