import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  
    
  },
  cardGrid:{
    padding:'20px 0'
  },
  smMargin: {
    margin: theme.spacing(10),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));