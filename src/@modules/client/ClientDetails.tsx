import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonGroup, GrayWrapper, HeadWrapper } from '../../@views/styles';
import { Button } from '../../components';
import DynamicInput from '../../components/Inputs/DynamicInput';
import { BottomWrapper, DetailsWrapper } from '../../components/styles';
import { DashboardPageWrapper, GridWrapper } from '../../core-ui/styles';
import { clientsList } from '../../utils/data';
import { ClientFullSchema } from '../../utils/schema';

const ClientDetails = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const details: any = clientsList.filter((client, index) => {
    return client.id === id;
  });

  console.log(ClientFullSchema.names);

  return (
    <DashboardPageWrapper>
      <GrayWrapper>
        <HeadWrapper>
          <Box>
            <Typography variant='h2'>
              {`${details[0].firstname} ${details[0].lastname}`} Details
            </Typography>
            <Typography>
              Below are your {`${details[0].firstname} ${details[0].lastname}`}{' '}
              details
            </Typography>
          </Box>

          <ButtonGroup>
            <Button
              label={'Delete'}
              background='#FFE9E9'
              color='#ED0423'
              showicon={true}
              icon='bi bi-pen-fill'
              // onClick={onDelete}
            />
            <Button
              label={`${isEditing ? 'Cancel Editing' : 'Edit Details'}`}
              background={'#ECF3FF'}
              color='#0364FF'
              showicon={true}
              icon='bi bi-pen-fill'
              onClick={() => setIsEditing(!isEditing)}
            />
          </ButtonGroup>
        </HeadWrapper>
        <DetailsWrapper title='Names'>
          <GridWrapper>
            {ClientFullSchema.names.map(({ inputType, key, name }) => {
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0][key]}
                      inputType={inputType}
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
          </GridWrapper>
        </DetailsWrapper>
        <DetailsWrapper title='Biodata'>
          <GridWrapper>
            {ClientFullSchema.biodata.map(
              ({ inputType, key, name, options }, idx) => {
                return (
                  <>
                    {isEditing ? (
                      <DynamicInput
                        key={key}
                        label={name}
                        name={key}
                        value={details[0]['biodata'][idx][`${key}`]}
                        inputType={inputType}
                        options={options}
                      />
                    ) : (
                      <Box key={key}>
                        <label>{name}</label>
                        <Typography variant='body2'>{`${
                          details[0]['biodata'][idx][`${key}`]
                        }`}</Typography>
                      </Box>
                    )}
                  </>
                );
              }
            )}
          </GridWrapper>
        </DetailsWrapper>

        <DetailsWrapper title='Address'>
          <GridWrapper>
            {ClientFullSchema.address.map(({ inputType, key, name }, idx) => {
              // console.log(
              //   'data address',
              //   details[0]['address'][idx][`${key}`],
              //   key
              // );
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0]['address'][idx][`${key}`]}
                      inputType={inputType}
                    />
                  ) : (
                    <Box key={key}>
                      <label>{name}</label>
                      <Typography variant='body2'>{`${
                        details[0]['address'][idx][`${key}`]
                      }`}</Typography>
                    </Box>
                  )}
                </>
              );
            })}
          </GridWrapper>
        </DetailsWrapper>

        <DetailsWrapper title='Other Details'>
          <GridWrapper>
            {ClientFullSchema.otherDetails.map(
              ({ inputType, key, name }, idx) => {
                return (
                  <>
                    {isEditing ? (
                      <DynamicInput
                        key={key}
                        label={name}
                        name={key}
                        value={details[0]['otherDetails'][idx][`${key}`]}
                        inputType={inputType}
                      />
                    ) : (
                      <Box key={key}>
                        <label>{name}</label>
                        <Typography variant='body2'>{`${
                          details[0]['otherDetails'][idx][`${key}`]
                        }`}</Typography>
                      </Box>
                    )}
                  </>
                );
              }
            )}
          </GridWrapper>
        </DetailsWrapper>
        <DetailsWrapper title='Next of Kin'>
          <GridWrapper>
            {ClientFullSchema.nextOfKin.map(({ inputType, key, name }, idx) => {
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0][key]}
                      inputType={inputType}
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
          </GridWrapper>
        </DetailsWrapper>
        <DetailsWrapper title='Non-Hospital Indentifers'>
          <GridWrapper>
            {ClientFullSchema.nonHospitalIndetifiers.map(
              ({ inputType, key, name }) => {
                return (
                  <>
                    {isEditing ? (
                      <DynamicInput
                        key={key}
                        label={name}
                        name={key}
                        value={details[0][key]}
                        inputType={inputType}
                      />
                    ) : (
                      <Box key={key}>
                        <label>{name}</label>
                        <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                      </Box>
                    )}
                  </>
                );
              }
            )}
          </GridWrapper>
        </DetailsWrapper>
        <DetailsWrapper title='Payment Information'>
          <GridWrapper>
            {ClientFullSchema.paymentInformation.map(
              ({ inputType, key, name }) => {
                return (
                  <>
                    {isEditing ? (
                      <DynamicInput
                        key={key}
                        label={name}
                        name={key}
                        value={details[0][key]}
                        inputType={inputType}
                      />
                    ) : (
                      <Box key={key}>
                        <label>{name}</label>
                        <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                      </Box>
                    )}
                  </>
                );
              }
            )}
          </GridWrapper>
        </DetailsWrapper>

        <DetailsWrapper title='Medical Data'>
          <GridWrapper>
            {ClientFullSchema.medicalData.map(({ inputType, key, name }) => {
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0][key]}
                      inputType={inputType}
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
          </GridWrapper>
        </DetailsWrapper>
        {isEditing && (
          <BottomWrapper>
            <Button label='Clear Form' background='#FFE9E9' color='#ED0423' />
            <Button label='Save Form' type='submit' />
          </BottomWrapper>
        )}
      </GrayWrapper>
    </DashboardPageWrapper>
  );
};

export default ClientDetails;
