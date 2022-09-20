import React from 'react';
import { GrayWrapper, HeadWrapper } from '../../@views/styles';
import { Button } from '../../components';
import DynamicInput from '../../components/Inputs/DynamicInput';
import { BottomWrapper, FullDetailsWrapper } from '../../components/styles';
import { GridWrapper, DashboardPageWrapper } from '../../core-ui/styles';
import { AppointmentSchema } from '../../utils/schema';

const CreateAppointment = () => {
  return (
    <DashboardPageWrapper>
      <GrayWrapper>
        <HeadWrapper>
          <div>
            <h2>Create Appointment</h2>
            <span>
              Create a New Appointment by filling out the form below to get
              started.
            </span>
          </div>
          <Button label='Back to List' background='#fdfdfd' color='#333' />
        </HeadWrapper>
        <form>
          <FullDetailsWrapper title={'Create Appointment'}>
            {AppointmentSchema.map((field: any, index) => {
              return (
                <DynamicInput
                  key={index}
                  name={field.key}
                  label={field.name}
                  inputType={field.inputType}
                  options={field.options || []}
                />
              );
            })}
          </FullDetailsWrapper>
          {/* <FullDetailsWrapper title={'Create Appointment'}>
            {AppointmentSchema.map((field: any, index) => {
              if (field.length) {
                return (
                  <GridWrapper className='subgrid two-columns' key={index}>
                    <DynamicInput
                      name={field.key}
                      label={field.name}
                      inputType={field.inputType}
                      options={field.options || []}
                    />
                  </GridWrapper>
                );
              } else {
                return (
                  <DynamicInput
                    key={index}
                    name={field.key}
                    label={field.name}
                    inputType={field.inputType}
                    options={field.options || []}
                  />
                );
              }
            })}
          </FullDetailsWrapper> */}

          <BottomWrapper>
            <Button label='Clear Form' background='#FFE9E9' color='#ED0423' />
            <Button label='Save Form' type='submit' />
          </BottomWrapper>
        </form>
      </GrayWrapper>
    </DashboardPageWrapper>
  );
};

export default CreateAppointment;
