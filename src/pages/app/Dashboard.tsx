import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContent, LayoutWrapper } from '../../components/styles';
import DashboardSideMenu from '../../core-ui/DashboardSideMenu';
import DashboardTopMenu from '../../core-ui/DashboardTopMenu';
interface DashboardProps {
  children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'Health Stack - Dashboard';
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <LayoutWrapper>
      <DashboardSideMenu isOpen={isOpen} />
      <LayoutContent>
        <DashboardTopMenu
          isOpen={isOpen}
          handleClick={() => setIsOpen(!isOpen)}
        />
        <Box className='layout__content-main'>
          {children}
          <Outlet />
        </Box>
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default Dashboard;
