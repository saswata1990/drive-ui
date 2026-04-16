"use client";
import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useTheme } from 'next-themes'
import React from 'react'

function Themechanger() {
    const { theme, setTheme } = useTheme()
  return (
    <div>
        <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    //aria-controls={menuId}
                    aria-haspopup="true"
                    //onClick={handleProfileMenuOpen}
                    color="inherit"
                    >
                        {theme === 'light' ? 
                            <DarkMode onClick={() => setTheme('dark')} />
                        : 
                            <LightMode onClick={() => setTheme('light')} />
                        }

                    </IconButton>
    </div>
  )
}

export default Themechanger