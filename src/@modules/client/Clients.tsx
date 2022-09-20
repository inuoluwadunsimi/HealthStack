import React from 'react';
import { useNavigate } from 'react-router-dom';
import ViewOne from '../../@views/ViewOne';
import { clientsList } from '../../utils/data';
import { ClientMiniSchema } from '../../utils/schema';

interface ClientsProps {
  title?: string;
}

const Clients: React.FC<ClientsProps> = ({ title }) => {
  let navigate = useNavigate();
  const handleCreateClient = () => {
    navigate('/app/clients/create-client');
    console.log('client create');
  };

  const handleRowClicked = (row: any, event: any) => {
    navigate(`/app/clients/${row.id}`);
  };
  return (
    <>
      <ViewOne
        title='Clients'
        columns={ClientMiniSchema}
        data={clientsList}
        tableTitle='Clients'
        handleCreate={handleCreateClient}
        onRowClicked={handleRowClicked}
      />
    </>
  );
};

export default Clients;
