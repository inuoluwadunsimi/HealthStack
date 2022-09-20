import { Box, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import UserProfile from '../../@views/UserProfile';
import { Button } from '../../components';
import DnD from '../../components/DnD';
import DynamicInput from '../../components/Inputs/DynamicInput';
import Modal from '../../components/Modal';
import TabPanel from '../../components/Tabs/TabPanel';
import { StyledTab, StyledTabs } from '../../components/Tabs/Tabs';
import { DashboardPageWrapper } from '../../core-ui/styles';
import { a11yProps } from '../../pages/app/Overview';
import Documentation from './@sections/Documentation';
import History from './@sections/History';
import LabOrder from './@sections/LabOrder';
import Prescription from './@sections/Prescription';
import Radiology from './@sections/Radiology';
// import { useParams } from 'react-router-dom';
// import { appointmentList } from '../../utils/data';

const AttendToClient = () => {
  // const { id } = useParams();
  // const details: any = appointmentList.filter((appointment, index) => {
  //   return appointment.id === id;
  // });
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [document, setDocument] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderDocument = () => {
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: 'white',
        borderRadius: 2,
        p: 2,
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        onClick={() => setDocument(false)}
      >
        <Typography variant='h4'>Add Document</Typography>
        <IconButton sx={{ p: 2, width: '40px', height: '40px' }}>x</IconButton>
      </Stack>
      <Box sx={{ mt: 4 }}>
        <DynamicInput
          inputType='SELECT_LIST'
          label='Document Type'
          name='Document Type'
          options={[
            'Doctors Note',
            'Clinical Note',
            'Lab Result',
            'Progress Note',
          ]}
        />
        <DynamicInput
          inputType='SELECT_AUTO_SUGGEST'
          label='Search'
          name='Search'
        />
        <DynamicInput inputType='TEXT_AREA' label='Notes' name='Notes' />
        <IconButton sx={{ p: 2, width: '40px', height: '40px' }}>+</IconButton>
        <DnD />
      </Box>
    </Box>;
  };

  const isMobile = () => {
    if (window.innerWidth <= 768) return true;
    return false;
  };

  return (
    <DashboardPageWrapper>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='end'
        sx={{ p: 1, background: '#fff', pt: 0 }}
      >
        <Button
          background={'#ffd0d0'}
          color={'#ff4545'}
          sx={{ p: 1, pt: 0.4, pb: 0.4, width: '32px !important' }}
        >
          End Encounter
        </Button>
        <Button background={'#04ed7c'}>Start Telemedicine</Button>
      </Stack>
      <Stack direction={{ lg: 'row', sm: 'row', xs: 'column' }} spacing={2}>
        <Box
          sx={{
            width: { lg: '20%', xs: '100%' },
            borderRadius: 2,
          }}
        >
          <UserProfile />
        </Box>
        <Box
          sx={{
            width: { lg: '80%', xs: '100%' },
            height: '88vh',
            background: '#fbfbfb',
            borderRadius: 2,
            p: 2,
            overflow: 'auto',
            postion: { xs: 'sticky', lg: 'static' },
            top: { xs: '40px' },
          }}
        >
          <Stack
            direction={{ lg: 'row', xs: 'column-reverse' }}
            spacing={2}
            sx={{ width: '100%' }}
          >
            {/* Left */}

            <Box sx={{ width: '100%' }}>
              <Box sx={{ pt: 2, width: '100%' }}>
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                  sx={{ overflowX: 'scroll' }}
                >
                  <StyledTab label='History' {...a11yProps(0)} />
                  <StyledTab label='Lab Orders' {...a11yProps(1)} />
                  <StyledTab label='Prescriptions' {...a11yProps(2)} />
                  <StyledTab label='Radiology' {...a11yProps(3)} />
                  <StyledTab label='Documentation' {...a11yProps(4)} />
                </StyledTabs>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  background: 'white',
                  p: 1,
                  mt: 2,
                  borderRadius: 2,
                }}
              >
                <TabPanel value={value} index={0}>
                  <History />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <LabOrder />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Prescription />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Radiology />
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <Documentation
                    onAddDocument={() => {
                      setDocument(true);
                      setOpen(true);
                    }}
                  />
                </TabPanel>
              </Box>
            </Box>

            {/* Right */}
            {document && (
              <>
                {!isMobile() ? (
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      background: 'white',
                      borderRadius: 2,
                      p: 2,
                    }}
                  >
                    <Stack
                      direction='row'
                      alignItems='center'
                      justifyContent='space-between'
                      width='100%'
                      onClick={() => setDocument(false)}
                    >
                      <Typography variant='h4'>Add Document</Typography>
                      <IconButton sx={{ p: 2, width: '40px', height: '40px' }}>
                        x
                      </IconButton>
                    </Stack>
                    <Box sx={{ mt: 4 }}>
                      <DynamicInput
                        inputType='SELECT_LIST'
                        label='Document Type'
                        name='Document Type'
                        options={[
                          'Doctors Note',
                          'Clinical Note',
                          'Lab Result',
                          'Progress Note',
                        ]}
                      />
                      <DynamicInput
                        inputType='SELECT_AUTO_SUGGEST'
                        label='Search'
                        name='Search'
                      />
                      <DynamicInput
                        inputType='TEXT_AREA'
                        label='Notes'
                        name='Notes'
                      />
                      <IconButton sx={{ p: 2, width: '40px', height: '40px' }}>
                        +
                      </IconButton>
                      <DnD />
                    </Box>
                  </Box>
                ) : (
                  <Modal open={open} onClose={() => setOpen(false)}>
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        background: 'white',
                        borderRadius: 2,
                        p: 2,
                      }}
                    >
                      <Stack
                        direction='row'
                        alignItems='center'
                        justifyContent='space-between'
                        width='100%'
                        onClick={() => setDocument(false)}
                      >
                        <Typography variant='h4'>Add Document</Typography>
                        <IconButton
                          sx={{ p: 2, width: '40px', height: '40px' }}
                        >
                          x
                        </IconButton>
                      </Stack>
                      <Box sx={{ mt: 4 }}>
                        <DynamicInput
                          inputType='SELECT_LIST'
                          label='Document Type'
                          name='Document Type'
                          options={[
                            'Doctors Note',
                            'Clinical Note',
                            'Lab Result',
                            'Progress Note',
                          ]}
                        />
                        <DynamicInput
                          inputType='SELECT_AUTO_SUGGEST'
                          label='Search'
                          name='Search'
                        />
                        <DynamicInput
                          inputType='TEXT_AREA'
                          label='Notes'
                          name='Notes'
                        />
                        <IconButton
                          sx={{ p: 2, width: '40px', height: '40px' }}
                        >
                          +
                        </IconButton>
                        <DnD />
                      </Box>
                    </Box>
                  </Modal>
                )}
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </DashboardPageWrapper>
  );
};

export default AttendToClient;
