'use client';

import { AppBar, Box, Link as MuiLink, Toolbar, Typography } from '@mui/material';

export default function NavBar() {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar sx={{ flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', width: '100%' }}>
                <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    sx={{ mt: { xs: 1.5, md: 0 } }}
                >
                    <MuiLink href="/" underline="hover" color="inherit">
                        Pdnode Team
                    </MuiLink>
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mt: { xs: 2, md: 0 } }}>
                    <MuiLink href="/announcement" underline="hover" color="inherit">
                        Announcements
                    </MuiLink>
                    {/* 如果有更多导航链接可以在这里添加 */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
