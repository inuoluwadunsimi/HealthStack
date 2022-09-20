import React from 'react';
import ViewOne from '../../@views/ViewOne';
import { useNavigate } from 'react-router-dom';
import { AppointmentSchema } from '../../utils/schema';
import { appointmentList } from '../../utils/data';

const Appointments = () => {
  let navigate = useNavigate();

  const handleCreateAppointment = () => {
    navigate('/app/clients/appointments/create-appointment');
  };
  const handleRowClicked = (row: any, event: any) => {
    navigate(`/app/clients/appointments/${row.id}`);
  };
  return (
    <>
      <ViewOne
        title='Appointments'
        columns={AppointmentSchema}
        data={appointmentList}
        tableTitle=''
        handleCreate={handleCreateAppointment}
        onRowClicked={handleRowClicked}
      />
    </>
  );
};

export default Appointments;
