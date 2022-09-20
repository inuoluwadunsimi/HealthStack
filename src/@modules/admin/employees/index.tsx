import React from 'react';
import { useNavigate } from 'react-router-dom';
import ViewOne from '../../../@views/ViewOne';
import { employeeList } from '../../../utils/data';
import { EmployeeSchema } from '../../../utils/schema';

const Employees = () => {
  let navigate = useNavigate();
  const handleCreateEmployee = () => {
    navigate('/app/admin/employees/create');
  };
  const handleRowClicked = (row: any, event: any) => {
    navigate(`/app/admin/employees/${row.id}`);
  };
  return (
    <>
      <ViewOne
        title='Employees'
        columns={EmployeeSchema}
        data={employeeList}
        tableTitle='Employees'
        handleCreate={handleCreateEmployee}
        onRowClicked={handleRowClicked}
      />
    </>
  );
};

export default Employees;
