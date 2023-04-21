import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';
import { Map, Placemark, YMaps } from 'react-yandex-maps';

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Card sx={{ backgroundColor: 'whitesmoke', flex: 1 }}>
          <CardHeader title='Daily income' />
          <CardContent>
            <Typography sx={{ fontSize: '30px' }} color='green'>
              $123
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: 'whitesmoke', flex: 1 }}>
          <CardHeader title='Daily outcome' />
          <CardContent>
            <Typography color='red' sx={{ fontSize: '30px' }}>
              $23.23
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: 'whitesmoke', flex: 1 }}>
          <CardHeader title='Daily orders' />
          <CardContent>
            <Typography color='blue' sx={{ fontSize: '30px' }}>
              123000
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <YMaps>
          <div>
            <Map
              width='98.7%'
              height='100%'
              defaultState={{ center: [41.311151, 69.279737], zoom: 6 }}>
              <Placemark
                geometry={[41.311151, 69.279737]}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              />
            </Map>
          </div>
        </YMaps>
      </Box>
    </Box>
  );
};

export default Dashboard;
