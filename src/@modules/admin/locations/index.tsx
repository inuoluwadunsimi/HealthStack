import React from 'react';
import { useNavigate } from 'react-router-dom';
import ViewOne from '../../../@views/ViewOne';
import { locationList } from '../../../utils/data';
import { LocationSchema } from '../../../utils/schema';

const Locations = () => {
  let navigate = useNavigate();
  const handleCreateLocation = () => {
    navigate('/app/admin/locations/create');
  };
  const handleRowClicked = (row: any, event: any) => {
    navigate(`/app/admin/locations/${row.id}`);
  };
  return (
    <>
      <ViewOne
        title='Locations'
        columns={LocationSchema}
        data={locationList}
        tableTitle='Locations'
        handleCreate={handleCreateLocation}
        onRowClicked={handleRowClicked}
      />
    </>
  );
};

export default Locations;
