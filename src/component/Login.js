import Button from '@mui/material/Button';
import  '../css/login.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

function Login(){
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
            height:'140px'
          },
           width:'500px',display:'flex',flexDirection:'column'
           
        }}
      >
         <Box >
        <h2 >Social Login</h2>
        <div className='buttons'>
        <Button variant="contained" sx={{
            marginRight:'5px',
        }}><FacebookIcon sx={{marginRight:'2px'}}></FacebookIcon>  FaceBook</Button>
        <Button variant="outlined"><GoogleIcon sx={{marginRight:'2px'}}></GoogleIcon> Google</Button>
        </div>
       
       </Box>
       </Grid>
    
    </div>
    )
}


export default Login