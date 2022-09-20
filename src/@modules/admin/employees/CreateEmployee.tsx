import React from 'react';
import { GrayWrapper, HeadWrapper } from '../../../@views/styles';
import { Button } from '../../../components';
import DynamicInput from '../../../components/Inputs/DynamicInput';
import { BottomWrapper, FullDetailsWrapper } from '../../../components/styles';
import { DashboardPageWrapper, GridWrapper } from '../../../core-ui/styles';
import { EmployeeSchema } from '../../../utils/schema';

const CreateEmployee = () => {
  return (
    <DashboardPageWrapper>
      <GrayWrapper>
        <HeadWrapper>
          <div>
            <h2>Create Employee</h2>
            <span>
              Create a New Employee by filling out the form below to get
              started.
            </span>
          </div>
        </HeadWrapper>
        <form>
          <FullDetailsWrapper>
            <GridWrapper>
              {EmployeeSchema.map(({ inputType, key, name }) => (
                <DynamicInput
                  key={key}
                  name={key}
                  inputType={inputType}
                  label={name}
                  options={[]}
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

export default CreateEmployee;
