import { Box, IconButton, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Accordion } from '../../../components';
import FilterMenu from '../../../components/Menus/FilterMenu';
import { formatDistanceToNow, parseISO, sub } from 'date-fns';

const HistoryTitle = () => {
  let min = 1;
  const dateGenerated = `${sub(new Date(), { minutes: min++ }).toISOString()}`;
  let timeAgo = '';
  const date = parseISO(dateGenerated);
  const timePeriod = formatDistanceToNow(date);
  timeAgo = `${timePeriod} ago`;

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      spacing={10}
    >
      <Typography>
        <span style={{ fontWeight: 'bold' }}>{timeAgo}</span> History Added Now
      </Typography>

      <IconButton>Print</IconButton>
    </Stack>
  );
};

const History = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { lg: 'row', sm: 'row', xs: 'column' },
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            margin: { xs: '10px 0', lg: '24px 0' },
            width: { xs: '100%' },
            // flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <TextField
            variant='outlined'
            size='small'
            sx={{
              width: { lg: '320px', xs: '55%' },
              // height: '40px',
              borderRadius: '4px',
              marginRight: '10px',
              mb: { xs: 1 },
            }}
          />
          <FilterMenu />
        </Box>
      </Box>
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='unsuccesful' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='warning' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='warning' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} />
      <Accordion title={<HistoryTitle />} />
      <Accordion title={<HistoryTitle />} status='unsuccesful' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='warning' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='warning' />
      <Accordion title={<HistoryTitle />} status='success' />
      <Accordion title={<HistoryTitle />} status='success' />
    </Box>
  );
};

export default History;
