import React from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import  Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles=makeStyles({
    root:{
        maxWidth:800,
        margin:20,
    
    },
    title:{
        fontSize:18,
    },
    pos:{
        marginBottom:12,
    }
});
export default function Job({job,onClick}) {
    const classes=useStyles();
    return (
        <div className={'job'}>
            <Card className={classes.root} variant="outlined" onClick={onClick}>
                <CardHeader title={job.title} subheader={job.created_at} >

                </CardHeader>    
                <CardContent>
                    <Typography variant="subtitle1" color="secondary">
                    Company:  {job.company}
                    </Typography>
                    <Typography variant="subtitle2">
                    Location: {job.location}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
