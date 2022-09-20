import React, { useState } from 'react';
import { Box, Step, StepButton, Stepper } from '@mui/material';
import { AuthWrapper } from '../../core-ui';
import CreateOrganization from '../../core-ui/auth/CreateOrganization';
import {
  getOrganisationSchema,
  getOrganisationContactSchema,
} from '../app/schema/ModelSchema';
import SelectModule from '../../core-ui/auth/SelectModule';
import AddAdmin from '../../core-ui/auth/AddAdmin';
import { Button } from '../../components';
import { Link } from 'react-router-dom';

const steps = ['Organization', 'Contact ', 'Modules', 'Admin'];

const STEP_ORGANISATION = 0;
const STEP_ADDRESS = 1;
const STEP_MODULES = 2;
const STEP_EMPLOYEE = 3;

const OrganizationSignup = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  const handleBack = () => {
    setActiveStep(activeStep > STEP_ORGANISATION ? activeStep - 1 : activeStep);
  };

  // const handleNext = () => {
  //   const newActiveStep =
  //     activeStep < STEP_EMPLOYEE ? activeStep + 1 : activeStep;
  //   setActiveStep(newActiveStep);
  // };
  return (
    <AuthWrapper paragraph='Signup here as an organization'>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep > index}>
            <StepButton color='inherit' onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <form>
        {activeStep === STEP_ORGANISATION && (
          <CreateOrganization schema={getOrganisationSchema()} />
        )}
        {activeStep === STEP_ADDRESS && (
          <CreateOrganization schema={getOrganisationContactSchema({})} />
        )}
        {activeStep === STEP_MODULES && <SelectModule />}
        {activeStep === STEP_EMPLOYEE && (
          <AddAdmin
          //adminEmployee={createdAdminEmployee}
          />
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            pt: 2,
            gap: 10,
          }}
        >
          {activeStep > STEP_ORGANISATION ? (
            <Button
              color='inherit'
              disabled={activeStep === STEP_ORGANISATION}
              onClick={handleBack}
              style={{ background: 'lightgray', color: 'black' }}
            >
              Back
            </Button>
          ) : (
            <></>
          )}
          <Box sx={{ flex: '1 1 auto' }} />
          {activeStep === STEP_EMPLOYEE ? (
            <Button>Complete</Button>
          ) : (
            <Button>Next</Button>
          )}
        </Box>
      </form>
      <p style={{ padding: '2rem 0' }}>
        Have an account?
        <Link
          className='nav-link'
          style={{
            padding: '0',
            background: 'transparent',
            color: 'blue',
            marginLeft: '0.6rem',
          }}
          to='/'
        >
          Login
        </Link>
      </p>

      <Link
        className='nav-link'
        style={{
          padding: '16px 32px',
          color: '#333',
          borderRadius: '4px',
          background: '#eeeeee',
          marginLeft: '0.6rem',
          position: 'fixed',
          top: '20px',
          right: '20px',
          textDecoration: 'none',
        }}
        to='/signup'
      >
        Signup as Individual
      </Link>
    </AuthWrapper>
  );
};

export default OrganizationSignup;
