import React from 'react';

import { ErrorMessage, Form, Formik } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import LoadingButton from '@mui/material/Button';
import * as yup from 'yup';
import { Divider, List, ListItem, Typography } from '@mui/material';

const DrawerCom = (props) => {
  const validationSchema = yup.object({
    moneyAmount: yup
      .string()
      .required('Amount of money field is required,please enter this field'),
    reason: yup
      .string()
      .required('Reason field is required,please enter this field'),
    type: yup
      .string()
      .required('Type field is required, please enter this field'),
  });

  return (
    <Drawer
      sx={{
        display: { xs: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 340 },
      }}
      anchor='right'
      open={props.open}
      onClose={props.onClose}>
      <List
        sx={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
        }}>
        <ListItem sx={{ marginTop: '90px' }}>
          <Typography>Income-outcome add form</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Box sx={{ width: '100%' }}>
            <Formik
              initialValues={props.formInitialValues}
              onSubmit={(values) => {
                props.handleSubmit(values);
              }}
              validationSchema={validationSchema}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Form
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}>
                  <TextField
                    onBlur={handleBlur}
                    label='Money amount'
                    type='text'
                    name='moneyAmount'
                    onChange={handleChange}
                    value={values.moneyAmount}
                  />
                  {errors.moneyAmount && touched.moneyAmount}
                  <ErrorMessage name='moneyAmount' component='div'>
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                  <TextField
                    onBlur={handleBlur}
                    label='Reason'
                    type='text'
                    name='reason'
                    onChange={handleChange}
                    value={values.reason}
                  />
                  {errors.reason && touched.reason}
                  <ErrorMessage name='reason' component='div'>
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                  <TextField
                    onBlur={handleBlur}
                    label='Type'
                    type='text'
                    name='type'
                    value={props.typeOfPay}
                  />
                  {errors.type && touched.type}
                  <ErrorMessage name='type' component='div'>
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                  <LoadingButton
                    onClick={() => {
                      props.onClose();
                      props.handleSubmit(values);
                    }}
                    variant='contained'>
                    Submit
                  </LoadingButton>
                </Form>
              )}
            </Formik>
          </Box>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerCom;
