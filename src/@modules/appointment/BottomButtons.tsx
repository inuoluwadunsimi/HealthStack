import React from 'react';
import { Button } from '../../components';
interface BottomButtonsProps {
  onAttendToClick: () => void;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
}

const BottomButtons: React.FC<BottomButtonsProps> = ({
  onAttendToClick,
  onDeleteClick,
  onEditClick,
}) => {
  return (
    <>
      <Button
        label={'Edit Appointment Details'}
        background={'#04ed7c'}
        onClick={onEditClick}
      />
      <Button label='Attend to Client' onClick={onAttendToClick} />
      <Button
        label={'Delete Appointment'}
        background={'#ff0000'}
        color={'#fff'}
        onClick={onDeleteClick}
      />
    </>
  );
};

export default BottomButtons;
