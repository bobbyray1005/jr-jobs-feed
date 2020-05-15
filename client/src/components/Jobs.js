import React from 'react';
import {Typography} from '@material-ui/core';
import Job from './Job';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import JobModal from './JobModal';
const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    page:{
        marginLeft:30,
    }
  });

export default function Jobs({jobs}) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const numJobs=jobs.length;
    const numPages=Math.ceil(numJobs/30);
    const jobsOnPage=jobs.slice(activeStep*30,(activeStep*30)+30)

    //modal

    const [open, setOpen] = React.useState(false);
    const [selectedJob,selectJob]=React.useState([])
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    //pagination
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    return (
        <div className="jobs">
            <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
            <Typography variant="h4" align="center" color="inherit">
                SWE Jobs for JR Developers
            </Typography>
            <Typography className={classes.page}>Found {numJobs} jobs</Typography>
            {
                jobsOnPage.map(job=><Job job={job} onClick={()=>{
                    handleClickOpen()
                     selectJob(job)}}/>)
            }
            <Typography className={classes.page}>Page {activeStep+1} of {numPages}</Typography>
        <MobileStepper
        variant="dots"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
        }
        backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
            </Button>
        }
        />            
        </div>

    )
}
