import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import './UserCard.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px auto',
    cursor: 'pointer',
  },
  media: {
    height: 140,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    marginTop: -30,
    border: '3px solid white',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const UserCard = ({ user }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardMedia
        className={classes.media}
        image={user.backgroundImage}
        title={user.name}
      />
      <img src={user.avatar} alt={user.name} className={classes.avatar} />
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {user.jobTitle}
        </Typography>
        <div className={classes.socialIcons}>
          {Array.isArray(user.socialMedia) && user.socialMedia.map((icon, index) => (
            <a href={icon.link} key={index} target="_blank" rel="noopener noreferrer">
              <img src={icon.icon} alt={icon.name} width="20" height="20" />
            </a>
          ))}
        </div>
        <div className={classes.stats}>
          <Typography variant="body2">Followers: {user.followers}</Typography>
          <Typography variant="body2">Following: {user.following}</Typography>
          <Typography variant="body2">Total Posts: {user.totalPosts}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
