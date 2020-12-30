import { FC } from 'react';
import { Box, Container, Typography } from '@material-ui/core';

const Footer: FC = () => {
    return (
        <Container maxWidth="xl">
            <Box py={3} minHeight={60}>
                <Typography>Footer</Typography>
            </Box>
        </Container>
    );
};

export default Footer;
