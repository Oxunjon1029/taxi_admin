import Box from '@mui/material/Box';
import React, { useState } from 'react';
import {
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import DrawerCom from '../components/DrawerCom.tsx';
import Paper from '@mui/material/Paper';
import { FormValue } from '../config/interfaces/FormValue';
import { useGetAllDataQuery } from '../config/redux/reducers/apiSlice';
let rows = [
  {
    id: 1111,
    date: '21.4.2023',
    moneyAmount: '$12.12',
    accountantName: 'Oxunjon Abdusalomov',
    type: 'kirim',
    reason: 'Sotib olindi',
  },
  {
    id: 12221,
    date: '21.4.2023',
    moneyAmount: '$12.12',
    accountantName: 'Oxunjon Abdusalomov',
    type: 'kirim',
    reason: 'Sotib olindi',
  },
  {
    id: 1123311,
    date: '21.4.2023',
    moneyAmount: '$12.12',
    accountantName: 'Oxunjon Abdusalomov',
    type: 'kirim',
    reason: 'Sotib olindi',
  },
];
const IncomeOutcome = () => {
  let { data, error, isLoading } = useGetAllDataQuery('');
  let allData = data;
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOPen] = useState(false);
  const [typeOfPay, setTypeOfPay] = useState('');
  const [formInitialValues, setFormInitialValues] = useState({
    moneyAmount: '',
    reason: '',
    type: '',
  });
  const toggleDrawer = (newOpen: boolean, type: string) => {
    setOpen(newOpen);
    setTypeOfPay(type);
    setFormInitialValues({ moneyAmount: '', reason: '', type });
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const UUID = () => Math.random().toString().substring(0, 100);
  const date = new Date();
  const dateStr =
    date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();

  const handleSubmit = (values: FormValue) => {
    const newItems = {
      id: parseInt(UUID() + '0'),
      date: dateStr,
      accountantName: 'John Watson',
      ...values,
    };

    rows.push(newItems);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}>
        <CircularProgress sx={{ minWidth: 30 }} />
      </Box>
    );
  }
  if (error) {
    setSnackbarOPen(true);
    return (
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        message='Something went wrong'
      />
    );
  }

  if (data) {
    return (
      <Box sx={{ height: 600, width: '100%' }}>
        <Box sx={{ display: 'flex', flex: 1, gap: '10px' }}>
          <Button
            onClick={() => toggleDrawer(true, 'kirim')}
            variant='contained'>
            Kirim
          </Button>
          <Button
            onClick={() => toggleDrawer(true, 'chiqim')}
            variant='contained'>
            Chiqim
          </Button>
        </Box>
        <TableContainer component={Paper} sx={{ marginTop: '30px' }}>
          <Table aria-label='customized table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Accountant Name</TableCell>
                <TableCell>Money amount</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? allData?.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : allData
              )?.map((row) => {
                let data = [...row?.items, ...rows];
                return (
                  <React.Fragment key={row?.id + '1'}>
                    {data?.map((item) => (
                      <TableRow key={item?.id}>
                        <TableCell>{item?.id}</TableCell>
                        <TableCell>{item?.date}</TableCell>
                        <TableCell>{item?.accountantName}</TableCell>
                        <TableCell>{item?.moneyAmount}</TableCell>
                        <TableCell sx={{ maxWidth: 450 }}>
                          {item?.reason}
                        </TableCell>
                        <TableCell>{item?.type}</TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={allData?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <DrawerCom
          typeOfPay={typeOfPay}
          formInitialValues={formInitialValues}
          open={open}
          onClose={() => setOpen(false)}
          handleSubmit={handleSubmit}
        />
      </Box>
    );
  }
};

export default IncomeOutcome;
