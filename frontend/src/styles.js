import {makeStyles} from '@material-ui/core';

export default makeStyles(()=>({
    app:{
        borderRadius:20,
        margin:'35px 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        color:'rgba(0,184,256,1)',
    },
    foo:{
        textAlign:'center',
        borderRadius:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'30px',
        fontSize:'30px'
        
    }
    
}))