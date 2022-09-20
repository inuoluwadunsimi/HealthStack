import React, { useState } from 'react';
import DetailView from '../../@views/DetailView';

import { useParams } from 'react-router-dom';
import { appointmentList } from '../../utils/data';
import { Box, Typography } from '@mui/material';
import BottomButtons from './BottomButtons';
import { useNavigate } from 'react-router-dom';
import { AppointmentSchema } from '../../utils/schema';
import DynamicInput from '../../components/Inputs/DynamicInput';
import { BottomWrapper } from '../../components/styles';
import { Button } from '../../components';

const AppointmentDetail = () => {
  let navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();
  const details: any = appointmentList.filter((appointment, index) => {
    return appointment.id === id;
  });

  const handleAttendtoClientClick = () => {
    navigate(`/app/clients/appointments/${id}/attend-to-client`);
  };
  const handleBackClick = () => {
    navigate(`/app/clients/appointments/`);
  };
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const renderButton = () => {
    return !isEditing ? (
      <BottomButtons
        onAttendToClick={handleAttendtoClientClick}
        onEditClick={handleEditClick}
      />
    ) : (
      <BottomWrapper>
        <Button label='Clear Form' background='#FFE9E9' color='#ED0423' />
        <Button label='Save Form' type='submit' />
      </BottomWrapper>
    );
  };
  return (
    <DetailView
      title='Appointment Detail'
      hasBottomNavigation={true}
      backClick={handleBackClick}
      onEdit={handleEditClick}
      bottomNavChildren={renderButton()}
    >
      {AppointmentSchema.map(({ inputType, key, name, options }) => {
        return (
          <>
            {isEditing ? (
              <DynamicInput
                key={key}
                label={name}
                name={key}
                value={details[0][key]}
                inputType={inputType}
                options={options}
              />
            ) : (
              <Box key={key}>
                <label>{name}</label>
                <Typography variant='body2'>{`${details[0][key]}`}</Typography>
              </Box>
            )}
          </>
        );
      })}
    </DetailView>
  );
};

export default AppointmentDetail;
