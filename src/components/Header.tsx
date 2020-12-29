import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

const Header: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <Box py={3}>
                <Typography>Header</Typography>
            </Box>
        </Container>
    );
};

export default Header;
