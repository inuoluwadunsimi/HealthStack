import React, { useState } from 'react';
import { AuthWrapper } from '../../core-ui';
import { Button, Input, PasswordInput } from '../../components';
import { Link } from 'react-router-dom';

const IndividualSignup = () => {
  const [errors, setErrors] = useState({
    firstName: { message: '' },
    lastName: { message: '' },
    email: { message: '' },
    phoneNumber: { message: '' },
  });

  console.log(setErrors);
  return (
    <AuthWrapper paragraph='Create an account as an Individual'>
      <form>
        <div>
          <Input
            name='firstName'
            label='First Name'
            placeholder='Enter your First Name'
          />
          {errors.firstName && (
            <p style={{ color: 'blue', fontSize: '16px' }}>
              {errors.firstName?.message}
            </p>
          )}
        </div>
        <div>
          <Input
            name='lastName'
            label='Last Name'
            placeholder='Enter your last Name'
          />
          {errors.lastName && (
            <p style={{ color: 'blue', fontSize: '16px' }}>
              {errors.lastName?.message}
            </p>
          )}
        </div>
        <div>
          <Input
            name='email'
            label='Email'
            placeholder='Enter your Email Address'
          />
          {errors.email && (
            <p style={{ color: 'blue', fontSize: '16px' }}>
              {errors.email?.message}
            </p>
          )}
        </div>
        <div>
          <Input
            name='phone'
            label='Phone Number'
            placeholder='Enter your phone number'
            type='tel'
          />
          {errors.phoneNumber && (
            <p style={{ color: 'blue', fontSize: '16px' }}>
              {errors.phoneNumber?.message}
            </p>
          )}
        </div>
        <div>
          <PasswordInput />
        </div>
        <Button type='submit' label='Signup' fullwidth='true' />
      </form>

      <div className='bottom-center'>
        <p>or continue with</p>
        <a href='#google-login'>
          <i className='bi bi-google' />
        </a>
        <a href='#facebook-login'>
          <i className='bi bi-facebook' />
        </a>
        <a href='#linkedin-login'>
          <i className='bi bi-linkedin' />
        </a>

        <p>
          Want to create organization?
          <Link
            className='nav-link'
            style={{
              padding: '0',
              background: 'transparent',
              color: 'blue',
              marginLeft: '0.6rem',
            }}
            to='/organization-signup'
          >
            Click here
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default IndividualSignup;
