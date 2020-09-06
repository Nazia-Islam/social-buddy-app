import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
      width: 60,
      height: 60,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '50%'
    },
  }));

const ProfilePic = (props) => {

    const url = props.pic.picture.large;
    const classes = useStyles();

    return (
        <Grid item>
            <ButtonBase className={classes.image}>
                <img className={classes.img} src={url} alt=""/>
            </ButtonBase>
        </Grid>
    );
};

export default ProfilePic;