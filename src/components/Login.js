import Button from '@mui/material/Button';
import  '../css/login.css'
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import React, { useState, useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import {saveDBSocialApiData,callGoogleSocialApp} from '../Api/socialApis'
import {  useGoogleLogin } from '@react-oauth/google';
function Login(){
  const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const navigate=useNavigate()
    const responseFacebook = (response) => {
      saveDBSocialApiData({
        socialMediaId:response.id,
        name:response.name,
        email:response.email,
        accessToken:response.accessToken
      }).then(
        (data)=>{
          localStorage.setItem("email",response.email)
          localStorage.setItem("name",response.name)
          localStorage.setItem("accessToken",response.accessToken)
          navigate('/login_dashboard')
        }
      ).catch((err)=>{
        console.log(err)
      })
      
    };
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
          console.log(codeResponse)
          setUser(codeResponse)},
        onError: (error) => console.log('Login Failed:', error)
    });

   

    useEffect(
        () => {
            if (user) {
              localStorage.setItem("accessToken",user.access_token)
              callGoogleSocialApp(user).then((res) => {
                        setProfile(res.data);
                        saveDBSocialApiData({
                          socialMediaId:res.data.id,
                          name:res.data.name,
                          email:res.data.email,
                          accessToken:user.access_token
                        }).then(
                          (data)=>{
                            localStorage.setItem("email",res.data.email)
                            localStorage.setItem("name",res.data.name)
                            localStorage.setItem("accessToken",user.accessToken)
                            navigate('/login_dashboard')
                          }
                        ).catch((err)=>{
                          console.log(err)
                        })
                        
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    return (
        <div className='login_div'>
        <Grid
        container
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            height:'200px'
          },
           width:'420px',display:'flex',flexDirection:'column'
           
        }}
      >
         <Box  >
        <h2 >Social Login</h2>
        <div className='buttons'>
        <Button variant="contained" 

        sx={{
            width:'300px',
            marginTop:'10px'
           
        }}><FacebookIcon></FacebookIcon><FacebookLogin
        appId="1069956997866870" // Replace with your Facebook App ID
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,email"
        callback={responseFacebook}
        icon="fa-facebook"
        cssClass="my-facebook-button-class"
        textButton="Facebook"
      /></Button>
        <Button variant="outlined" sx={{width:'300px', marginTop:'10px'}} onClick={login}><GoogleIcon sx={{marginRight:'5px'}}/> Google</Button>
        </div>
       
       </Box>
       </Grid>
    
    </div>
    )
}


export default Login