import React from 'react';

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    footer:{
        width: '100%',
        bottom:0,
        position:'absolute',
        borderTop:'#C1A783 5px solid',
        minHeight:'50px',
        backgroundColor:'#002134'
    }

}));

export default function Footer() {
    const classes = useStyles();

    return(
    <div className={classes.footer}>


    </div>
    
    
    );
}