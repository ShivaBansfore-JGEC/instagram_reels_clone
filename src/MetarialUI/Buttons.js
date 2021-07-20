import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    btn:{
        marginTop:'7%',
        '&:hover':{
            backgroundColor:'black',
            color:'white'
        }
    }
}));

function Buttons() {
    const classes=useStyles();
    return (
        <div>
        <Button className={classes.btn} variant="contained" color="primary">
        Primary
      </Button>
        </div>
    )
}

export default Buttons
