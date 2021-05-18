import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  Typography,
  Theme,
  FormLabel,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { Autocomplete, Pagination, ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DesignPreviewScreen: React.FC = () => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState('test1');
  const [toggleBtnValue, setToggleBtnValue] = useState('test1');

  const handleChangeTab = (event: any, newValue: any) => {
    setTabValue(newValue);
  };
  const handleChangeToggleBtn = (event: any, newValue: any) => {
    setToggleBtnValue(newValue);
  };

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

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
  ];

  const createData = (orderName: any, name: any, phone: any, complex: any, corpus: any) => {
    return { orderName, name, phone, complex, corpus };
  };

  const rows = [createData('5312432', 'Градостроительный Д. В.', '+7 (904) 234-32-99', 'ЦДС «Елизаровский»', '3')];

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

        <Box display="flex" flexDirection="column" mb={8}>
          {renderTypography()}
        </Box>

        <Box display="flex" flexDirection="column" mb={6}>
          <Box mb={3}>
            <Typography variant="h2">Buttons</Typography>
          </Box>

          <Box display="flex">
            <Box mr={4}>
              <Button variant="contained" color="primary">
                Contained
              </Button>
            </Box>

            <Box mr={4}>
              <Button variant="outlined" color="primary">
                Outlined
              </Button>
            </Box>

            <Box mr={4}>
              <Button variant="text">Text</Button>
            </Box>

            <Box>
              <Button variant="text" color="primary">
                Text primary
              </Button>
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" mb={6}>
          <Box mb={3}>
            <Typography variant="h2">Paper</Typography>
          </Box>

          <Paper className={classes.paper} variant="outlined">
            Paper
          </Paper>
        </Box>

        <Box display="flex" flexDirection="column" mb={6}>
          <Box mb={3}>
            <Typography variant="h2">Form</Typography>
          </Box>

          <Box>
            <FormLabel>Form label</FormLabel>

            <TextField fullWidth variant="outlined" size="small" name="test" placeholder="Placeholder" />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" mb={6}>
          <Box mb={3}>
            <Typography variant="h2">Autocomplete</Typography>
          </Box>

          <Box>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={top100Films}
              getOptionLabel={(option: any) => option.title}
              defaultValue={[top100Films[2]]}
              filterSelectedOptions
              renderInput={params => (
                <TextField {...params} variant="outlined" label="Test autocomplete" placeholder="Favorites" />
              )}
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" mb={6}>
          <Box mb={3}>
            <Typography variant="h2">Toggle buttons</Typography>
          </Box>

          <Box>
            <ToggleButtonGroup onChange={handleChangeToggleBtn} exclusive value={toggleBtnValue}>
              <ToggleButton value="test1">Test 1</ToggleButton>
              <ToggleButton value="test2">Test 2</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" mb={6}>
          <Box mb={3}>
            <Typography variant="h2">Tabs</Typography>
          </Box>

          <Box>
            <Paper square>
              <Tabs
                onChange={handleChangeTab}
                value={tabValue}
                indicatorColor="primary"
                textColor="primary"
                aria-label="disabled tabs example"
              >
                <Tab value="test1" label="Test tab 1" />
                <Tab value="test2" label="Test tab 2" />
                <Tab value="test3" label="Test tab 3" />
              </Tabs>
            </Paper>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" mb={6}>
          <Box mb={3}>
            <Typography variant="h2">Accordion</Typography>
          </Box>

          <Box>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Accordion 1</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" mb={6}>
          <Box mb={3}>
            <Typography variant="h2">Table</Typography>
          </Box>

          <Box>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">№ брони</TableCell>
                    <TableCell align="left">ФИО</TableCell>
                    <TableCell align="left">телефон</TableCell>
                    <TableCell align="left">жк</TableCell>
                    <TableCell align="left">корпус</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row: any) => (
                    <TableRow key={row.name}>
                      <TableCell align="left">{row.orderName}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
                      <TableCell align="left">{row.complex}</TableCell>
                      <TableCell align="left">{row.corpus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" mb={6}>
          <Box mb={3}>
            <Typography variant="h2">Pagination</Typography>
          </Box>

          <Box>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DesignPreviewScreen;

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 300,
    padding: 20,
    cursor: 'pointer',
    transition: 'all .4s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  table: {
    minWidth: 650,
  },
}));
