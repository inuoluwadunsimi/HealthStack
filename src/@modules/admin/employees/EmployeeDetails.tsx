import React, { useState } from 'react';
import DetailView from '../../../@views/DetailView';
import { useParams } from 'react-router-dom';
import { employeeList } from '../../../utils/data';
import { Box, Typography } from '@mui/material';
import DynamicInput from '../../../components/Inputs/DynamicInput';
import { EmployeeSchema } from '../../../utils/schema';
import { BottomWrapper } from '../../../components/styles';
import { Button } from '../../../components';

const EmployeeDetails = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();
  const details: any = employeeList.filter((band, index) => {
    return band.id === id;
  });

  let keys = Object.keys(details[0]);
  const renderLabel = (key: any) => {
    if (key === 'id') return 'ID';
    if (key === 'firstname') return 'First Name';
    if (key === 'middlename') return 'Middle Name';
    if (key === 'lastname') return 'Last Name';
    if (key === 'profession') return 'Profession';
    if (key === 'phone') return 'Phone Number';
    if (key === 'email') return 'Email Address';
    if (key === 'facility') return 'Facility';
    if (key === 'department') return 'Department';
    if (key === 'deptunit') return 'Department Unit';
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => null;

  const renderButton = () => {
    return (
      isEditing && (
        <BottomWrapper>
          <Button label='Clear Form' background='#FFE9E9' color='#ED0423' />
          <Button label='Save Form' type='submit' />
        </BottomWrapper>
      )
    );
  };

  return (
    <DetailView
      title='Employee Detail'
      onEdit={handleEdit}
      onDelete={handleDelete}
      hasBottomNavigation={true}
      bottomNavChildren={renderButton()}
    >
      {isEditing ? (
        <>
          {EmployeeSchema.map(({ inputType, key, name }, idx) => (
            <DynamicInput
              key={key}
              name={key}
              inputType={inputType}
              label={name}
              options={[]}
              value={details[0][key]}
            />
          ))}
          <BottomWrapper>
            <Button label='Clear Form' background='#FFE9E9' color='#ED0423' />
            <Button label='Save Form' type='submit' />
          </BottomWrapper>
        </>
      ) : (
        <>
          {keys.map((key, idx) => {
            return (
              <Box>
                <label>{renderLabel(key)}</label>
                <Typography variant='body2'>{`${details[0][key]}`}</Typography>
              </Box>
            );
          })}
        </>
      )}
    </DetailView>
  );
};

export default EmployeeDetails;
