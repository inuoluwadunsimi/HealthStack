import React from 'react';
import { useNavigate } from 'react-router-dom';
import ViewOne from '../../../@views/ViewOne';
import { bandList } from '../../../utils/data';
import { BandSchema } from '../../../utils/schema';

const Bands = () => {
  let navigate = useNavigate();
  const handleCreateBand = () => {
    navigate('/app/admin/bands/create');
  };
  const handleRowClicked = (row: any, event: any) => {
    navigate(`/app/admin/bands/${row.id}`);
  };
  return (
    <>
      <ViewOne
        title='Bands'
        columns={BandSchema}
        data={bandList}
        tableTitle='Bands'
        handleCreate={handleCreateBand}
        onRowClicked={handleRowClicked}
      />
    </>
  );
};

export default Bands;
