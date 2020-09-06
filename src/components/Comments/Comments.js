import React, { useEffect, useState } from 'react';
import './Comment.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProfilePic from '../ProfilePic/ProfilePic';



const Comments = (props) => {
    const [pics, setPics] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
        .then(res=> res.json())
        .then(data => setPics(data.results));
    }, []);

    const {name, body, email} = props.comments;
    // const pp = pics.picture;
    // const url = pp.large;
  return (   
        <div className="comment-body">
            <Grid container spacing={2}>
                {
                    pics.map((pic) => <ProfilePic pic={pic}></ProfilePic>)
                }
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            {name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {body}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            email: {email}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
  );
};

export default Comments;


// import React from 'react';
// import './Comment.css';

// const Comments = (props) => {
//     
    
//     return (
//         <div className="comment-body">
//             <p>{name}</p>
//             <p className="body-font">{body}</p>   
//             <p><small>{email}</small></p>
//         </div>
//     );
// };

// export default Comments;