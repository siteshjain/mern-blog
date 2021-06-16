import {makeStyles} from '@material-ui/core/styles'

export default makeStyles({
    media:{
        height:'100%',
        paddingTop:'56.25%',
        background: 'linear-gradient(to right, #bdc3c7, #2c3e50)'
    },
    border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
       
        position: 'relative',
   },
   creator:{
     marginTop:'-6px',
     textTransform:'capitalize'

   },
      date:{
        marginLeft:'20px'
      },
      overlay: {
        position: 'absolute',
        top: '10px',
        left: '20px',
        color: 'black',
      },
      overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'black',
      },
      grid: {
        display: 'flex',
      },
     
      title: {
        padding: '0 16px',
       
        marginTop:'10px',
        fontWeight:'bold',
        textTransform:'capitalize'
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
      delete:{
       color:'red',
      
      },
     
      read:{
        background:'rgb(45, 206, 128)',
        color:'#ffffff'
      }
     
})