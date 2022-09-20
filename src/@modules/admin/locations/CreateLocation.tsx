import React from 'react';
import { GrayWrapper, HeadWrapper } from '../../../@views/styles';
import { Button } from '../../../components';
import DynamicInput from '../../../components/Inputs/DynamicInput';
import { BottomWrapper, FullDetailsWrapper } from '../../../components/styles';
import { DashboardPageWrapper, GridWrapper } from '../../../core-ui/styles';
import { LocationSchema } from '../../../utils/schema';

const CreateLocation = () => {
  return (
    <DashboardPageWrapper>
      <GrayWrapper>
        <HeadWrapper>
          <div>
            <h2>Create Location</h2>
            <span>
              Create a New Location by filling out the form below to get
              started.
            </span>
          </div>
        </HeadWrapper>
        <form>
          <FullDetailsWrapper>
            <GridWrapper>
              {LocationSchema.map(({ inputType, key, name, options }) => (
                <DynamicInput
                  key={key}
                  name={key}
                  inputType={inputType}
                  label={name}
                  options={options}
                />
              ))}
            </GridWrapper>
          </FullDetailsWrapper>
          <BottomWrapper>
            <Button label='Clear Form' background='#FFE9E9' color='#ED0423' />
            <Button label='Save Form' type='submit' />
          </BottomWrapper>
        </form>
      </GrayWrapper>
    </DashboardPageWrapper>
  );
};

export default CreateLocation;
