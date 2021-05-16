import { Box, Container, Typography } from '@material-ui/core';

const DesignPreviewScreen: React.FC = () => {
  const typographyVariants = [
    { variant: 'h1' },
    { variant: 'h2' },
    { variant: 'h3' },
    { variant: 'h4' },
    { variant: 'h5' },
    { variant: 'body1' },
    { variant: 'body2' },
    { variant: 'button' },
    { variant: 'caption' },
  ];

  const renderTypography = () => {
    return (
      <Box>
        {typographyVariants.map(item => (
          <Box display="flex" mb={2}>
            <Box mr={2}>
              <Typography variant={item.variant as any}>{item.variant}</Typography>
            </Box>

            <Box>
              <Typography variant={item.variant as any}>Тестовый текст</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Container maxWidth="xl">
      <Box mb={5}>
        <Typography variant="h1">UI-kit preview</Typography>
      </Box>

      <Box>
        <Box mb={3}>
          <Typography variant="h2">Typography</Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          {renderTypography()}
        </Box>
      </Box>
    </Container>
  );
};

export default DesignPreviewScreen;
