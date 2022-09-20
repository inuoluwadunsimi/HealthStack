import React, { useState } from 'react';
import { GrayWrapper, HeadWrapper } from '../../@views/styles';
import { Button } from '../../components';
import DynamicInput from '../../components/Inputs/DynamicInput';
import { BottomWrapper, DetailsWrapper } from '../../components/styles';
import { GridWrapper, DashboardPageWrapper } from '../../core-ui/styles';
import { ClientMiniSchema } from '../../utils/schema';

import ClientFullForm from './ClientFullForm';

interface RowProps {
  id: any;
}

interface ClientDetailsProps {
  row?: RowProps;
}

const ClientQuickForm: React.FC<ClientDetailsProps> = () => {
  const [isFullRegistration, setFullRegistration] = useState(false);

  return (
    <>
      {!isFullRegistration ? (
        <DashboardPageWrapper>
          <GrayWrapper>
            <HeadWrapper>
              <div>
                <h2>Quick Register Client</h2>
                <span>
                  Create a New client by filling out the form below to get
                  started.
                </span>
              </div>
              <Button
                label='Full Registration'
                background='#ECF3FF'
                color='#0364FF'
                showicon
                icon='bi bi-pen-fill'
                onClick={() => setFullRegistration(true)}
              />
            </HeadWrapper>

            <form onSubmit={() => console.log('Submitted')}>
              <DetailsWrapper title='Create Client' defaultExpanded={true}>
                <GridWrapper>
                  {ClientMiniSchema.map(({ inputType, key, name, options }) => (
                    <DynamicInput
                      key={key}
                      name={key}
                      inputType={inputType}
                      label={name}
                      options={options}
                    />
                  ))}
                </GridWrapper>
              </DetailsWrapper>

              <BottomWrapper>
                <Button
                  label='Clear Form'
                  background='#FFE9E9'
                  color='#ED0423'
                />
                <Button label='Save Form' type='submit' />
              </BottomWrapper>
            </form>
          </GrayWrapper>
        </DashboardPageWrapper>
      ) : (
        <ClientFullForm
          backClick={() => setFullRegistration(true)}
          onSubmit={() => console.log('Submitted')}
        />
      )}
    </>
  );
};

export default ClientQuickForm;
