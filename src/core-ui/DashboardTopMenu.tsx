import { Box } from '@mui/material';
import React, { useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import LocationModal from './LocationModal';
import LocationSelect from './LocationSelect';
import ProfileMenu from './ProfileMenu';
import { Profile, TopMenuWrapper } from './styles';

interface DashboardTopMenuProps {
  isOpen?: boolean;
  handleClick?: () => void;
}

const defaultList = [
  { code: 'NG', label: 'Agege', location: 'Agege' },
  { code: 'NG', label: 'Ikeja', location: 'Agege' },
];

const DashboardTopMenu: React.FC<DashboardTopMenuProps> = ({
  isOpen,
  handleClick,
}) => {
  const [locationOptions, setLocationOptions] = useState(defaultList);

  const [selectedLocation, setSelectedLocation] = useState<any>();
  const [open, setOpen] = useState<boolean>(true);

  const handleSelectLocation = () => {
    setLocationOptions([]);
    setSelectedLocation([]);
  };

  return (
    <TopMenuWrapper>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
        <span
          onClick={handleClick}
          style={{
            fontSize: '1.2rem',
            marginRight: '1rem',
            fontWeight: 'bold',
          }}
        >
          {!isOpen ? (
            <i className='bi bi-list'></i>
          ) : (
            <i className='bi bi-list' />
          )}
        </span>
        <span className='breadcrumb'>
          <Breadcrumbs />
        </span>
      </Box>
      <Profile>
        <div className='location-selector'>
          <LocationSelect
            defaultLocationId={selectedLocation?._id || ''}
            locations={locationOptions}
            onChange={handleSelectLocation}
          />
          {
            <LocationModal
              locations={locationOptions}
              onSelectLocation={handleSelectLocation}
              open={open}
              setOpen={setOpen}
            />
          }
        </div>

        <Box className='profile-item'>
          <i className='bi bi-bell-fill' />
          {/* <Avatar src="/img_avatar.png" alt="" /> */}
          <ProfileMenu />
        </Box>
      </Profile>
    </TopMenuWrapper>
  );
};

export default DashboardTopMenu;
