import { Box } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppointmentCard from '../../@sections/AppointmentCard';
import AppointmentGrid from '../../@sections/AppointmentGrid';
import StatCard from '../../@sections/StatCard';
import PieChart from '../../components/charts/PieChat';
import TabPanel from '../../components/Tabs/TabPanel';
import { StyledTab, StyledTabs } from '../../components/Tabs/Tabs';
import StatusBatch from '../../core-ui/Grid/StatusBatch';
import {
  DashboardBox,
  DashboardContainer,
  DashboardPageWrapper,
  StartCardWapper,
} from '../../core-ui/styles';

export const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Overview = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <DashboardPageWrapper>
      <Box>
        <Box>
          <h2>
            Hello <span>Alex John</span>👋
          </h2>
          <p>
            Welcome to your Client Module <span>@Your Company’s</span> Front
            Desk
          </p>
        </Box>

        <StartCardWapper>
          <StatCard
            count={14}
            name={'Appointments'}
            icon={'bi bi-calendar'}
            range={'month'}
          />
          <StatCard
            count={14}
            name={'New Clients'}
            icon={'bi bi-calendar'}
            range={'month'}
          />
          <StatCard
            count={14}
            name={'Total Number of Clients'}
            icon={'bi bi-calendar'}
            range={'month'}
          />
        </StartCardWapper>

        <DashboardContainer>
          <DashboardBox>
            <header>
              <div className='top-header'>
                <h2>Appointment</h2>
                <NavLink to='app/clients/appointments'>View All</NavLink>
              </div>

              <StyledTabs value={value} onChange={handleChange}>
                <StyledTab label='This Month' {...a11yProps(0)} />
                <StyledTab label='This Week' {...a11yProps(1)} />
                <StyledTab label='Today' {...a11yProps(2)} />
              </StyledTabs>
            </header>
            <TabPanel value={value} index={0}>
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />{' '}
            </TabPanel>
            <TabPanel value={value} index={2}>
              <AppointmentCard />
            </TabPanel>
          </DashboardBox>
          <DashboardBox className='lg'>
            <div className='container'>
              <header>
                <div className='top-header'>
                  <h2>Overview of Appointment</h2>
                </div>

                <div style={{ display: 'flex', overflow: 'scroll' }}>
                  <StatusBatch status='cancelled' />
                  <StatusBatch label='Confirmed' status='confirmed' />
                  <StatusBatch label='Attended' status='attended' />
                  <StatusBatch label='Absent' status='absent' />
                  <StatusBatch label='Rescheduled' status='rescheduled' />
                </div>
              </header>

              <AppointmentGrid />
            </div>

            <div className='container'>
              <header>
                <div className='top-header'>
                  <h2>At a glance</h2>
                </div>
              </header>
              <PieChart />
            </div>
          </DashboardBox>
        </DashboardContainer>
      </Box>
    </DashboardPageWrapper>
  );
};

export default Overview;
