import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { AccountCircle, AccountCircleOutlined, Email, Notifications, QuestionMark, QuestionMarkRounded, Settings, SettingsOutlined, Support } from '@mui/icons-material';
import Themechanger from './Themechanger';

function Topbar() {
  return (
    <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='transparent' elevation={0} sx={{borderBottom:'1px solid #e0e0e0'}}>
            <Toolbar>
                <Image src={'/drive-logo.jpg'} alt='Logo' width={100} height={100}/>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="large" aria-label="Settings" color="inherit" popover='hint'>
                        <SettingsOutlined />
                    </IconButton>
                    <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    >
                        <QuestionMarkRounded />
                    </IconButton>
                    <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    //aria-controls={menuId}
                    aria-haspopup="true"
                    //onClick={handleProfileMenuOpen}
                    color="inherit"
                    >
                        <AccountCircleOutlined />
                    </IconButton>
                    <Themechanger />
                </Box>
            </Toolbar>
            
        </AppBar>
    </Box>
  )
}

export default Topbar