import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, PasswordInput } from '../../components';
import { AuthWrapper } from '../../core-ui';
import client from '../../feathers'
import React, {useContext,FormEvent} from 'react'
import userContext from '../../context'
import { toast } from 'bulma-toast';







const Login = () => {
  let navigate = useNavigate();
  

  const appContext = useContext(userContext)


  const handleSubmit = (data:any,e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()

    const email = data.email 
    const password = data.password

    client.authenticate({
      strategy:'local',
      email,
      password
    }).then(async(res)=>{
      e.target.value = null
      await appContext.setUser(res.user)
      localStorage.setItem("user",JSON.stringify(res.user))
      navigate("/app")
    }).catch((err)=>{
      toast({
        message: 'Error logging in User, check network connection',
        type:'is-danger',
        dismissible:true,
        pauseOnHover:true,
      })
    })
    
  }



  return (
    <AuthWrapper paragraph='Login here as an organization'>
      <form onSubmit={handleSubmit}>
        <Input label='Email' placeholder='Enter your email address' />
        <PasswordInput />
        <FormControl
          component='fieldset'
          sx={{ width: '100%', mt: 1, mb: 1, fontSize: '0.6rem' }}
        >
          <FormGroup>
            <FormControlLabel
              label='Keep me Logged in'
              control={<Checkbox name='keepMeIn' />}
            />
          </FormGroup>
        </FormControl>
        <Button type='submit' label='Login' fullwidth='true' />
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
            to='/signup'
          >
            Click here
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Login;
